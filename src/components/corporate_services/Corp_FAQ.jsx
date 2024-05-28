


import React, { useState } from 'react';
import FAQ_Corp_fun from './FAQ_Corp_fun';

const Corp_FAQ = () => {
    return (
        <div className="px-20 py-5 pb-16 text-white bg-gradient-to-r from-blue-900 to-orange-600">
            <div className="container p-4 mx-auto">
                <h1 className="mb-8 text-3xl font-bold text-center">FREQUENTLY ASKED QUESTIONS(FAQS) ABOUT CORPORATE SERVICES (FAQs)</h1>
                <div className="text-black bg-white rounded-lg shadow-lg">
                    <FAQ_Corp_fun
                        question="How can I get an estimate of costs if I want to use your corporate services?"
                        answer="We provide you a fixed cost for the services you are looking for. Our charges are transparent and fair. We provide you with the exact quote with no hidden surprises. You can simply call or email us to get an estimate and get started with our corporate services."
                    />
                    <FAQ_Corp_fun
                        question="Who will be working for us if I sign-up for your corporate services?"

                        answer="We will assign a dedicated relationship manager to serve you. Our services consultants work with you as per the nature and complexity of the task. We assure you of the best-in-class corporate advisory services in India."
                    />



                </div>
            </div>
        </div>
    );
}

export default Corp_FAQ


