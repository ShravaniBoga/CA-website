import React from 'react'

const Direct_CardText = () => {
    return (
        <div>
            {/* <div className="flex items-center justify-center min-h-screen py-8 my-8 bg-gradient-to-br from-gray-100 to-gray-300"> */}
            <div className="flex flex-col overflow-hidden bg-white rounded-lg shadow-lg md:flex-row bg-gradient-to-r from-[#C0C0C2] via-[#515168] to-[#2f2f30] ">
                <div className="mr-12 md:w-1/2">
                    <img
                        src="./assets/hands.png"
                        alt="Auditor"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="p-8 mr-8 text-white md:w-1/2 ">
                    <h2 className="relative mb-4 text-xl font-semibold tracking-wider text-white-500 font-oxygen">
                        KEY FEATURES OF KMS                        <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-orange-500"></span>
                    </h2>
                    <p className="pb-3">
                        KMS is recognized as one of the foremost providers of direct tax services in Ahmedabad. Our team of skilled tax experts guides you on all direct tax-related matters, including, but not limited to, corporate tax advisory, tax compliance, international tax, and tax representation and litigation services.
                    </p>
                    {/* <h2 className="py-5 mb-4 text-4xl font-bold tracking-wider text-white-400">Terms of the engagement<span className='text-orange-500'>.</span><br /> Pronouncement of ICAI<span className='text-orange-500'>.</span><br /> Statutory requirements<span className='text-orange-500'>.</span></h2> */}
                    {/* <h2 className="mb-4 text-4xl font-extrabold tracking-wider text-white-400 font-montserrat text-34 leading-44">
                        <div className="py-1">

                            corporate tax advisory
                            <span className="text-orange-500">.</span>
                            <br />
                        </div>
                        <div className="py-1">
                            tax compliance<span className="text-orange-500">.</span>
                            <br />
                        </div>
                        <div className="py-1">
                            international tax <span className="text-orange-500">.</span>
                        </div>
                        <div className="py-1">
                            text representation<span className="text-orange-500">.</span>
                        </div>
                        <div className="py-1">
                            litigation services<span className="text-orange-500">.</span>
                        </div>
                    </h2> */}
                    <div className="p-4 px-8 my-6 text-[20x] text-black bg-white">
                        <p className="pb-2 mb-4 border-b border-gray-500">
                            KMS feature amongst the top direct tax services provider in Ahmedabad.                        </p>
                        <p className="pb-2 mb-4 border-b border-gray-500">
                            We provide direct tax consulting and advisory services to Indian and multinational companies spanning various industries and verticals in line with the direct tax laws.                        </p>
                        <p className="pb-2 mb-4 border-b border-gray-500">
                            We have an expert team of dedicated and committed direct tax consultants. They can provide a range of services including, – tax planning, tax return filing, international taxes, transfer pricing, and representation of assessments and appeals.                        </p>
                        <p className="pb-2 mb-4 border-b border-gray-500">
                            We remain updated with all the direct tax regulations and procedures and adopt the best practices to provide error-free services to our clients.                        </p>
                        <p className="pb-2 mb-4 border-b border-gray-500">
                            We constantly remain in touch with our clients to solve their concerns and issues related to direct taxes and provide a highly personalized direct tax advisory services.                        </p>
                        {/* <p className="pb-2 mb-4 border-b border-gray-500">
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

        // </div>
    )
}

export default Direct_CardText
