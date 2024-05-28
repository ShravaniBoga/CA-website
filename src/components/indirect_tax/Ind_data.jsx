


import React, { useState } from 'react';
import Indirect_Data from '../../data/Indirect.json';

const Ind_data = () => {
    const [hovered, setHovered] = useState(null);

    return (
        <section className="px-20 py-5 bg-white">
            <div className="container px-4 pb-10 mx-auto lg:px-12">
                {/* <div className='pb-2'>

                    <h2 class="relative mb-4  text-2xl font-semibold tracking-wide text-center text-orange-500 font-oxygen">
                        <span class="inline-block p-2">DIFFERENT TYPE OF AUDIT SERVICES</span>
                        <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-orange-500"></span>
                    </h2>
                </div> */}
                {/* <p className="mb-12 text-center text-gray-700">timely. relevant. innovative.</p> */}
                <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-3">
                    {Indirect_Data.map((service, index) => (
                        <div
                            key={service.id}
                            className="p-6 transition-shadow duration-300 bg-white border-2 border-gray-500 border-dotted rounded shadow-md group hover:shadow-xl"
                            style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)' }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -4px rgba(0, 0, 0, 0.3)';
                                e.currentTarget.classList.remove('border-dotted');
                                e.currentTarget.classList.add('border-solid');
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)';
                                e.currentTarget.classList.remove('border-solid');
                                e.currentTarget.classList.add('border-dotted');
                            }}
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="object-cover w-full h-48 mb-4 rounded"
                            />
                            <h3 className="mb-2 text-xl font-semibold text-blue-900">{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>




            </div>



        </section>


    );
};

export default Ind_data;

{/* I want to talk with expert       >

AUDITING PROCESS */}
