// import React, { useState } from 'react';

// const AccordionItem = ({ title, content }) => {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <div className="w-full p-4 bg-gray-100 rounded-md shadow-md">
//             <div className="flex items-center justify-between">
//                 <h2 className="text-xl font-semibold">{title}</h2>
//                 <button
//                     className="text-xl font-bold"
//                     onClick={() => setIsOpen(!isOpen)}
//                 >
//                     {isOpen ? '-' : '+'}
//                 </button>
//             </div>
//             {isOpen && <p className="mt-2 text-gray-700">{content}</p>}
//         </div>
//     );
// };

// export default AccordionItem;




import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCaretUp } from '@fortawesome/free-solid-svg-icons';

const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full p-4 bg-gray-100 rounded-md shadow-md">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">{title}</h2>
                <button
                    className="text-xl font-bold"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FontAwesomeIcon icon={faCaretUp} /> : <FontAwesomeIcon icon={faPlus} />}
                </button>
            </div>
            {isOpen && <p className="mt-2 text-gray-700">{content}</p>}
        </div>
    );
};

export default AccordionItem;
