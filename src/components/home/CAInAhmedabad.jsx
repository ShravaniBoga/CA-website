import React from 'react';

const CAInAhmedabad = () => {
    return (
        <section className="py-20 mb-[-100px] bg-white">
            <div className="container mt-[-30px] px-4 mx-auto lg:px-12">
                <div>
                    <h2 className="relative mb-2 text-2xl font-semibold tracking-wide text-center text-orange-500 font-oxygen">
                        <span className="inline-block p-2">FIRMS IN AHMEDABAD</span>
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-orange-500"></span>
                    </h2>
                </div>

                <h2 className="mb-4 text-xl font-bold text-center text-blue-900">
                    wisdom<span className="text-orange-500">.</span>
                    <span>expertise<span className="text-orange-500">.</span></span>
                    <span>foresight<span className="text-orange-500">.</span></span>

                </h2>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div className="p-6 transition-shadow duration-300 bg-white border-2 border-gray-500 border-dotted rounded shadow-md group hover:shadow-xl">
                        <img src="/assets/1.png" alt="Client Friendly Service" className="mb-4 rounded" />
                        <h3 className="mb-2 text-xl font-semibold text-blue-900">CLIENT FRIENDLY SERVICE</h3>
                        <p>We welcome our clients to share with us the problems that they want us to solve. We listen carefully to understand in-depth about the problem and then suggest an actionable solution to turn the problem into an opportunity.</p>
                    </div>
                    <div className="p-6 transition-shadow duration-300 bg-white border-2 border-gray-500 border-dotted rounded shadow-md group hover:shadow-xl">

                        <img src="/assets/2.png" alt="Team Work" className="mb-4 rounded" />
                        <h3 className="mb-2 text-xl font-semibold text-blue-900">TEAM WORK</h3>
                        <p>By our insights, we are in-born specialists who are ready to work in a team to take on any challenge that is posed before us.</p>
                    </div>
                    <div className="p-6 transition-shadow duration-300 bg-white border-2 border-gray-500 border-dotted rounded shadow-md group hover:shadow-xl">
                        <img src="/assets/3.png" alt="Technical Excellence" className="mb-4 rounded" />
                        <h3 className="mb-2 text-xl font-semibold text-blue-900">TECHNICAL EXCELLENCE</h3>
                        <p>We keep updating ourselves with the latest happenings in our domain and changes made in tax and corporate laws to provide our clients with timely advice and relevant solution.</p>
                    </div>
                </div>
                <div className="flex justify-center mt-12">
                    <button className="px-6 py-2 text-white bg-orange-500 rounded">I want to talk with expert</button>
                </div>
            </div>

        </section>
    );
};

export default CAInAhmedabad;
