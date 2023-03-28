import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import SingleData from '../SingleData/SingleData';

const Card = () => {
    const [data, setData] = useState([]);
    const [singleData, setSingleData] = useState({});
    const [showAll, setShowAll] = useState(false);
    const [uniqeId, setUniquId] = useState(null);
    // console.log(uniqeId)
    const handleShowAll = () => setShowAll(true);

    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqeId}`)
            .then(res => res.json())
            .then(data => setSingleData(data.data))
    }, [uniqeId])

    useEffect(() => {
        const loadData = async () => {
            const res = await fetch(
                'https://openapi.programming-hero.com/api/ai/tools'
            );
            const data = await res.json();
            setData(data.data.tools);
        }
        loadData()

    }, []);
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-12 my-6'>
                {
                    data?.slice(0, showAll ? 12 : 6).map(singleData => <SingleData singleData={singleData} key={singleData.id} setUniquId={setUniquId} />)
                }
            </div>
            {
                !showAll && <span onClick={handleShowAll}>
                    <Button>See More</Button>
                </span>
            }
            <Modal singleData={singleData}/>
        </>
    );
};

export default Card;