import React from 'react'
import Consultancy_header from './Consultancy_header'
import Consultancy_Content from './Consultancy_Content'
import Consultancy_key from './Consultancy_key'
import Consultancy_Data from './Consultancy_Data'
import Consultancy_testimonial from './Consultancy_testimonial'
import Consultancy_FAQ from './Consultancy_FAQ'

const Consultancy = () => {
    return (
        <div>
            <Consultancy_header />
            <Consultancy_Content />
            <Consultancy_Data />
            <Consultancy_key />
            <Consultancy_testimonial />
            <Consultancy_FAQ />

        </div>
    )
}

export default Consultancy
