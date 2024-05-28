import React from 'react'
import CFO_header from './CFO_header'
import CFO_Content from './CFO_Content'
import CFO_Testimonial from './CFO_Testimonial'
import CFO_Data from './CFO_Data'
import CFO_virtual from './CFO_virtual'
import CFO_key from './CFO_key'
import CFO_FAQ from './CFO_FAQ'

const CFO_services = () => {
    return (
        <div>
            <CFO_header />
            <CFO_Content />

            <CFO_Data />
            <CFO_virtual />
            <CFO_key />

            <CFO_Testimonial />
            <CFO_FAQ />

        </div>
    )
}

export default CFO_services
