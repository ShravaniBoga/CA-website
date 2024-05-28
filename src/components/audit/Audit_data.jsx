import React, { useState } from 'react';
import auditData from '../../data/audit.json';

const Audit_data = () => {
    const [hovered, setHovered] = useState(null);

    return (
        <section className="px-20 py-10 bg-white">
            <div className="container px-4 mx-auto lg:px-12">
                <div className='pb-2'>

                    <h2 class="relative mb-4  text-2xl font-semibold tracking-wide text-center text-orange-500 font-oxygen">
                        <span class="inline-block p-2">DIFFERENT TYPE OF AUDIT SERVICES</span>
                        <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-orange-500"></span>
                    </h2>
                </div>
                {/* <p className="mb-12 text-center text-gray-700">timely. relevant. innovative.</p> */}
                <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-3">
                    {auditData.map((service, index) => (
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

            <h2 className="py-4 mb-8 text-3xl font-bold text-center text-white bg-orange-500">I want to talk with expert       {">"}  </h2>
            <h2 class="relative mb-4  text-xl font-semibold tracking-wide text-center text-orange-500 font-oxygen">
                <span class="inline-block p-2">AUDITING PROCESS</span>
                <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-orange-500"></span>
            </h2>
            <div className="flex items-center justify-center h-screen bg-white my-14">
                <img src={"/assets/ring.png"} className="max-w-full max-h-full" />
            </div>
            {/* ############# */}
            {/* img &content */}
            {/* <div 
            className="flex items-center justify-center min-h-screen bg-white"> */}
            <div className="w-full h-full my-8 text-white bg-gradient-to-br from-indigo-900 via-gray-600 to-indigo-300indigo-900">
                <div className="flex">
                    <div className="w-1/2">
                        <img
                            className="object-cover w-full h-full"
                            src="./assets/gl.png" // Replace with the correct image path
                            alt="office-girl"
                        />
                    </div>
                    <div className="w-1/2 p-8">
                        <h2 className="mb-4 text-2xl font-bold">
                            WHY IS KMS YOUR BEST CHOICE FOR AUDITING
                            <h2 className="relative pb-2 text-2xl font-bold text-leftfont-oxygen">
                                SERVICES?
                                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-orange-500"></span>
                            </h2>


                        </h2>
                        <p className='py-3 my-3'>today’s corporate world is getting less and less tolerant of errors and inaccuracy</p>
                        <div className="flex justify-center p-4 text-black bg-white font-smal ">
                            <div className="w-1/2 pr-8 border-r border-gray-300">
                                <p className="mb-4">
                                    Today's corporate world is getting less and less tolerant of errors and inaccuracy. Shareholders, creditors, users of financial statements, and the government expect auditors to provide an accurate and independent opinion on the financial statements. At Khandhar Mehta and Shah, we make sure we incorporate all the tools and procedures which reduce these errors. In our auditing service, we focus on procedural robustness, constant reliability and support, and operational consistency.
                                </p>
                                {/* <p>
                                    We continuously engage with the clients, gain a deep understanding of the firm, use advanced and updated IT tools, and provide outcome-based, value-driven solutions and services. We provide auditing services to Indian companies, partnership firms, overseas subsidiaries of Indian companies, and other entities.
                                </p> */}
                            </div>
                            <div className="w-1/2 pl-8 ">
                                {/* <p className="mb-4">
                                    Today's corporate world is getting less and less tolerant of errors and inaccuracy. Shareholders, creditors, users of financial statements, and the government expect auditors to provide an accurate and independent opinion on the financial statements. At Khandhar Mehta and Shah, we make sure we incorporate all the tools and procedures which reduce these errors. In our auditing service, we focus on procedural robustness, constant reliability and support, and operational consistency.
                                </p> */}
                                <p>
                                    We continuously engage with the clients, gain a deep understanding of the firm, use advanced and updated IT tools, and provide outcome-based, value-driven solutions and services. We provide auditing services to Indian companies, partnership firms, overseas subsidiaries of Indian companies, and other entities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-4 text-center text-white bg-gray-800">
                    {/* <h3 className="text-lg font-semibold">WHAT OUR CLIENTS HAVE TO SAY ABOUT OUR AUDITING SERVICES?</h3>
                    <p className="mt-2 text-gray-400">trust. transparency. professional expertise.</p> */}
                </div>
            </div>
            {/* </div> */}
        </section>


    );
};

export default Audit_data;

{/* I want to talk with expert       >

AUDITING PROCESS */}
