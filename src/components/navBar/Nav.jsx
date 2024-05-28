
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Nav = () => {
//     return (
//         <nav className="px-10 py-2 text-white bg-blue-900">
//             <div className="container flex flex-col items-center justify-between px-4 mx-auto lg:px-12 md:flex-row">
//                 <ul className="flex flex-col items-center space-y-4 text-xs font-semibold md:flex-row md:space-x-4 md:space-y-0">
//                     <li className="hover:text-orange-500"><Link to="/">HOME</Link></li>
//                     {/* <li className="relative group hover:text-orange-500">
//                         <select
//                             className="inline-block cursor-pointer"
//                             onChange={(e) => window.location.href = e.target.value}
//                         >
//                             <option value="/about">ABOUT</option>
//                             <option value="/partners">Partners</option>
//                             <option value="/key-differentiators">Key Differentiators</option>
//                             <option value="/core-values">Core Values</option>
//                             <option value="/social-responsibilities">Social Responsibilities</option>
//                         </select>
//                     </li> */}
//                     <li className="hover:text-orange-500"><Link to="/about">ABOUT</Link></li>
//                     <li className="hover:text-orange-500"><Link to="/audit-services">AUDIT SERVICES</Link></li>
//                     <li className="hover:text-orange-500"><Link to="/direct-tax">DIRECT TAX</Link></li>
//                     <li className="hover:text-orange-500"><Link to="/indirect-tax">INDIRECT TAXES</Link></li>
//                     <li className="hover:text-orange-500"><Link to="/cfo-services">CFO SERVICES</Link></li>
//                     <li className="hover:text-orange-500"><Link to="/corporate-services">CORPORATE SERVICES</Link></li>
//                     <li className="hover:text-orange-500"><Link to="/consultancy">CONSULTANCY</Link></li>
//                     <li className="hover:text-orange-500"><Link to="/resources">RESOURCES</Link></li>
//                     <li className="hover:text-orange-500"><Link to="/contact">CONTACT</Link></li>
//                 </ul>
//                 <div className="flex items-center mt-4 space-x-4 md:mt-0">
//                     <i className="fas fa-search"></i>
//                     <button className="px-4 py-2 bg-blue-700 rounded">GET IN TOUCH</button>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Nav;


import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
    const location = useLocation();

    return (
        <nav className="px-10 py-2 text-white bg-blue-900">
            <div className="container flex flex-col items-center justify-between px-4 mx-auto lg:px-12 md:flex-row">
                <ul className="flex flex-col items-center space-y-4 text-xs font-semibold md:flex-row md:space-x-4 md:space-y-0">
                    <li className={`hover:text-orange-500 ${location.pathname === '/' ? 'text-orange-500' : ''}`}>
                        <Link to="/">HOME</Link>
                    </li>
                    <li className={`hover:text-orange-500 ${location.pathname === '/about' ? 'text-orange-500' : ''}`}>
                        <Link to="/about">ABOUT</Link>
                    </li>
                    <li className={`hover:text-orange-500 ${location.pathname === '/audit-services' ? 'text-orange-500' : ''}`}>
                        <Link to="/audit-services">AUDIT SERVICES</Link>
                    </li>
                    <li className={`hover:text-orange-500 ${location.pathname === '/direct-tax' ? 'text-orange-500' : ''}`}>
                        <Link to="/direct-tax">DIRECT TAX</Link>
                    </li>
                    <li className={`hover:text-orange-500 ${location.pathname === '/indirect-tax' ? 'text-orange-500' : ''}`}>
                        <Link to="/indirect-tax">INDIRECT TAXES</Link>
                    </li>
                    <li className={`hover:text-orange-500 ${location.pathname === '/cfo-services' ? 'text-orange-500' : ''}`}>
                        <Link to="/cfo-services">CFO SERVICES</Link>
                    </li>
                    <li className={`hover:text-orange-500 ${location.pathname === '/corporate-services' ? 'text-orange-500' : ''}`}>
                        <Link to="/corporate-services">CORPORATE SERVICES</Link>
                    </li>
                    <li className={`hover:text-orange-500 ${location.pathname === '/consultancy' ? 'text-orange-500' : ''}`}>
                        <Link to="/consultancy">CONSULTANCY</Link>
                    </li>
                    <li className={`hover:text-orange-500 ${location.pathname === '/resources' ? 'text-orange-500' : ''}`}>
                        <Link to="/resources">RESOURCES</Link>
                    </li>
                    <li className={`hover:text-orange-500 ${location.pathname === '/contact' ? 'text-orange-500' : ''}`}>
                        <Link to="/contact">CONTACT</Link>
                    </li>
                </ul>
                <div className="flex items-center mt-4 space-x-4 md:mt-0">
                    <i className="fas fa-search"></i>
                    <button className="px-4 py-2 bg-blue-700 rounded">GET IN TOUCH</button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
