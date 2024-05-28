import React, { useState } from 'react';
import servicesData from '../../data/services.json';

const Services = () => {
    const [hovered, setHovered] = useState(null);

    return (
        <section className="px-10 py-20 bg-white ">
            <div className="container px-4 mx-auto lg:px-12">
                <h2 className="mb-8 text-2xl font-bold text-center text-orange-500">SERVICES WE PROVIDE</h2>
                <p className="mb-12 text-center text-gray-700">timely. relevant. innovative.</p>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {servicesData.map((service, index) => (
                        <div
                            key={service.id}
                            className={`p-6 rounded ${hovered === index ? 'text-white bg-blue-900' : 'bg-white border'}`}
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
