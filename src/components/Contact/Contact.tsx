import React from 'react'
import { ChangeMe } from '../Navbar/models'

type ContactProps = ChangeMe;

export const Contact: React.FC<ContactProps> = ({ innerRef }) => {
    return (
        <section className='Contact' ref={innerRef}>
            <h1>Contact</h1>
        </section>
    )
}
