

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCaretUp } from '@fortawesome/free-solid-svg-icons';

const About_toggle = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="p-20 pt-10 pb-0">
            <div className="px-20 text-left">
                <h2 className="text-4xl font-bold text-orange-500">
                    People <span className="text-blue-900">.</span>  <span> Process<span className="text-blue-900">.</span> </span> <span>Passion<span className="text-blue-900">.</span> </span>
                </h2>


                <p className="mt-4 text-base">
                    Our journey started way back in 2004 when we three friends Amish Khandhar, Gautam Mehta, and Tushar Shah, decided to put all our experience, knowledge, and vision into a customer-centric and transparent chartered accountancy service for everyone. We started in Ahmedabad, India, and little did we know with the hard work and persistence of our team of Chartered Accountant in Ahmedabad, co-workers, and founders will help us grow to where we are and become a reputed chartered accountant firm in India.
                </p>
                <p className="mt-4 text-base">
                    We are the first-generation chartered accountant in Ahmedabad. We work under the most technologically advanced environment and stay updated with all the changes, techniques, and solutions, making us the first choice of successful Chartered Accountant firms across India. As one of the firms of Chartered Accountants in India, our domain works under a very versatile range of industries and services. Therefore fulfilling the needs of every type of business, be it a small-scale business or a multinational brand.
                </p>

                <button onClick={toggleExpand} className="flex items-center my-4 text-xl font-semibold text-orange-500">
                    <span className="mr-2 text-4xl">
                        <FontAwesomeIcon icon={isExpanded ? faCaretUp : faPlus} />
                    </span>
                    <span>READ MORE ABOUT US</span>
                </button>

                {isExpanded && (
                    <div>
                        <p className="mt-4 text-base">
                            KMS provide a wide variety of services ranging from taxation, statutory audit, internal audit, information systems audit, CFO services to corporate services, and advisory, we are a full-service Chartered Accountant firm in India. Some of our most sought after advisory services are our Income Tax for individuals and corporates, and auditing for small, medium, and large entities. We also provide statutory and concurrent auditing services for banks. Our robust legal team expands to corporate and allied statutes, where we provide useful solutions and consultancy regarding various legal aspects.
                        </p>

                        <p className="mt-4 text-base">
                            We are known for our GST Services. We have authored several books on GST and Service Tax. Our GST experts in Ahmedabad ensure GST Compliance, provide their expert opinion matters concerning GST, and provide GST litigation support.
                        </p>

                        <p className="mt-4 text-base">
                            One of our striking services, which makes us different as chartered accountants in India, is the virtual CFO service. The virtual CFO has been a very profitable option for all our clients, given the reduction of cost and streamlined finance operations they have been able to carry out.
                        </p>

                        <p className="mt-4 text-base">
                            Our Corporate Services division provides business setup services, ensures foreign trade policy and FEMA compliance for clients, facilitates mergers and acquisitions, and provides services for financial statements conversion to US GAAP and IFRS.
                        </p>

                        <p className="mt-4 text-base">
                            Our Chartered Accountants in Ahmedabad undertake business feasibility studies, provide IT consultancy, risk advisory, Anti-Money Laundering (AML), and management consulting services to our esteemed clients.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default About_toggle;
