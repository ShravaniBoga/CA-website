import React from "react";
import Audit_data from "./Audit_data";
import Audit_testimonial from "./Audit_testimonial";
import Audit_FAQ from "./Audit_FAQ";

const Audit_services = () => {
    return (
        <div className="font-sans text-[#000B1E]">
            <header className="relative text-center text-white">
                <img
                    src="./assets/audit-ban.jpg"
                    alt="background"
                    className="w-full h-96 opacity-80"
                />
                <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <h1 className="pb-1 mb-1 text-6xl font-extrabold tracking-wide ">Auditing Services</h1>

                    <p className="pt-0 mt-0 font-bold text-white font-montserrat text-[25px] leading-0">
                        Khandhar Mehta and Shah Auditing Services
                    </p>
                </div>
            </header>
            <main className="p-20 pt-10 pb-0">
                <div className="px-20 text-left">
                    <h2 className="relative pb-2 text-3xl font-semibold text-left text-orange-500 font-oxygen">
                        BUSINESSES KNOW THE IMPORTANCE OF AUDIT SERVICES
                        <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-orange-500"></span>
                    </h2>


                    <div className="flex gap-10 mt-8 justify-left">
                        <span
                            className="block text-lg font-semibold leading-10 text-gray-600 font-montserrat"
                            style={{ fontSize: "30px" }}
                        >
                            As it is a stepping stone and medium for firms to thrive and
                            safeguard the business from unforeseen situations.
                        </span>
                        {/* <span className="block text-lg font-semibold leading-10 text-gray-600 font-montserrat" style={{ fontSize: '35px' }}>Smarter Decisions.</span>
                        <span className="block text-lg font-semibold leading-10 text-gray-600 font-montserrat" style={{ fontSize: '35px' }}>Better outcomes.</span> */}
                    </div>
                    <p className="pb-8 mt-4 text-base font-semibold ">
                        Businesses know the importance of Audit services as it is a stepping
                        stone and medium for firms to thrive and safeguard the business from
                        unforeseen situations. As an auditing firm in Ahmedabad, we provide
                        assurance services to our esteemed clients. Our pragmatic approach
                        towards issues, open communication, risk analysis, and providing
                        early warnings is the most distinguishing feature of our auditing
                        services in Ahmedabad. Our Audit services are the hallmark of trust,
                        transparency, and value. We take time to understand the business and
                        needs of our client and provide personalized and
                        professionally-curated audit and assurance services in Ahmedabad.
                    </p>
                    {/* <p className="pt-8 text-base font-bold leading-6 text-blue-900 font-montserrat" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '20px', lineHeight: '26px', color: '#131a46' }}>
                        We’re here to provide you with proper guidance so that you can make smarter decisions and get better outcomes.
                    </p> */}

                    <h2 className="relative mb-1 text-2xl font-semibold tracking-widest text-orange-500 font-oxygen">
                        WHAT IS AUDITING?
                        <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-orange-500"></span>
                    </h2>
                    {/* <div className="flex flex-row items-start justify-between">
                        <div className="w-1/3 border-r border-gray-400 border-dotted"> */}
                    <div className="flex justify-between">
                        <div className="w-1/3 p-6 border-r-2 border-gray-800 border-dotted">
                            <div className="flex justify-center mb-4">
                                <p className="mb-4">
                                    Accounting and auditing are two crucial functions for any
                                    business, whether small, medium, or large. Accounting includes
                                    recording financial transactions and preparing financial
                                    statements for the readers to draw meaningful conclusions and
                                    take economic decisions.
                                </p>
                            </div>
                        </div>
                        <div className="w-1/3 p-6 border-r-2 border-gray-800 border-dotted">
                            <div className="flex justify-center mb-4">
                                <p className="mb-4">
                                    Audit services aim to carry out a critical examination of the
                                    books of accounts and financial statements maintained by a
                                    business to determine their accuracy and providing an opinion
                                    if they represent the true and fair view of its state of
                                    affairs and profitability.
                                </p>
                            </div>
                        </div>
                        <div className="w-1/3 p-6">
                            <div className="flex justify-center mb-4">
                                <p>
                                    The main objective of accounting is to maintain a complete
                                    record of business transactions to analyze the financial
                                    position of the business. Auditing service adds credibility to
                                    financial statements prepared by the process of accounting.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional HTML content ends here */}
            </main>
            <section className=" -mt-30 p-12 px-40 mt-10 text-white bg-[#1E3A8A]">
                <div className="flex items-center justify-between">
                    <div className="text-left">
                        <h2 className="relative mb-4 text-2xl font-bold tracking-wide text-orange-500 font-oxygen">
                            KHANDHAR MEHTA AND SHAH
                            <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-orange-500"></span>
                        </h2>
                        <p className="text-lg font-semibold">
                            for a journey beyond excellence.
                        </p>
                        <p className="text-4xl font-bold text-gray-500">
                            knowledge <span className="text-orange-500">.</span>{" "}
                            <span className="text-grey-500">
                                experience<span className="text-orange-500">.</span>
                            </span>{" "}
                            teamwork<span className="text-orange-500">.</span>
                        </p>
                        <p className="max-w-xl mx-auto mt-6 ml-0 ">
                            Our Chartered Accountants in Ahmedabad focus on providing our
                            clients the best in class services that reflect our values and
                            vision of transparency, flawlessness, and professional work. Check
                            out our website to understand and know more about our services and
                            firm.
                        </p>
                    </div>
                    <div className="text-right">
                        <button className="px-4 py-2 mt-8 text-white bg-orange-500 rounded hover:bg-orange-600">
                            GET IN TOUCH WITH US
                        </button>
                    </div>
                </div>
            </section>

            {/* ####New */}
            <div className="p-20 pt-10 pb-0">
                <div className="px-20 text-left">
                    <h2 class="relative mb-4 text-2xl font-semibold tracking-wide text-center text-orange-500 font-oxygen">
                        <span class="inline-block p-2">OBJECTIVE OF AUDITING</span>
                        <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-orange-500"></span>
                    </h2>

                    {/* Additional HTML content starts here */}
                    <div className="grid grid-cols-1 gap-8 mb-5 mt-7 md:grid-cols-3">
                        {/* KMS Advantage Box */}
                        <div className="p-6 border-2 border-gray-800 border-dotted">
                            <div className="flex justify-center mb-4">
                                <img
                                    className="w-15 h-15"
                                    src="./assets/audit-1.png"
                                    alt="KMS Advantage Icon"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-center">
                                EXPRESSION OF OPINION
                            </h3>
                            <p className="mt-4 text-center text-gray-700">
                                One of the primary objectives of auditing is to provide an
                                opinion if the financial statements of the company represent a
                                true and fair view of its state of affairs and profitability.
                                Auditor also checks the accuracy of accounting records prepared
                                in accordance with the relevant accounting standards and
                                statutory requirements.
                            </p>
                        </div>
                        {/* Business Pulse Box */}
                        <div className="p-6 border-2 border-gray-800 border-dotted">
                            <div className="flex justify-center mb-4">
                                <img
                                    className="w-15 h-15"
                                    src="./assets/audit-2.png"
                                    alt="KMS Advantage Icon"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-center">
                                INDEPENDENT OPINION
                            </h3>
                            <p className="mt-4 text-center text-gray-700">
                                One of the primary objectives of auditing is to provide an
                                opinion if the financial statements of the company represent a
                                true and fair view of its state of affairs and profitability.
                                Auditor also checks the accuracy of accounting records prepared
                                in accordance with the relevant accounting standards and
                                statutory requirements.
                            </p>
                        </div>
                        {/* Our Team Box */}
                        <div className="p-6 border-2 border-gray-800 border-dotted">
                            <div className="flex justify-center mb-4">
                                {/* <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14c-1.68 0-3.303.54-4.5 1.49C6.183 15.98 5 17.4 5 19v1h14v-1c0-1.6-1.183-3.02-2.5-3.51-1.197-.95-2.82-1.49-4.5-1.49zM12 11a4 4 0 100-8 4 4 0 000 8zm-4-4a4 4 0 114 4 4 4 0 01-4-4z"></path>
                    </svg> */}
                                <img
                                    className="w-15 h-15"
                                    src="./assets/audit-3.png"
                                    alt="KMS Advantage Icon"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-center">
                                DETECTION AND PREVENTION OF FRAUD AND ERRORS
                            </h3>
                            <p className="mt-4 text-center text-gray-700">
                                Auditing detects the error from the grass-root level. Auditing
                                services help in the discovery and correction of the errors and
                                ensure the accuracy of the books of accounts. However, the
                                statutory auditor, despite following a risk-based auditing
                                approach, may not be able to detect carefully planned frauds,
                                which is one of the limitations of auditing.{" "}
                            </p>
                        </div>
                    </div>

                    {/* ####New */}
                </div>
            </div>

            {/* ##full sccreen  */}
            <div className="flex items-center justify-center min-h-screen py-8 my-8 bg-gradient-to-br from-gray-100 to-gray-300">
                <div className="flex flex-col overflow-hidden bg-white rounded-lg shadow-lg md:flex-row">
                    <div className="md:w-1/2">
                        <img
                            src="./assets/aud.jpg"
                            alt="Auditor"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="p-8 py-12 text-white md:w-1/2 bg-gradient-to-br from-gray-900 to-gray-700">
                        <h2 className="relative mb-4 text-xl font-semibold tracking-wider text-white-500 font-oxygen">
                            SCOPE OF AUDITING SERVICES
                            <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-orange-500"></span>
                        </h2>
                        <p className="pb-3">
                            The Scope Of Our Auditing Services Mainly Depends On Three
                            Aspects-
                        </p>
                        {/* <h2 className="py-5 mb-4 text-4xl font-bold tracking-wider text-white-400">Terms of the engagement<span className='text-orange-500'>.</span><br /> Pronouncement of ICAI<span className='text-orange-500'>.</span><br /> Statutory requirements<span className='text-orange-500'>.</span></h2> */}
                        <h2 className="py-5 mb-4 text-4xl font-extrabold tracking-wider text-white-400 font-montserrat text-34 leading-44">
                            <div className="py-1">
                                Terms of the engagement
                                <span className="text-orange-500">.</span>
                                <br />
                            </div>
                            <div className="py-1">
                                Pronouncement of ICAI<span className="text-orange-500">.</span>
                                <br />
                            </div>
                            <div className="py-1">
                                Statutory requirements<span className="text-orange-500">.</span>
                            </div>
                        </h2>
                        <div className="p-4 px-8 my-6 text-[20x] text-black bg-white">
                            <p className="pb-2 mb-4 border-b border-gray-500">
                                Our auditor audits the financial records and statements of a firm.
                                During an audit, he examines all the aspects which are relevant to
                                profit and loss account, balance sheet, and cash flow statement.
                            </p>
                            <p className="pb-2 mb-4 border-b border-gray-500">
                                Our audit services include an evaluation of internal controls and
                                accounting systems established by the management. It helps in
                                determining the appropriateness and sufficiency of the information
                                contained in the books of accounts.
                            </p>
                            <p className="pb-2 mb-4 border-b border-gray-500">
                                We undertake vouching of transactions to ensure authenticity and
                                validity of transactions, arithmetical accuracy of the books
                                maintained, and to check if revenue and capital items are
                                appropriately classified.
                            </p>
                            <p className="pb-2 mb-4 border-b border-gray-500">
                                We undertake verification of assets and liabilities appearing in
                                the balance sheet.
                            </p>
                            <p className="pb-2 mb-4 border-b border-gray-500">
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
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* #new */}

            {/* $##$images with data */}
            {/* I want to talk with expert       >

AUDITING PROCESS */}

            {/* <h2 class="relative mb-4 text-2xl font-semibold tracking-wide text-center text-orange-500 font-oxygen">
                <span class="inline-block p-2">DIFFERENT TYPE OF AUDIT SERVICES</span>
                <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-orange-500"></span>
            </h2> */}
            <Audit_data />

            <Audit_testimonial />
            <Audit_FAQ />


        </div>
    );
};

export default Audit_services;
