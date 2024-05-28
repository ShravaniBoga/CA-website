import React from 'react'

const CFO_key = () => {
    return (
        <div>
            <div className="flex flex-col overflow-hidden bg-white rounded-lg shadow-lg md:flex-row bg-gradient-to-r from-[#f3f3f7] via-[#535456] via-[#535456] to-[#7bb9fc]">
                <div className="mr-12 md:w-1/2">
                    <img
                        src="./assets/CFO-key.png"
                        alt="Auditor"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="p-8 mr-8 text-white md:w-1/2">
                    <h2 className="relative mb-4 text-xl font-semibold tracking-wider text-white-500 font-oxygen">
                        KEY FEATURES OF KMS
                        <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-orange-500"></span>
                    </h2>
                    <p className="pb-3">
                        KMS Is Your Source To Draw Experience Of Decades In Various Fields Of Accounting And Virtual CFO Services
                    </p>

                    <div className="p-4 px-8 my-6 text-[20x] text-black bg-white">
                        <p className="pb-2 mb-4 border-b border-gray-500">
                            We provide you with the high-quality and best-in-class services at a fraction of the cost that one might incur by appointing an in-house CFO.
                        </p>
                        <p className="pb-2 mb-4 border-b border-gray-500">
                            Our dedicated team of CFO gives you benefits that go beyond just routine bookkeeping as we strive to make efforts that will provide you with a robust financial base.
                        </p>
                        <p className="pb-2 mb-4 border-b border-gray-500">
                            Our expertise is a strong mix of human resource, reporting, management, accounting, tax, and technology efforts, which lets us hit the ground to fulfill your specific needs.
                        </p>




                        {/* <p className="pb-2 mb-4 border-b border-gray-500">
                            KMS feature amongst the top direct tax services provider in Ahmedabad.
                        </p>
                        <p className="pb-2 mb-4 border-b border-gray-500">
                            We provide direct tax consulting and advisory services to Indian and multinational companies spanning various industries and verticals in line with the direct tax laws.
                        </p>
                        <p className="pb-2 mb-4 border-b border-gray-500">
                            We have an expert team of dedicated and committed direct tax consultants. They can provide a range of services including, – tax planning, tax return filing, international taxes, transfer pricing, and representation of assessments and appeals.
                        </p>
                        <p className="pb-2 mb-4 border-b border-gray-500">
                            We remain updated with all the direct tax regulations and procedures and adopt the best practices to provide error-free services to our clients.
                        </p>
                        <p className="pb-2 mb-4 border-b border-gray-500">
                            We constantly remain in touch with our clients to solve their concerns and issues related to direct taxes and provide a highly personalized direct tax advisory services.
                        </p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CFO_key
