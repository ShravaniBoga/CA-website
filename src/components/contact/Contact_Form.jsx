// import React from 'react'

// const Contact_Form = () => {
//     return (
//         <div>

//         </div>
//     )
// }

// export default Contact_Form

// import React, { useState } from 'react';


// const Contact_Form = () => {



//     const HandleSubmit = (e) => {
//         e.preventDefault()
//         console.log()

//     }
//     return (
//         <main className="p-20 pt-10 pb-0">
//             <div className="px-20 text-left">
//                 <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-white sm:px-6 lg:px-8">
//                     <div className="flex flex-col items-stretch w-full gap-8 max-w-7xl md:flex-row">
//                         {/* Contact Information */}
//                         <div className="flex-1 h-full space-y-4 text-lg md:w-1/2">
//                             <div className="space-y-4 text-gray-800">
//                                 <p className="flex items-center">
//                                     <i className="mr-2 text-orange-600 fas fa-phone-alt"></i>
//                                     +91 79 6631 5450 / 51 / 52 / 53 / 54
//                                 </p>
//                                 <p className="flex items-center">
//                                     <i className="mr-2 text-orange-600 fas fa-map-marker-alt"></i>
//                                     7th Floor, Devpath Comlax, B/h. Lal Bungalow, Off C. G. Road, Ahmedabad - 380006.
//                                 </p>
//                                 <p className="flex items-center">
//                                     <i className="mr-2 text-orange-600 fas fa-map-marker-alt"></i>
//                                     1110, Brigade IFC, GIFT City, Gandhinagar - 382355.
//                                 </p>
//                                 <p className="flex items-center">
//                                     <i className="mr-2 text-orange-600 fas fa-envelope"></i>
//                                     Email: <a href="mailto:kms@kmsindia.in" className="text-orange-600 text-primary">kms@kmsindia.in</a>
//                                 </p>
//                             </div>
//                             <div className="flex space-x-4">
//                                 <a href="#" className="text-gray-800 hover:text-gray-900"><i className="fab fa-facebook-f"></i></a>
//                                 <a href="#" className="text-gray-800 hover:text-gray-900"><i className="fab fa-twitter"></i></a>
//                                 <a href="#" className="text-gray-800 hover:text-gray-900"><i className="fab fa-linkedin-in"></i></a>
//                             </div>
//                         </div>

//                         {/* Form */}
//                         <div className="flex-1 h-full space-y-4 md:w-1/2">
//                             <form className="flex flex-col h-full max-w-2xl mx-auto">
//                                 <input type="hidden" name="remember" defaultValue="true" />
//                                 <div className="flex flex-col flex-1 space-y-4 rounded-md shadow-sm">
//                                     <div>
//                                         <label htmlFor="name" className="sr-only">Name</label>
//                                         <input
//                                             id="name"
//                                             name="name"
//                                             type="text"
//                                             required
//                                             className="relative block w-full px-3 py-4 text-gray-900 placeholder-gray-500 border border-gray-300 appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
//                                             placeholder="Enter Your Name"
//                                         />
//                                     </div>
//                                     <div>
//                                         <label htmlFor="email" className="sr-only">Email address</label>
//                                         <input
//                                             id="email"
//                                             name="email"
//                                             type="email"
//                                             required
//                                             className="relative block w-full px-3 py-4 text-gray-900 placeholder-gray-500 border border-gray-300 appearance-none focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
//                                             placeholder="Enter Email-ID"
//                                         />
//                                     </div>
//                                     <div>
//                                         <label htmlFor="phone" className="sr-only">Phone Number</label>
//                                         <input
//                                             id="phone"
//                                             name="phone"
//                                             type="tel"
//                                             required
//                                             className="relative block w-full px-3 py-4 text-gray-900 placeholder-gray-500 border border-gray-300 appearance-none focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
//                                             placeholder="Phone Number"
//                                         />
//                                     </div>
//                                     <div>
//                                         <label htmlFor="purpose" className="sr-only">Purpose</label>
//                                         <select
//                                             id="purpose"
//                                             name="purpose"
//                                             required
//                                             className="relative block w-full px-3 py-4 text-gray-900 placeholder-gray-500 border border-gray-300 appearance-none focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
//                                         >
//                                             <option value="">Purpose</option>
//                                             <option value="query">Query</option>
//                                             <option value="feedback">Feedback</option>
//                                             <option value="other">Other</option>
//                                         </select>
//                                     </div>
//                                     <div className="flex-1">
//                                         <label htmlFor="message" className="sr-only">Your Message</label>
//                                         <textarea
//                                             id="message"
//                                             name="message"
//                                             rows="6"
//                                             required
//                                             className="relative block w-full h-full px-3 py-4 text-gray-900 placeholder-gray-500 border border-gray-300 appearance-none rounded-b-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
//                                             placeholder="Your Message"
//                                         ></textarea>
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <button
//                                         type="submit"
//                                         className="relative flex justify-center w-full px-4 py-3 mt-4 text-sm font-medium text-white bg-orange-600 border border-transparent rounded-md group hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
//                                         onSubmit={HandleSubmit}
//                                     >
//                                         Submit
//                                     </button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </main>
//     );
// };

