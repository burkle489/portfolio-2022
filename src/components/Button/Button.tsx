import React from 'react';
import { ChangeMe } from '../Navbar/models';

export const Button: React.FC<ChangeMe> = ({ text, ...props }) => {
    return (
        <button {...props} className='Btn'>{text}</button>
    )
}