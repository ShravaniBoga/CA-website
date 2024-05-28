import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="px-10 bg-white shadow">
            <div className="container flex items-center justify-between px-4 mx-auto lg:px-12 md:flex-row">
                <div className="flex items-center p-2">
                    <Link to="/">
                        <img src="./assets/logo_CA.jpg" alt="Logo" className="w-20 h-auto p-1" />
                    </Link>
                </div>
                <div className="flex flex-col items-center mt-4 space-y-2 md:mt-0 md:flex-row md:space-x-4 md:space-y-0">
                    <div className="flex items-center space-x-2 text-blue-900">
                        <FontAwesomeIcon icon={faPhoneAlt} className="text-orange-500 rotate-90" />
                        <span>+91 79 6631 5450</span>
                    </div>
                    <div className="flex items-center space-x-2 text-blue-900">
                        <FontAwesomeIcon icon={faEnvelope} className="text-orange-500" />
                        <span>kms@kmsindia.in</span>
                    </div>
                    <div className="flex space-x-2 text-blue-900">
                        <FontAwesomeIcon icon={faFacebook} className="text-orange-500" />
                        <FontAwesomeIcon icon={faTwitter} className="text-orange-500" />
                        <FontAwesomeIcon icon={faLinkedin} className="text-orange-500" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
