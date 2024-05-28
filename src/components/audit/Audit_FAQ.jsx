

import React from 'react';
import FAQ_Audit_Fun from './FAQ_Audit_Fun';

const Audit_FAQ = () => {
    return (
        <div className="px-20 py-5 pb-16 text-white bg-gradient-to-r from-blue-900 to-orange-600">
            <div className="container p-4 mx-auto">
                <h1 className="mb-8 text-3xl font-bold text-center">FREQUENTLY ASKED QUESTIONS (FAQs)</h1>
                <div className="text-black bg-white rounded-lg shadow-lg">

                    <FAQ_Audit_Fun
                        question="What are the three main types of audits?"
                        answer="There are broadly three types of audits namely, internal audit, statutory audit, and tax audit."
                    />
                    <FAQ_Audit_Fun
                        question="How does internal audit help in achieving operational efficiencies?"
                        answer="Internal audit focuses on the examination of checks and balances of the operational aspects of the company. The auditor evaluates internal controls and corporate governance of the company and makes a risk assessment based on it. It results in the elimination of unnecessary processes and enhanced control over day-to-day working of the company and thereby higher operational efficiencies."
                    />
                    <FAQ_Audit_Fun
                        question="Is the GST audit compulsory?"
                        answer="Every registered business must get its accounts audited once in the financial year if the turnover exceeds Rs. 2 crore from the sale of services and goods."
                    />
                </div>
            </div>
        </div>
    );
}

export default Audit_FAQ;
