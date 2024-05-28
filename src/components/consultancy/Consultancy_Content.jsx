


import React from 'react'


const Consultancy_Content = () => {
    return (
        <div>
            <main className="p-20 pt-10 pb-0">
                <div className="px-20 text-left">
                    <h2 className="relative  tracking-widest mb-[-12px] text-3xl font-semibold text-left text-orange-500 font-oxygen">

                        INTRODUCTION
                        <span className="absolute bottom-0  left-0 w-16 h-0.5 bg-orange-500"></span>
                    </h2>

                    <div className="flex gap-10 mt-8 justify-left">
                        <span
                            className="block text-lg font-semibold leading-10 text-gray-600 font-montserrat"
                            style={{ fontSize: "25px" }}
                        >
                            With the numerous changes that a business goes through, it needs professional help to adapt to the new system and to walk on a new path of growth.                        </span>
                    </div>
                    {/* <p className="pb-2 mt-2 text-base font-semibold">
                        Our decades of experience with clients in India and abroad, amidst the emerging and everchanging economies, along with a range of professional skills in accounting and corporate advisory services, has made us one of the best in business. While you concentrate on your business, a comprehensive team consisting of a legal, financial, and tax expert will work hard to provide you with a robust corporate standing.
                    </p> */}

                    <p className="pb-2 mt-2 text-base font-semibold">
                        We, at KMS, support you in these changing times through our consulting services including, management advisory services, business feasibility study, trust, and estate planning, risk advisory services, IT consulting services, transaction advisory services, and AML consultancy services.                    </p>



                </div>
            </main>



            <section className=" -mt-30 p-12 px-40 mt-10 text-white bg-[#1E3A8A]" >
                <div className='flex items-center justify-between'>
                    <div className="text-left">
                        <h2 className="relative mb-4 text-2xl font-bold tracking-wide text-orange-500 font-oxygen">
                            KHANDHAR MEHTA AND SHAH
                            <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-orange-500"></span>
                        </h2>
                        <p className="text-lg font-semibold">for a journey beyond excellence.</p>
                        <p className="text-4xl font-bold text-gray-500">
                            knowledge <span className="text-orange-500">.</span> <span className="text-grey-500">experience<span className="text-orange-500">.</span></span> teamwork<span className="text-orange-500">.</span>
                        </p>
                        <p className="max-w-xl mx-auto mt-6 ml-0 ">
                            Our Chartered Accountants in Ahmedabad focus on providing our clients the best in class services that reflect our values and vision of transparency, flawlessness, and professional work. Check out our website to understand and know more about our services and firm.
                        </p>
                    </div>
                    <div className="text-right">
                        <button className="px-4 py-2 mt-8 text-white bg-orange-500 rounded hover:bg-orange-600">GET IN TOUCH WITH US</button>
                    </div>
                </div>
            </section>

        </div>
    )
}








export default Consultancy_Content



