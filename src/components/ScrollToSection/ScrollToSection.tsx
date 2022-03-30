import React from 'react'
import { DIRECTION } from '../../appConstants';
import { ChangeMe } from '../Navbar/models';

type ScrollToSectionProps = ChangeMe;

export const ScrollToSection: React.FC<ScrollToSectionProps> = ({ sectionRef, direction, onClick }) => {

    return (
        <div onClick={onClick}>NEXT SECTION</div>
    )
}
