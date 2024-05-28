import React from 'react'

const Contact_header = () => {
    return (
        <div>
            <div className="font-sans text-[#000B1E]">
                <header className="relative text-center text-white">
                    <div className="relative">
                        {/* <img
                            src="./assets/contact-ban.jpg"
                            alt="background"
                            className="w-full h-96 opacity-80"
                        /> */}
                        <img
                            src="./assets/contact1.png"
                            alt="background"
                            // class="w-full h-96 border-b-10 border-white"
                            class="w-full h-96 border-b-[8px] border-white"
                        // style={{ background: 'linear-gradient(180deg, rgba(30, 58, 138, 0.2) 0%, rgba(30, 58, 108, 0.5) 50%, rgba(30, 58, 138, 0) 100%)' }}
                        />
                        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(30, 58, 150, 1) 0%, rgba(30, 58, 138, .5) 50%, rgba(30, 58, 138, 0) 100%),rgba(30, 58, 138, 0.7) 0%' }}></div>
                    </div>
                    <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        <h1 className="pb-1 mb-1 text-6xl font-extrabold tracking-wide">Contact Services</h1>
                        <p className="pt-0 mt-0 font-bold text-white font-montserrat text-[25px] leading-0">
                            Khandhar Mehta and Shah | Contact Services
                        </p>
                    </div>
                </header>





            </div>
        </div>

        // </div >
    )
}

export default Contact_header
