


import React from 'react';
import FAQ_Consult_Fun from './FAQ_Consult_Fun';

const Consultancy_FAQ = () => {
    return (
        <div className="px-20 py-5 pb-16 text-white bg-gradient-to-r from-blue-900 to-orange-600">
            <div className="container p-4 mx-auto">
                <h1 className="mb-8 text-3xl font-bold text-center">FREQUENTLY ASKED QUESTIONS (FAQs) ABOUT CORPORATE SERVICES</h1>
                <div className="text-black bg-white rounded-lg shadow-lg">
                    <FAQ_Consult_Fun
                        question="What is AML?"
                        answer="A set of anti-money laundering laws, rules, policies, and procedures intended to prevent criminals from disguising illegally obtained funds as legitimate income."
                    />
                    <FAQ_Consult_Fun
                        question="What is a business feasibility study?"
                        answer="A controlled process to identify opportunities and threats, to determine objectives, defining successful outcomes, describing situations, and cost-benefit analysis of several options for solving a problem is called a business feasibility study."
                    />
                    <FAQ_Consult_Fun
                        question="What is estate planning?"
                        answer="Consultancy services that serve to manage an individual’s asset base in the case of their death or incapacitation are called estate planning services."
                    />
                </div>
            </div>
        </div>
    );
}

export default Consultancy_FAQ;
