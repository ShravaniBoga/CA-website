
// import React from 'react';
// import ConsultData from '../../data/consult.json';

// const Consultancy_Data = () => {
//     return (
//         <div>

//             <main className="p-20 pt-10 pb-0">
//                 <div className="px-20 text-left">
//                     <section className="px-4 py-10 bg-white">

//                         <div className='mt-[-40px]'>
//                             <h2 class="relative mb-4  text-3xl font-semibold tracking-widest text-center text-orange-500 font-oxygen">
//                                 <span class="inline-block p-2">CONSULTANCY SERVICES</span>
//                                 <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-orange-500"></span>
//                             </h2>

//                             <div >
//                                 <span
//                                     className="block pb-5 font-semibold leading-10 text-center text-blue-900 font-montserrat"
//                                     style={{ fontSize: "25px" }}
//                                 >
//                                     The vast range of consultancy services that we provide includes the following:         </span>
//                             </div>

//                         </div>


//                         <div className="container mx-auto">
//                             <div className="space-y-8">
//                                 {ConsultData.map((service, index) => (
//                                     <div
//                                         key={service.number}
//                                         className={`flex flex-col items-center p-6 transition-shadow duration-300 bg-white border-2 border-gray-500 border-dotted rounded shadow-md hover:shadow-xl hover:border-solid md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
//                                     >
//                                         <img
//                                             src={service.image}
//                                             alt={service.title}
//                                             className={`object-cover w-full h-48 mb-4 rounded md:w-1/3 md:mb-0 ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'}`}
//                                         />
//                                         <div className={`text-left ${index % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>
//                                             <h1 className="mb-2 text-5xl font-semibold text-blue-900">{service.number}</h1>
//                                             <h3 className="mb-2 text-xl font-semibold text-blue-900">{service.title}</h3>
//                                             <p>{service.description}</p>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </section>
//                 </div>
//             </main>
//             {/* other */}
//         </div>
//     );
// };

// export default Consultancy_Data;
// import React from 'react';
// import ConsultData from '../../data/consult.json';

// const Consultancy_Data = () => {
//     return (
//         <div>
//             <main className="p-20 pt-10 pb-0">
//                 <div className="px-20 text-left">
//                     <section className="px-4 py-10 bg-white">
//                         <div className='mt-[-40px]'>
//                             <h2 className="relative mb-4 text-3xl font-semibold tracking-widest text-center text-orange-500 font-oxygen">
//                                 <span className="inline-block p-2">CONSULTANCY SERVICES</span>
//                                 <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-orange-500"></span>
//                             </h2>
//                             <div>
//                                 <span
//                                     className="block pb-5 font-semibold leading-10 text-center text-blue-900 font-montserrat"
//                                     style={{ fontSize: "25px" }}
//                                 >
//                                     The vast range of consultancy services that we provide includes the following:
//                                 </span>
//                             </div>
//                         </div>
//                         <div className="container mx-auto">
//                             <div className="space-y-8">
//                                 {ConsultData.map((service, index) => (
//                                     <div
//                                         key={service.number}
//                                         className={`flex flex-col items-center p-6 transition-shadow duration-300 bg-white border-2 border-gray-500 border-dotted rounded shadow-md hover:shadow-xl hover:border-solid md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
//                                     >
//                                         <img
//                                             src={service.image}
//                                             alt={service.title}
//                                             className={`object-cover w-full h-48 mb-4 rounded md:w-1/3 md:mb-0 ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'}`}
//                                         />
//                                         <div className={`text-left ${index % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>
//                                             <h1 className="mb-2 text-5xl font-semibold text-blue-900">{service.number}</h1>
//                                             <h3 className="mb-2 text-xl font-semibold text-blue-900">{service.title}</h3>
//                                             <p className="text-center">{service.description}</p>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </section>
//                 </div>
//             </main>
//             {/* other */}
//         </div>
//     );
// };

// export default Consultancy_Data;



import React from 'react';
import ConsultData from '../../data/consult.json';

const Consultancy_Data = () => {
    return (
        <div>
            <main className="p-20 pt-10 pb-0">
                <div className="px-20 text-left">
                    <section className="px-4 py-10 bg-white">
                        <div className='mt-[-40px]'>
                            <h2 className="relative mb-4 text-3xl font-semibold tracking-widest text-center text-orange-500 font-oxygen">
                                <span className="inline-block p-2">CONSULTANCY SERVICES</span>
                                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-orange-500"></span>
                            </h2>
                            <div>
                                <span
                                    className="block pb-5 font-semibold leading-10 text-center text-blue-900 font-montserrat"
                                    style={{ fontSize: "25px" }}
                                >
                                    The vast range of consultancy services that we provide includes the following:
                                </span>
                            </div>
                        </div>
                        <div className="container mx-auto">
                            <div className="space-y-8">
                                {ConsultData.map((service, index) => (
                                    <div
                                        key={service.number}
                                        className={`flex flex-col items-center p-6 transition-shadow duration-300 bg-white border-2 border-gray-500 border-dotted rounded shadow-md hover:shadow-xl hover:border-solid md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                                    >
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className={`object-cover w-full h-48 mb-4 rounded md:w-1/3 md:mb-0 ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'}`}
                                        />
                                        <div className={`text-left ${index % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>
                                            <h1 className="mb-2 text-5xl font-semibold text-blue-900">{service.number}</h1>
                                            <h3 className="mb-2 text-xl font-semibold text-blue-900">{service.title}</h3>
                                            <p className="text-left">{service.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            {/* other */}
        </div>
    );
};

export default Consultancy_Data;
