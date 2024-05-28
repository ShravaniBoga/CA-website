import React from "react";
import AccordionItem from "./AccordionItem";

const About_Accordian = () => {
    return (
        <div>
            <div className="font-sans antialiased text-gray-900">

                <header >
                    <div className="relative pb-10 py-10 bg-gradient-to-r from-[#131A46] via-[#475D7A] via-[#98BFC7] via-[#475D7A] to-[#69919C]">
                        {/* <img src="./assets/cube.png" alt="Cube" className="absolute top-0 right-0 object-cover h-full opacity-20" /> */}
                        <div className="px-6 py-0 text-white mx-[120px]">
                            <div className="mx-auto max-w-7xl">
                                {/* <h1 className="text-4xl font-bold">KMS DIFFERENCE</h1> */}
                                <h2 className="relative mb-1 text-2xl font-semibold tracking-widest text-orange-500 font-oxygen">
                                    KMS DIFFERENCE
                                    <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-orange-500"></span>
                                </h2>
                                <p className="mt-2 text-2xl">Embracing change. Enabling Growth.</p>
                            </div>
                        </div>

                        <main className="p-6 mx-auto max-w-7xl">
                            <section className="h-auto mt-6 space-y-4 w-[500px]">
                                <AccordionItem
                                    title="Integrity in our working methodology"
                                    content="Our clients trust us with their finance, accounts, income tax, and strategic issues, as we believe in offering only the best and precise work.

Clients take the maximum benefit of our GST services and enjoy complete peace of mind as far as GST compliance is concerned.

As one of the firm of  Chartered Accountants in India, we take the confidentiality and privacy of our clients very seriously, and our employees are very professional when it comes to safeguarding the trust of our clients.

Honesty and transparency are reflected in our work when we show results that are as meticulous as it gets owing to decades of expertise and experience of our team of Chartered Accountants in Ahmedabad."
                                />
                                <AccordionItem
                                    title="Customer-centric order of work"
                                    content="Our service orientation includes effective and clear communication with clients to avoid any miscommunication and deviance from the results and services they expect.

                        Our team delivers innovative and creative custom-made solutions to our clients.
                        
                        We respect and understand the importance of time of our clients which they invest in us, and hence our Chartered Accountants in Ahmedabad believe in working as efficiently and effectively as we can to provide the best of our service to our clients."
                                />
                                <AccordionItem
                                    title="Ownership and focus on people"
                                    content="We feel proud of the way we carry out our work and the trust our clients pose in us. We work with utmost loyalty and dedication, and that helps us retain the loyalty of our clients. This brings harmony between our clients and KMS and builds a cordial relation between us."
                                />
                            </section>
                        </main>
                    </div>
                </header>

            </div >

            {/* new Main section */}
            <main className="px-6 mx-auto mt-12 max-w-7xl">
                <div className="flex flex-col gap-12 md:flex-row">
                    <section className="flex-1">
                        <h2 className="mb-4 text-4xl font-extrabold tracking-wider text-blue-900 font-montserrat text-34 leading-44">
                            <div className="py-1 pb-4">
                                Commitment
                                <span className="text-orange-500">.</span>
                                precision
                                <span className="text-orange-500">.</span>
                            </div>

                            <div className="py-1 pb-4">
                                transparency
                                <span className="text-orange-500">.</span>
                                trust
                                <span className="text-orange-500">.</span>
                            </div>

                        </h2>
                        {/* <h2 className="pt-2 text-3xl font-bold text-orange-600">OUR VISION</h2> */}
                        <h2 className="relative mb-1 text-2xl font-semibold tracking-widest text-orange-500 font-oxygen">
                            OUR VISION
                            <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-orange-500"></span>
                        </h2>
                        <p className="mt-4 text-[16px] text-gray-700">
                            To consistently deliver excellence and thereby becoming a trusted,
                            dynamic, and versatile Chartered Accountancy firm.
                        </p>
                    </section>
                    <section className="flex-1 mt-2">
                        {/* <h2 className="text-3xl font-bold text-orange-600">OUR MISSION</h2> */}
                        <h2 className="relative mb-1 text-2xl font-semibold tracking-widest text-orange-500 font-oxygen">
                            OUR MISSION
                            <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-orange-500"></span>
                        </h2>
                        <div className="text-[16px]">


                            <p className="mt-4 text-gray-700">
                                We want to create an environment for our clients, which feels more
                                than just a business relationship. We want them to pose their trust
                                and spend time with us and reap the benefits out of our expertise in
                                accounting, taxation, auditing, outsourcing, and management
                                consultancy services.
                            </p>
                            <p className="mt-4 text-gray-700">
                                We want to attract and expand our family by recruiting employees who
                                share similar values and ideas, which architects a path towards
                                commitment, precision, transparency, and trust.
                            </p>
                            <p className="mt-4 text-gray-700">
                                Overall, we want companies and businesses to be able to succeed in
                                fulfilling their mission with the help of our value-added services
                                and make us a trusted partner of their journey.
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </div>

    );
};

export default About_Accordian;


// Commitment. precision.
// transparency. trust.
