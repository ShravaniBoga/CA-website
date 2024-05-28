import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const TestimonialSubscription = () => {
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
    const [slideIn, setSlideIn] = useState(true);

    // Define testimonials array outside of the useEffect hook
    const testimonials = [
        {
            quote: "We wanted reliable hands to which we could handover the task of statutory auditing, and KMS was our best decision. They are objective, independent, and transparent in all they do. We recommend you to work with KMS, one of the best audit firms in India, for best in class experience.",
            author: "Director, Jewellery Store"
        },
        {
            quote: "KMS has been exceptional in providing auditing services. Their attention to detail and expertise have greatly benefited our company. We highly recommend their services.",
            author: "CEO, Tech Startup"
        },
        {
            quote: "We believe in venturing with accountants that have a certain sense of strong values and ethics.And I must say KMS has impressed us beyond our expectations.One can clearly see the values imbibes in the company which they shared with us and why they prove to be one of the top CA firms in India.Their systematic working paradigm and family- like gesture and environment helped us in building trust in them and choosing them over and again",
            author: "CFO, Pharmaceutical company"
        },
        {
            quote: "KMS has helped us greatly in solving our indirect tax and auditing issues. Our records are clear, and this helps us in getting clarity and vision in our way of working. The services provided by KMS were beyond our expectations. Everything from consultancy to auditing to CFO services was at par. Their commitment towards integrity and quality of work is reflected throughout the process. One can entrust their work to KMS as they not only work as the top CA firm in Ahmedabad but also a confidant, as a family.",
            author: "- Director, IT company"
        },
        {
            quote: "KMS is one of the top CA firms in India for any set of compliance and management-oriented processes. The way they safeguard the clients in any situation and their pragmatic advice are the ones that I love to the core. I would strongly recommend their services for a long-term partnership for all compliance-oriented issues.",
            author: "Director, Construction company"
        },
        {
            quote: "As one of the top accounting firms in India, KMS delivers excellent personal CFO services. Their professional attitude is a great reflection of their reputation, and it was a pleasure working with them. I look forward to a continuously growing relationship with KMS and recommend them without hesitation.",
            author: "Chief Accountant, Wholesale Distribution Company"
        },
        {
            quote: "I feel satisfied to write something about KMS. As first-generation chartered accountants, they give professional & efficient advice, audit reports, and trustworthy information on the financial records. I would always recommend KMS as one of the top audit firms in India for reliable and cost-effective sources for auditing services.",
            author: " CEO, e-commerce company"
        },
        {
            quote: "Our relationship with KMS just began on our decision to start our new venture, and I must indeed tell, “We have been overwhelmed by the quality and the dedication of the team. They treated us not only just as clients but beyond, and that makes them one of the best CA firms in Ahmedabad. KMS stood with us not just in good times only but during hard times as well. I am sure every client working with KMS had a similar experience, given the quality of the service and dedication towards works.",
            author: "CEO, IT company"
        },
        // Add more testimonials as needed
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSlideIn(false);
            setTimeout(() => {
                setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
                setSlideIn(true);
            }, 500);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    const currentTestimonial = testimonials[currentTestimonialIndex];

    return (
        <section className="py-20 bg-white">
            <div className="container px-4 mx-auto lg:px-12">
                <div className="mb-12 text-center">
                    <h3 className="text-sm font-bold tracking-widest text-orange-500 uppercase">What do our clients say about us?</h3>
                    <h2 className="mt-2 text-4xl font-bold text-gray-800">trust. transparency. professional expertise.</h2>
                </div>
                <div className="mb-12 text-center">
                    <FontAwesomeIcon icon={faQuoteLeft} className="mb-4 text-6xl text-gray-300" />
                    <div className="relative overflow-hidden">
                        <div className={`transition-transform duration-500 ease-in-out ${slideIn ? 'translate-x-0' : '-translate-x-full'}`}>
                            <p className="text-lg italic text-gray-400">{currentTestimonial.quote}</p>
                            <p className="mt-4 font-semibold text-blue-900">{currentTestimonial.author}</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mb-12 space-x-2">
                    {/* Pagination Dots */}
                    {testimonials.map((_, index) => (
                        <div key={index} className={`w-3 h-3 rounded-full ${index === currentTestimonialIndex ? 'bg-orange-500' : 'bg-gray-300'}`}></div>
                    ))}
                </div>
            </div>
            {/* <div className="py-12 bg-gradient-to-r from-orange-400 to-red-500">
                <div className="container px-4 mx-auto lg:px-12">
                    <div className="text-center">
                        <h3 className="mb-6 text-2xl font-bold text-white">Stay ahead in a rapidly changing world. Subscribe to KMS Newsletter</h3>
                        <div className="flex justify-center">
                            <input type="email" placeholder="Enter Email Address" className="w-64 p-3 rounded-l-lg sm:w-80 md:w-96" />
                            <button className="px-6 py-3 text-white bg-blue-900 rounded-r-lg">Subscribe Now</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </section>
    );
};

export default TestimonialSubscription;
