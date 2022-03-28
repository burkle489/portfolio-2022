import { ChangeMe } from "../Navbar/models"

export const Image: React.FC<ChangeMe> = ({ image, circle = false, size }) => {
    return (
        <div style={{ height: size, width: size, backgroundColor: '#bce6f4', borderRadius: '50%' }}>
            <img className={`Image${circle && ' Rounded'}`} style={{ height: size, width: size }} src={image} alt='bordered-image' />
        </div>
    )
}