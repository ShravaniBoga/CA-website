


import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCaretUp } from '@fortawesome/free-solid-svg-icons';

const Corp_toggle = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="px-20 pb-0">
            <div className="px-20 text-left">
                <button onClick={toggleExpand} className="flex items-center my-4 text-xl font-semibold text-orange-500">
                    <span className="mr-2 text-4xl">
                        <FontAwesomeIcon icon={isExpanded ? faCaretUp : faPlus} />
                    </span>
                    <span>READ MORE ABOUT US</span>
                </button>

                {isExpanded && (
                    <div>
                        <p className="mt-4 text-base">

                            At KMS, we support and lead initiatives, projects, and programs that are aligned with your daily commitments to fulfill the needs of your clients. Corporate services also play a pivotal role in building organizational capacity to foster an environment of efficient working and optimized employee performance.

                        </p>

                        <p className="mt-4 text-base">
                            Corporate advisory services also enhance the decision-making process of your company as it makes sure that the information is provided to the management of the firm in an effective and coordinated manner to optimize decision making.
                        </p>


                    </div>
                )}
            </div>
        </div>
    );
};

export default Corp_toggle;
