import React from 'react';

const KeyDifferentiators = () => {
    return (
        <section className="px-10 py-20 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url(./assets/home-bg.jpg)' }}>            < div className="container px-4 mx-auto lg:px-12" >
            {/* <h2 className="mb-8 text-2xl font-bold text-center text-orange-500">KEY DIFFERENTIATORS</h2> */}
            <div div className='pb-2' >

                <h2 className="relative mb-4 text-2xl font-semibold tracking-wide text-center text-orange-500 font-oxygen">
                    <span className="inline-block p-2">KEY DIFFERENTIATORS</span>
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-orange-500"></span>
                </h2>
            </div >

            <h2 className="mb-2 text-xl font-bold text-center text-white">
                personalized service<span className="text-orange-500">.</span>  <span>timely delivery<span className="text-orange-500">.</span> </span> <span>optimized performance<span className="text-orange-500">.</span> </span>
            </h2>
            {/* <p className="mb-12 text-center text-gray-700">personalized service. timely delivery. optimized performance.</p> */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
                <div className="p-6 m-4 bg-white border border-black border-solid rounded">
                    <h3 className="mb-2 text-xl font-semibold text-blue-900">ADVANCED TECHNOLOGY</h3>
                    <p>As one of the audit firms in India, KMS uses the latest technology to run its operations. We use software and equipment that is known to be the best in business, providing clients with impeccable accounting solutions. Working on the guidelines and policies of the government, we took upon the digital drive and incorporated a digital environment in our office. It keeps paperwork at bay and brings uniformity, transparency, and infallibility in our work.</p>
                </div>
                <div className="p-6 m-4 bg-white border border-black border-solid rounded">
                    <h3 className="mb-2 text-xl font-semibold text-blue-900">PROMPT FINANCIAL INFORMATION</h3>
                    <p>We keep all the financial information of our clients up to date and sorted as and when demanded by them. Be it preparation of the annual accounts for submission at the income tax department or any other impromptu circumstance; we got you covered.</p>
                </div>
                <div className="p-6 m-4 bg-white border border-black border-solid rounded">
                    <h3 className="mb-2 text-xl font-semibold text-blue-900">PROFESSIONAL & EXPERIENCED STAFF</h3>
                    <p>KMS holds pride in its strong base of employees and CAs who possess decades of experience and expertise in the field. They provide you with a whole range of services, everything from advice on setting up a business and improving systems to periodic management of accounts and filing tax returns. Thereby assisting in maximizing profits and keeping liabilities to a minimum.</p>
                </div>
                <div className="p-6 m-4 bg-white border border-black border-solid rounded">
                    <h3 className="mb-2 text-xl font-semibold text-blue-900">TIMELY DELIVERY</h3>
                    <p>We understand the importance of meeting deadlines and ensuring timely delivery of our services. Our team is committed to providing prompt and efficient solutions to meet the needs of our clients.</p>
                </div>
            </div>
        </div >
        </section >
    );
};

export default KeyDifferentiators;
