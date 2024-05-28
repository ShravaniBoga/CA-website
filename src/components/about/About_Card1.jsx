import React from 'react'

const About_Card1 = () => {
    return (
        <div>
            <div className="flex items-center justify-center min-h-screen pt-6 mt-6 ">
                <div className="flex flex-col overflow-hidden bg-white rounded-lg shadow-lg md:flex-row">
                    <div className="md:w-1/2">
                        <img
                            src="./assets/couple.png"
                            alt="Auditor"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="p-8 py-12 text-white md:w-1/2 bg-gradient-to-br from-gray-400 to-gray-700">
                        <h2 className="relative mb-4 text-2xl font-semibold tracking-wider text-white-500 font-oxygen">

                            WHAT CAN WE DO FOR YOU?
                            <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-orange-500"></span>
                        </h2>
                        <p className="pb-3">
                            The Scope Of Our Auditing Services Mainly Depends On Three
                            Aspects-
                        </p>
                        {/* <h2 className="py-5 mb-4 text-4xl font-bold tracking-wider text-white-400">Terms of the engagement<span className='text-orange-500'>.</span><br /> Pronouncement of ICAI<span className='text-orange-500'>.</span><br /> Statutory requirements<span className='text-orange-500'>.</span></h2> */}
                        <h2 className="py-5 mb-4 text-3xl font-extrabold tracking-wider text-white-400 font-montserrat text-34 leading-44">
                            <div className="py-1">
                                Value Unlocking
                                <span className="text-orange-500">.</span>
                                Value Enabling
                                <span className="text-orange-500">.</span>
                                <br />
                            </div>
                            {/* Value Unlocking. Value Enabling.
Value Preservation. Value Reporting. */}
                            <div className="py-1">
                                Value Preservation
                                <span className="text-orange-500">.</span>
                                Value Reporting
                                <span className="text-orange-500">.</span>
                                <br />
                            </div>
                            {/* <div className="py-1">
                                Statutory requirements<span className="text-orange-500">.</span>
                            </div> */}
                        </h2>
                        <div className="p-4 px-8 my-6 text-[20x] text-black bg-white">
                            <p className="pb-2 mb-4 border-b border-gray-500">
                                Value Unlocking : By providing strategic advisory service and helping in building a strong foundation for future expansion and growth
                            </p>
                            <p className="pb-2 mb-4 border-b border-gray-500">
                                Value Enabling : By supporting the management in decision-making and by analyzing and evaluating the performance.
                            </p>
                            <p className="pb-2 mb-4 border-b border-gray-500">
                                Value Preservation : By detecting, preventing, and mitigating risks and designing and implementing a robust internal control framework.
                            </p>
                            <p className="pb-2 mb-4 border-b border-gray-500">
                                Value Reporting : By providing timely KPIs, reports and ensuring the relevant and useful flow of information with strict adherence to timeline.
                            </p>
                            {/* <p className="pb-2 mb-4 border-b border-gray-500">
                                We check if the company is carrying its business in compliance
                                with the statutory requirements.
                            </p>
                            <p className="pb-2 mb-4 border-b border-gray-500">
                                We check if the financial statements are in sync with the books of
                                accounts and opine on the true and fair view of the state of
                                affairs and profitability of the company.
                            </p>
                            <p>
                                When our auditor performs any duties related to auditing or
                                providing consultancy or solutions related to the finance and
                                accounts, he makes sure he stays within the boundaries of the
                                duties and performs within the scope of his competence. Our
                                auditors follow relevant accounting standards (IndAS, India GAAP,
                                or IFRS) as per the terms of engagement.
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About_Card1
