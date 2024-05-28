

import React from 'react';
import FAQ_Ind_fun from './FAQ_Ind_fun';

const Ind_FAQ
    = () => {
        return (
            <div className="px-20 py-5 pb-16 text-white bg-gradient-to-r from-blue-900 to-orange-600">
                <div className="container p-4 mx-auto">
                    <h1 className="mb-8 text-3xl font-bold text-center">FREQUENTLY ASKED QUESTIONS (FAQs)</h1>
                    <div className="text-black bg-white rounded-lg shadow-lg">
                        <FAQ_Ind_fun
                            question="Can you help us with identifying the GST tax liability of the new services that we are planning to introduce?"
                            answer="Yes, we have an expert team of GST advisors and indirect tax consultants who understand the A to Z of GST. They will surely help you in understanding the impact of GST on the new proposed services and calculate the GST amount so that you are better aware of your tax liabilities."
                        />
                        <FAQ_Ind_fun
                            question="What are the costs of your indirect tax services?"
                            answer="We do not have a fixed package of services with inclusions and exclusions. For any GST requirement, you can contact our team. Our GST experts will have an initial interaction with you to understand all your GST-specific requirements, and based on that; we mention our pricing and timelines."
                        />
                        <FAQ_Ind_fun
                            question="Do you sign an NDA before the initiation of our engagement with you?"
                            answer="Yes, we sign an NDA to keep your data and information safe and secure with us. We are an efficient team of indirect tax consultants who maintain integrity and honesty in our work and pledge to remain transparent with our clients always."
                        />
                    </div>
                </div>
            </div>
        );
    }

export default Ind_FAQ
    ;