// export default Contact_Form;


import React, { useState } from 'react';

const Contact_Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [purpose, setPurpose] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name,
            email,
            phone,
            purpose,
            message
        };
        console.log(formData);
        const url = 'https://localhost:3008/addData';

        // Create the fetch request
        fetch(url, {
            method: 'POST', // Use the POST method to add data
            headers: {
                'Content-Type': 'application/json' // Set the content type to JSON
            },
            body: JSON.stringify(formData) // Convert the formData object to a JSON string
        })
            .then(response => {
                if (!response.ok) {
                    // Handle HTTP errors
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json(); // Parse the JSON from the response
            })
            .then(data => {
                // Handle the data from the response
                console.log('Success:', data);
            })
            .catch(error => {
                // Handle any errors
                console.error('Error:', error);
            });
        // Add your form submission logic here
    };


    return (
        <main className="p-20 pt-10 pb-0">
            <div className="px-20 text-left">
                <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-white sm:px-6 lg:px-8">
                    <div className="flex flex-col items-stretch w-full gap-8 font-semibold max-w-7xl md:flex-row">
                        {/* Contact Information */}
                        <div className="flex-1 h-full space-y-4 md:w-1/2">
                            <div className="mt-6 space-y-4 text-xl text-gray-800">
                                <p className="flex items-center">
                                    <i className="mr-2 text-orange-600 rotate-90 fas fa-phone-alt"></i>
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
                                    Email: <a href="mailto:kms@kmsindia.in" className="text-orange-600 text-primary">kms@kmsindia.in</a>
                                </p>
                            </div>
                            <div className="py-6 text-xl font-semibold " style={{ color: '#3b82f6' }}>
                                <p >
                                    Follow Us on
                                </p>

                                <div className="flex pt-3 pr-2 space-x-4 ">
                                    <a href="#" className="text-gray-800 hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#" className="text-gray-800 hover:text-gray-400"><i className="fab fa-twitter"></i></a>
                                    <a href="#" className="text-gray-800 hover:text-gray-400"><i className="fab fa-linkedin-in"></i></a>
                                </div>

                            </div>

                            {/* ##google map */}
                            <div className='py-12 pb-0 pr-10 '>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1835.9086021879714!2d72.557231!3d23.030483!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f1c15dd00b%3A0x29be72c325abb13a!2sDevpath%20Complex!5e0!3m2!1sen!2sin!4v1717638779036!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>

                        {/* Form */}

                        <div className="flex-1 h-full space-y-4 md:w-1/2">
                            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdNY7sDvzqVtaWReV8-koTBJUMkIa4xGKy_F2Z0gDG75MbMfA/viewform?embedded=true" width="640" height="852" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>                        </div>
                        {/* <div className="flex-1 h-full space-y-4 md:w-1/2">
                            <form className="flex flex-col h-full max-w-2xl mx-auto" onSubmit={handleSubmit}>
                                <input type="hidden" name="remember" defaultValue="true" />
                                <div className="flex flex-col flex-1 space-y-4 rounded-md shadow-sm">
                                    <div>
                                        <label htmlFor="name" className="sr-only">Name</label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            className="relative block w-full px-3 py-4 text-gray-900 placeholder-gray-500 border border-gray-300 appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                            placeholder="Enter Your Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="sr-only">Email address</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            className="relative block w-full px-3 py-4 text-gray-900 placeholder-gray-500 border border-gray-300 appearance-none focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                            placeholder="Enter Email-ID"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="sr-only">Phone Number</label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            required
                                            className="relative block w-full px-3 py-4 text-gray-900 placeholder-gray-500 border border-gray-300 appearance-none focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                            placeholder="Phone Number"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="purpose" className="sr-only">Purpose</label>
                                        <select
                                            id="purpose"
                                            name="purpose"
                                            required
                                            className="relative block w-full px-3 py-4 text-gray-900 placeholder-gray-500 border border-gray-300 appearance-none focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                            value={purpose}
                                            onChange={(e) => setPurpose(e.target.value)}
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
                                            rows="6"
                                            required
                                            className="relative block w-full h-full px-3 py-4 text-gray-900 placeholder-gray-500 border border-gray-300 appearance-none rounded-b-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                            placeholder="Your Message"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                        ></textarea>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="relative flex justify-center w-full px-4 py-3 mt-4 text-sm font-medium text-white bg-orange-600 border border-transparent rounded-md group hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div> */}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contact_Form;

