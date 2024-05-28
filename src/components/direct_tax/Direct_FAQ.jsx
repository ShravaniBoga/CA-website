import React, { useState } from 'react';
import FAQ from './FAQ';

const Direct_FAQ = () => {
    return (
        <div className="px-20 py-5 pb-16 text-white bg-gradient-to-r from-blue-900 to-orange-600">
            <div className="container p-4 mx-auto">
                <h1 className="mb-8 text-3xl font-bold text-center">FREQUENTLY ASKED QUESTIONS (FAQs)</h1>
                <div className="text-black bg-white rounded-lg shadow-lg">
                    <FAQ
                        question="What are the examples of direct tax in India?"
                        answer="Some of the direct taxes imposed in India include income tax, inheritance tax, wealth tax, corporate tax, and capital gains tax."
                    />
                    <FAQ
                        question="What are the examples of indirect tax in India?"
                        answer="Examples of indirect taxes in India include GST, customs duty, excise duty, and service tax."
                    />
                    <FAQ
                        question="What is the difference between direct and indirect tax?"
                        answer="Direct taxes are paid directly by individuals or organizations to the government, whereas indirect taxes are collected by intermediaries from consumers."
                    />
                    <FAQ
                        question="What is transfer pricing?"
                        answer="Transfer pricing refers to the rules and methods for pricing transactions within and between enterprises under common ownership or control."
                    />
                </div>
            </div>
        </div>
    );
}

export default Direct_FAQ


