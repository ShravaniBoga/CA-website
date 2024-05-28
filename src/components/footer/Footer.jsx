import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer>
            <div className="flex flex-col items-center justify-between w-full h-64 px-20 pt-0 pb-6 mt-0 mb-0 border-b border-gray-700 bg-gradient-to-r from-red-500 to-orange-500 md:flex-row">
                <div className=" px-10 mb-4 md:mb-0  font-montserrat font-bold text-[23px] leading-[35px] text-white">
                    <h2 className="mt-1">Stay ahead in a rapidly changing world.</h2>
                    <h2 className="mt-1">Subscribe to KMS Newsletter</h2>
                </div>
                <div className="flex">
                    <input
                        type="email"
                        placeholder="Enter Email Address"
                        className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:ring focus:ring-indigo-200 focus:outline-none"
                    />
                    <button className="px-4 py-2 text-white bg-blue-700 rounded-r-md">Subscribe Now</button>
                </div>
            </div>
            <div className="py-8 mt-0 text-white bg-indigo-900">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

                    <div className="grid grid-cols-1 gap-8 text-sm md:grid-cols-2 lg:grid-cols-5">
                        <div>
                            <h3 className="text-lg font-semibold leading-7 text-white font-montserrat">HOME</h3>
                            <br />
                            <h3 className="text-lg font-semibold leading-7 text-white font-montserrat">ABOUT US</h3>
                            <ul className="mt-2 space-y-1 text-sm leading-5 text-gray-400 font-oxygen">
                                <li>Key Differentiators</li>
                                <li>Partners</li>
                                <li>Core Values</li>
                                <li>Social Responsibilities</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold leading-7 text-white font-montserrat">AUDIT</h3>
                            <ul className="mt-2 space-y-1 text-sm leading-5 text-gray-400 font-oxygen">
                                <li>GST audit</li>
                                <li>Statutory Audit</li>
                                <li>Tax Audit</li>
                                <li>Internal Audit</li>
                                <li>Concurrent Audit</li>
                                <li>Management Audit</li>
                                <li>Compliance Audit</li>
                                <li>Forensic Audit</li>
                                <li>Information System Audit</li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="font-montserrat font-semibold text-white text-lg leading-7">DIRECT TAX</h3>
                            <ul class="font-oxygen font-weight 300px text-gray-400 text-sm leading-5 space-y-1 mt-2">
                                <li>Income Tax</li>
                                <li>Corporate Tax</li>
                                <li>International Tax</li>
                                <li>Transfer Pricing Services</li>
                                <li>DTAA</li>
                                <li>NRI Taxation</li>
                                <li>Certification Services</li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="font-montserrat font-semibold text-white text-lg leading-7">CORPORATE SERVICES</h3>
                            <ul class="font-oxygen font-weight 300px text-gray-400 text-sm leading-5 space-y-1 mt-2">
                                <li>Business Setup Services</li>
                                <li>Corporate Law</li>
                                <li>Exim Policy</li>
                                <li>FEMA Compliance</li>
                                <li>Due Diligence</li>
                                <li>Debt Advisory</li>
                                <li>US GAAP/IFRS Conversion</li>
                                <li>Mergers & Acquisitions</li>
                                <li>Business Valuation and Restructuring</li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 mt-6 text-sm md:grid-cols-2 lg:grid-cols-5">
                        <div>
                            <h3 class="font-montserrat font-semibold text-white text-lg leading-7">INDIRECT TAX</h3>
                            <ul class="font-oxygen font-weight 300px text-gray-400 text-sm leading-5 space-y-1 mt-2">
                                <li>GST</li>
                                <li>GST Compliance</li>
                                <li>GST Due Diligence</li>
                                <li>GST Litigation</li>
                                <li>GST Opinion</li>
                                <li>GST Refund</li>
                                <li>GST Search/Inquiry Support</li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="font-montserrat font-semibold text-white text-lg leading-7">CFO SERVICES</h3>
                            <ul class="font-oxygen font-weight 300px text-gray-400 text-sm leading-5 space-y-1 mt-2">
                                <li>Accounting Outsourcing Services</li>
                                <li>Outsourced Bookkeeping Services</li>
                                <li>Payroll Outsourcing</li>
                                <li>Outsourced Budgeting and MIS Reporting</li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="font-montserrat font-semibold text-white text-lg leading-7">CONSULTANCY</h3>
                            <ul class="font-oxygen font-weight 300px text-gray-400 text-sm leading-5 space-y-1 mt-2">
                                <li>Economic Feasibility Studies</li>
                                <li>Risk Advisory</li>
                                <li>AML Consultancy</li>
                                <li>Management Consultancy</li>
                                <li>Transaction Advisory Services</li>
                                <li>Estate Planning Services</li>
                            </ul>
                        </div>
                        <div className="lg:col-span-2">
                            <h3 class="font-montserrat font-semibold text-white text-lg leading-7">CONTACT US</h3>
                            <ul class="font-oxygen font-weight 300px text-gray-400 text-sm leading-5 space-y-1 mt-2">
                                <li>
                                    <strong>Khandhar Mehta and Shah</strong>
                                    <br />
                                    Chartered Accountants
                                </li>
                                <li>7th Floor, Devpath Compla, B/h. Lal Bungalow, Off C. G. Road, Ahmedabad - 380006.</li>
                                <li>1110, Brigade IFC, GIFT City, Gandhinagar - 382355.</li>
                                <li>+91 79 6631 5450 / 51 / 52 / 53 / 54</li>
                                <li>kms@kmsindia.in</li>
                            </ul>
                            <div className="flex mt-4 space-x-4">
                                <a href="#" className="text-white-400 hover:text-gray-400">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                                <a href="#" className="text-white-400 hover:text-gray-400">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href="#" className="text-white-400 hover:text-gray-400">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};



export default Footer; 
