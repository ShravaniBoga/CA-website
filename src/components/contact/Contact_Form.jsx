// import React from 'react';

// const Contact_Form = () => {
//     return (
//         <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-white sm:px-6 lg:px-8">
//             <div className="flex flex-col w-full gap-8 max-w-7xl md:flex-row">
//                 {/* Contact Information */}
//                 <div className="space-y-4 md:w-1/2">

//                     <div className="space-y-2 text-gray-700">
//                         <p className="flex items-center">
//                             <i className="mr-2 text-orange-600 fas fa-phone-alt"></i>
//                             +91 79 6631 5450 / 51 / 52 / 53 / 54
//                         </p>
//                         <p className="flex items-center">
//                             <i className="mr-2 text-orange-600 fas fa-map-marker-alt"></i>
//                             7th Floor, Devpath Comlax, B/h. Lal Bungalow, Off C. G. Road, Ahmedabad - 380006.
//                         </p>
//                         <p className="flex items-center">
//                             <i className="mr-2 text-orange-600 fas fa-map-marker-alt"></i>
//                             1110, Brigade IFC, GIFT City, Gandhinagar - 382355.
//                         </p>
//                         <p className="flex items-center">
//                             <i className="mr-2 text-orange-600 fas fa-envelope"></i>
//                             Email: <a href="mailto:kms@kmsindia.in" className="text-primary">kms@kmsindia.in</a>
//                         </p>
//                     </div>
//                     <div className="flex space-x-4">
//                         <a href="#" className="text-gray-500 hover:text-gray-900"><i className="fab fa-facebook-f"></i></a>
//                         <a href="#" className="text-gray-500 hover:text-gray-900"><i className="fab fa-twitter"></i></a>
//                         <a href="#" className="text-gray-500 hover:text-gray-900"><i className="fab fa-linkedin-in"></i></a>
//                     </div>
//                 </div>
//                 {/* Form */}
//                 <div className="space-y-8 md:w-1/2">
//                     <form className="space-y-6">
//                         <input type="hidden" name="remember" defaultValue="true" />
//                         <div className="-space-y-px rounded-md shadow-sm">
//                             <div>
//                                 <label htmlFor="name" className="sr-only">Name</label>
//                                 <input
//                                     id="name"
//                                     name="name"
//                                     type="text"
//                                     required
//                                     className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
//                                     placeholder="Enter Your Name"
//                                 />
//                             </div>
//                             <div>
//                                 <label htmlFor="email" className="sr-only">Email address</label>
//                                 <input
//                                     id="email"
//                                     name="email"
//                                     type="email"
//                                     required
//                                     className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 appearance-none focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
//                                     placeholder="Enter Email-ID"
//                                 />
//                             </div>
//                             <div>
//                                 <label htmlFor="phone" className="sr-only">Phone Number</label>
//                                 <input
//                                     id="phone"
//                                     name="phone"
//                                     type="tel"
//                                     required
//                                     className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 appearance-none focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
//                                     placeholder="Phone Number"
//                                 />
//                             </div>
//                             <div>
//                                 <label htmlFor="purpose" className="sr-only">Purpose</label>
//                                 <select
//                                     id="purpose"
//                                     name="purpose"
//                                     required
//                                     className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 appearance-none focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
//                                 >
//                                     <option value="">Purpose</option>
//                                     <option value="query">Query</option>
//                                     <option value="feedback">Feedback</option>
//                                     <option value="other">Other</option>
//                                 </select>
//                             </div>
//                             <div>
//                                 <label htmlFor="message" className="sr-only">Your Message</label>
//                                 <textarea
//                                     id="message"
//                                     name="message"
//                                     rows="4"
//                                     required
//                                     className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 appearance-none rounded-b-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
//                                     placeholder="Your Message"
//                                 ></textarea>
//                             </div>
//                         </div>
//                         <div>
//                             <button
//                                 type="submit"
//                                 className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-orange-600 border border-transparent rounded-md group hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
//                             >
//                                 Submit
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Contact_Form;


import React from 'react';

const Contact_Form = () => {
    return (
        <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-white sm:px-6 lg:px-8">
            <div className="flex flex-col items-stretch w-full gap-8 max-w-7xl md:flex-row">
                {/* Contact Information */}
                <div className="flex-1 h-full space-y-4 md:w-1/2">

                    <div className="space-y-2 text-gray-700">
                        <p className="flex items-center">
                            <i className="mr-2 text-orange-600 fas fa-phone-alt"></i>
                            +91 79 6631 5450 / 51 / 52 / 53 / 54
                        </p>
                        <p className="flex items-center">
                            <i className="mr-2 text-orange-600 fas fa-map-marker-alt"></i>
                            7th Floor, Devpath Comlax, B/h. Lal Bungalow, Off C. G. Road, Ahmedabad - 380006.
                        </p>
                        <p className="flex items-center">
                            <i className="mr-2 text-orange-600 fas fa-map-marker-alt"></i>
                            1110, Brigade IFC, GIFT City, Gandhinagar - 382355.
                        </p>
                        <p className="flex items-center">
                            <i className="mr-2 text-orange-600 fas fa-envelope"></i>
                            Email: <a href="mailto:kms@kmsindia.in" className="text-primary">kms@kmsindia.in</a>
                        </p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-500 hover:text-gray-900"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="text-gray-500 hover:text-gray-900"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="text-gray-500 hover:text-gray-900"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                {/* Form */}
                <div className="flex-1 h-full space-y-8 md:w-1/2">
                    <form className="flex flex-col h-full space-y-6">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="flex flex-col flex-1 -space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="name" className="sr-only">Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                    placeholder="Enter Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">Email address</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 appearance-none focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                    placeholder="Enter Email-ID"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="sr-only">Phone Number</label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    required
                                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 appearance-none focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                    placeholder="Phone Number"
                                />
                            </div>
                            <div>
                                <label htmlFor="purpose" className="sr-only">Purpose</label>
                                <select
                                    id="purpose"
                                    name="purpose"
                                    required
                                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 appearance-none focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                >
                                    <option value="">Purpose</option>
                                    <option value="query">Query</option>
                                    <option value="feedback">Feedback</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="flex-1">
                                <label htmlFor="message" className="sr-only">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    required
                                    className="relative block w-full h-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 appearance-none rounded-b-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-orange-600 border border-transparent rounded-md group hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact_Form;
