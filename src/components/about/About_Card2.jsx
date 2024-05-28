

const About_Card2 = () => {
    return (
        <div>
            <div className="flex items-center justify-center min-h-screen pt-0 pb-6 mt-0 mb-6 ">
                <div className="flex flex-col overflow-hidden bg-white rounded-lg shadow-lg md:flex-row bg-gradient-to-r from-[#89898b] via-[#C0C0C2] to-[#242437]">
                    <div className="p-8 py-12 pl-24 text-white md:w-1/2">
                        {/* absolute bottom-0 left-0 right-0 px-8 py-6 text-[20x] text-black bg-white bg-opacity-75 */}
                        <div className="px-8 my-6">
                            <h2 className="relative mb-4 text-2xl font-semibold tracking-wider text-orange-500 text-white-500 font-oxygen">
                                OUR COMMITMENT TO CLIENTS:
                                <span className="absolute left-0 w-10 h-0.5 bg-orange-500" style={{ bottom: '-0.5rem' }}></span>
                            </h2>
                        </div>


                        {/* <h2 className="py-5 mb-4 text-4xl font-bold tracking-wider text-white-400">Terms of the engagement<span className='text-orange-500'>.</span><br /> Pronouncement of ICAI<span className='text-orange-500'>.</span><br /> Statutory requirements<span className='text-orange-500'>.</span></h2> */}
                        <h2 className="px-8 my-6 text-4xl font-extrabold tracking-wider text-gray-600 font-montserrat text-34 leading-44">
                            <div className="py-1 ">
                                quality
                                <span className="text-orange-500">.</span>
                                timeliness
                                <span className="text-orange-500">.</span>
                                empowerment
                                <span className="text-orange-500">.</span>
                                <br />

                            </div>

                        </h2>

                        <div className=" px-8 my-6 text-[20x] text-black">
                            <p className="pb-2 mb-4 border-b border-black">
                                Assuring on-time delivery, thanks to an efficient and transparent work regime of our Chartered
                                Accountants in Ahmedabad                            </p>
                            <p className="pb-2 mb-4 border-b border-black">
                                Providing best-in-class, customized, on-site/off-site services based on requirements                            </p>
                            <p className="pb-2 mb-4 border-b border-black">
                                Assistance in various matters concerning interpretations of the law
                            </p>
                            <p className="pb-2 mb-4 border-b border-black">
                                Respecting confidentiality and privacy for all parties involved
                            </p>
                            <p className="pb-2 mb-4 border-b border-black">
                                Building trustworthy relationships
                            </p>

                        </div>
                    </div>

                    <div className="relative md:w-1/2 opacity-[0.3]">
                        <img
                            src="./assets/2men.png"
                            alt="Auditor"
                            className="object-cover w-full h-full"
                        />
                    </div>

                </div>
            </div>
        </div >
    )
}

export default About_Card2
