import React from 'react'
import Corp_toggle from './Corp_toggle'

const Corp_Content = () => {
    return (
        <div>
            <main className="p-20 pt-10 pb-0">
                <div className="px-20 text-left">
                    <h2 className="relative  tracking-widest mb-[-12px] text-3xl font-semibold text-left text-orange-500 font-oxygen">
                        CORPORATE SERVICES
                        <span className="absolute bottom-0  left-0 w-16 h-0.5 bg-orange-500"></span>
                    </h2>

                    <div className="flex gap-10 mt-8 justify-left">
                        <span
                            className="block text-lg font-semibold leading-10 text-gray-600 font-montserrat"
                            style={{ fontSize: "25px" }}
                        >
                            Whether you operate locally or internationally, we can provide a broad range of advice throughout various corporate services.
                        </span>
                    </div>
                    <p className="pb-2 mt-2 text-base font-semibold">
                        Our decades of experience with clients in India and abroad, amidst the emerging and everchanging economies, along with a range of professional skills in accounting and corporate advisory services, has made us one of the best in business. While you concentrate on your business, a comprehensive team consisting of a legal, financial, and tax expert will work hard to provide you with a robust corporate standing.
                    </p>

                    <p className="pb-2 mt-2 text-base font-semibold">
                        Right from the incorporation of the business to its administration and accounting, we provide you support through a personalized approach designed explicitly for your corporate advisory services related needs. Our highly trained and experienced professionals are relentlessly motivated to help you overcome any challenges that you might face through our tailor-made corporate advisory services.
                    </p>
                    {/* <p
                        className="pt-1 pb-4 text-base font-bold leading-6 text-blue-900 font-montserrat"
                        style={{
                            fontFamily: "Montserrat, sans-serif",
                            fontSize: "20px",
                            lineHeight: "26px",
                            color: "#131a46",
                        }}
                    >
                        IMPORTANCE OF CORPORATE SERVICES FOR YOUR BUSINESS
                    </p> */}

                    <h2 className="relative mt-4 mb-4 text-2xl font-semibold tracking-widest text-orange-500 font-oxygen">
                        IMPORTANCE OF CORPORATE SERVICES FOR YOUR BUSINESS                        <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-orange-500"></span>
                    </h2>
                    <p className="pb-2 mt-2 text-base font-semibold">
                        Corporate advisory services play an enabling role in most aspects related to business operation and in delivering solutions for any potential hiccups. These services also play an essential role in the advancement of your capacity to provide top-notch quality of products and services.
                    </p>

                </div>
            </main>


            <Corp_toggle />
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








export default Corp_Content



