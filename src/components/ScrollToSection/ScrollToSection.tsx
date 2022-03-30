import React from 'react'
import { DIRECTION } from '../../appConstants';
import { ChangeMe } from '../Navbar/models';
import { BsArrowDownCircle } from 'react-icons/bs';

type ScrollToSectionProps = ChangeMe;

export const ScrollToSection: React.FC<ScrollToSectionProps> = ({ sectionRef, direction, onClick }) => {

    return (
        <div className='ScrollToSection' onClick={onClick}><BsArrowDownCircle size='4rem' color='#00123a' /></div>
    )
}
