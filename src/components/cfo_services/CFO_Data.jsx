


// import React from 'react';
// import CFOData from '../../data/cfo.json';

// const CFO_Data = () => {
//     return (
//         <div>
//             <main className="p-20 pt-10 pb-0">
//                 <div className="px-20 text-left">
//                     <section className="px-4 py-10 bg-white">
//                         <div className="container mx-auto">
//                             <div className="space-y-8">
//                                 {CFOData.map((service) => (
//                                     <div
//                                         key={service.number}
//                                         className="flex flex-col items-center p-6 transition-shadow duration-300 bg-white border-2 border-gray-500 border-dotted rounded shadow-md hover:shadow-xl hover:border-solid md:flex-row"
//                                     >
//                                         <img
//                                             src={service.image}
//                                             alt={service.title}
//                                             className="object-cover w-full h-48 mb-4 rounded md:w-1/3 md:mb-0 md:mr-6"
//                                         />
//                                         <div>
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

// export default CFO_Data;




import React from 'react';
import CFOData from '../../data/cfo.json';

const CFO_Data = () => {
    return (
        <div>
            <main className="p-20 pt-10 pb-0">
                <div className="px-20 text-left">
                    <section className="px-4 py-10 bg-white">
                        <div className="container mx-auto">
                            <div className="space-y-8">
                                {CFOData.map((service, index) => (
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
                                            <p>{service.description}</p>
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

export default CFO_Data;
