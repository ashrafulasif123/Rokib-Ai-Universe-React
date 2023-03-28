import React from 'react';

const Modal = (props) => {

    console.log(props)
    const { accuracy, features, image_link, input_output_examples, integrations, pricing, tool_name, use_cases, description } = props.singleData;
    // console.log(features);
    // const featuresArrOfObj =  Object.values(features || {} );
    // console.log(featuresArrOfObj)
    // console.log(integrations)

    return (
        <>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className="card lg:card-side bg-base-100">

                        <div className="card-body border-2 border-error mr-4">
                            <h2 className="card-title">
                                {description ? description : 'Not Found'}
                            </h2>
                            <div className="flex justify-between">
                                <div>
                                    <h1 className='text-xl font-bold'>Features</h1>
                                    {
                                        Object.values(features || {}).map((value, index) =>
                                            <p>{value.feature_name ? value.feature_name : "no data found"}</p>
                                        )
                                    }
                                    {/* {
                                        featuresArrOfObj.map((feature, index) => 
                                            <p>{index + 1}. {feature.feature_name}</p>
                                            )
                                    } */}
                                </div>
                                <div>
                                    <h1 className='text-xl font-bold'>Integrations</h1>
                                    {
                                        // integrations ?  (integrations.map((integration, index) => <p>{index + 1}. {integration ? integration : 'not found'}</p>)) : 'No data found' 
                                        integrations && integrations.map((int) => (
                                        <p>{int ? int : 'not found'}</p>
                                        ))
                                    }
                                </div>
                            </div>

                        </div>
                        <figure className='w-full'><img className='w-full h-96' src={image_link && image_link[0]} alt="Album" /></figure>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;