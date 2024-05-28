import React from 'react'
import Direct_Data from './Direct_Data'

const Direct_Main = () => {
    return (
        <div>
            <main className="p-20 pt-10 pb-0" >
                <div className="px-20 text-left">
                    <h2 className="relative pb-2 text-3xl font-semibold tracking-widest text-left text-orange-500 font-oxygen">
                        OUR DIRECT TAX SERVICES INCLUDE A BLEND OF SERVICES
                        <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-orange-500"></span>
                    </h2>
                    <div className="flex gap-10 mt-2 text-4xl justify-left">
                        <span className="block font-semibold leading-10 text-gray-600 font-montserrat" >tax advisory<span className='text-orange-500'>.</span></span>
                        <span className="block font-semibold leading-10 text-gray-600 font-montserrat" >tax compliance<span className='text-orange-500'>.</span></span>
                        <span className="block font-semibold leading-10 text-gray-600 font-montserrat" >tax litigation<span className='text-orange-500'>.</span></span>
                    </div>
                    <p className="mt-4 text-base">
                        Our direct tax consultants in Ahmedabad have in-depth knowledge and experience to tackle any challenges in the direct tax matters. Our direct tax specialists provide the tax optimization strategies to large multinationals, small and mid-size companies, and individuals. We aim to minimize your tax burden through several tax planning mechanisms and help you comply with the direct tax laws of India.
                    </p>
                    {/* OUR METHODOLOGY */}
                    <h2 className="relative pb-2 mt-3 text-xl font-semibold tracking-widest text-left text-orange-500 font-oxygen">
                        OUR METHODOLOGY
                        <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-orange-500"></span>
                    </h2>
                    <p className="mt-4 text-base">                        As a top-ranked provider of Direct Tax Consulting and Direct Tax Advisory services in Ahmedabad, we help our clients by forming their tax strategies to reduce risks and minimize the tax accounting liabilities. At KMS, we manage your tax planning strategically across the year to ensure incorporation of the ever-changing tax rules and guidelines and to benefit from the tax planning opportunities. We review the impact of various taxes on your business on an on-going basis to avoid any tax payment delays and related penalties. We assure you of all the services we can.
                    </p>
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
                            knowledge <span className="text-grey-500">.</span> <span className="text-grey-500">experience<span className="text-orange-500">.</span></span> teamwork<span className="text-orange-500">.</span>
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
            <Direct_Data />
        </div>
    )
}

export default Direct_Main
