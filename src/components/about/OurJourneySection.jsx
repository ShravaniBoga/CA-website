import React from 'react';

const OurJourneySection = () => {
    return (
        <div>
            {/* Header Section */}
            {/* <div className="relative py-20 text-white bg-gradient-to-r from-blue-800 to-orange-600"> */}
            <div className="relative pb-20 py-20 text-white bg-gradient-to-r from-[#2C2243] via-[#6B353D] via-[#2C223D] via-[#A85145] via-[#C65E51] to-[#DA6135]">
                <img src="./assets/taj.jpg" alt="Taj Mahal" className="absolute top-0 right-0 object-cover h-full opacity-20" />
                {/* </div> */}


                <div className="container mx-auto text-center">
                    <h2 className="mb-2 text-lg font-semibold uppercase">Our Journey</h2>
                    <h1 className="text-5xl font-bold">
                        real challenges<span className='text-orange-600'>.</span>real people<span className='text-orange-600'>.</span> real success<span className='text-orange-600'>.</span>
                    </h1>
                    <p className="mt-4 text-xl">
                        Today as a Chartered Accountant firm in India, we cherish our values and try to imbibe them in the working paradigm as well,
                        which is reflected through integrity, diligence, loyalty, and transparency in the services received by our customers.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="container px-20 mx-auto text-center">
                <h2 className="pt-5 mb-0 text-3xl font-bold px-55">
                    Our never-failing dedication to our values has enabled us to reach heights and travel to
                    reach the distance we have reached today before we go miles tomorrow.
                </h2>
                {/* ##huge img years */}
                <div className="flex items-center justify-center h-screen pt-0 mt-0 bg-white">
                    <img
                        src="./assets/about-huge-img.png"
                        className="w-3/4 h-auto md:w-3/4 lg:w-3/24"
                        alt="About"
                    />
                </div>
            </div>
        </div >
        //     </div>
        // </div>
    );
};

export default OurJourneySection;
