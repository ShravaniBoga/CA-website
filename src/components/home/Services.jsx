import React, { useState } from 'react';
import servicesData from '../../data/services.json';

const Services = () => {
    const [hovered, setHovered] = useState(null);

    return (
        <section className="px-10 mt-[-30px] py-20 bg-white ">
            <div className="container px-4 mx-auto lg:px-12">



                <h2 className="relative mb-3 text-2xl font-semibold tracking-wide text-center text-orange-500 font-oxygen">
                    <span className="inline-block p-2 ">SERVICES WE PROVIDE</span>
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-orange-500"></span>

                </h2>


                <h2 className="mb-4 text-xl font-bold text-center text-blue-900">
                    timely<span className="text-orange-500">.</span>  <span>relevant<span className="text-orange-500">.</span> </span> <span>innovative<span className="text-orange-500">.</span> </span>
                </h2>



                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {servicesData.map((service, index) => (
                        <div
                            key={service.id}
                            className={`p-6 rounded ${hovered === index ? 'text-white bg-blue-900' : 'bg-white'} border border-dashed border-black border-3 mx-auto my-4 md:my-0 md:mx-0`}
                            onMouseEnter={() => setHovered(index)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            <i className={`mb-4 text-4xl ${hovered === index ? 'text-white' : 'text-blue-900'} ${service.icon}`}></i>
                            <h3 className={`mb-2 text-xl font-semibold ${hovered === index ? 'text-white' : 'text-blue-900'}`}>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;


