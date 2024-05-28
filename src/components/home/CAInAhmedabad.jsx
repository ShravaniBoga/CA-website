import React from 'react';

const CAInAhmedabad = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container px-4 mx-auto lg:px-12">
                <h2 className="mb-8 text-2xl font-bold text-center text-orange-500">CA FIRMS IN AHMEDABAD</h2>
                <p className="mb-12 text-center text-gray-700">wisdom. expertise. foresight.</p>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div className="p-6 bg-white border rounded">
                        <img src="/assets/1.png" alt="Client Friendly Service" className="mb-4 rounded" />
                        <h3 className="mb-2 text-xl font-semibold text-blue-900">CLIENT FRIENDLY SERVICE</h3>
                        <p>We welcome our clients to share with us the problems that they want us to solve. We listen carefully to understand in-depth about the problem and then suggest an actionable solution to turn the problem into an opportunity.</p>
                    </div>
                    <div className="p-6 bg-white border rounded">
                        <img src="/assets/2.png" alt="Team Work" className="mb-4 rounded" />
                        <h3 className="mb-2 text-xl font-semibold text-blue-900">TEAM WORK</h3>
                        <p>By our insights, we are in-born specialists who are ready to work in a team to take on any challenge that is posed before us.</p>
                    </div>
                    <div className="p-6 bg-white border rounded">
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
