import { BurgerMenuProps } from "../models"
import { GiHamburgerMenu } from 'react-icons/gi'

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ onClick }) => {
    return (
        <div className="BurgerMenu" onClick={onClick}>
            <GiHamburgerMenu size='2rem' color='#00123a' cursor='pointer' />
        </div>
    )
}