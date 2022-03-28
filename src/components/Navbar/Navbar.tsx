import React from 'react';
import { BurgerMenu } from './components/BurgerMenu';
import { NavLink } from './components/NavLink';
export const Navbar = () => {
    /*TODO - Center and style TB */
    return (
        <nav className='Nav'>
            <BurgerMenu onClick={() => { }} />
            <div className='NavLinks'>
                <NavLink name="About" />
                <NavLink name="Projects" />
            </div>

            <div>
                TB
            </div>
            <div>
                <NavLink name="Contact" />
            </div>
        </nav>
    )
}

