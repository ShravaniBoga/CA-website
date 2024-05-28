


import React from 'react';
import FAQ_fun from './FAQ_fun';

const CFO_FAQ = () => {
    return (
        <div className="px-20 py-5 pb-16 text-white bg-gradient-to-r from-blue-900 to-orange-600">
            <div className="container p-4 mx-auto">
                <h1 className="mb-8 text-3xl font-bold text-center">FREQUENTLY ASKED QUESTIONS (FAQs)</h1>
                <div className="text-black bg-white rounded-lg shadow-lg">
                    <FAQ_fun
                        question="What is the full form of CFO services?"
                        answer="The full form of CFO Services is Chief Financial Officer (CFO) services."
                    />
                    <FAQ_fun
                        question="What is a Virtual CFO?"
                        answer="A virtual CFO gets access to the financial status of the company, and he monitors the financial health and well-being of the firm in terms of finance through cloud technology."
                    />
                    <FAQ_fun
                        question="Who is an outsourced CFO?"
                        answer="An outsourced CFO is a financial expert who provides companies with financial plans and strategies on a project, assignment, or part-time basis."
                    />
                </div>
            </div>
        </div>
    );
}

export default CFO_FAQ;

