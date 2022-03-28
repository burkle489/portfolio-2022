import { ChangeMe } from "../models";

export const NavLink: React.FC<ChangeMe> = ({ name, onClick }) => {
    return (
        <div className='NavLink' onClick={onClick}>{name}</div>
    )
}