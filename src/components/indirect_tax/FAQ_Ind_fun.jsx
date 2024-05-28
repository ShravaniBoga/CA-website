

import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

function FAQ_Ind_fun({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-300">
            <button
                className="flex items-center justify-between w-full p-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`text-lg font-semibold ${isOpen ? 'text-orange-600' : 'text-black'}`}>
                    {question}
                </span>
                <span className="text-orange-600">
                    {isOpen ? <FiMinus /> : <FiPlus />}
                </span>
            </button>
            {isOpen && (
                <div className="p-4 bg-gray-100">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
}

export default FAQ_Ind_fun;
