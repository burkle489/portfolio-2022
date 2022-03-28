import { Image } from "../Image/Image";
import { ChangeMe } from "../Navbar/models";
import HeadshotOld from '../../assets/headshot-OLD.jpeg'

export const About: React.FC<ChangeMe> = () => {
    return (
        <section className='About'>
            <Image image={HeadshotOld} circle size='300px' />
        </section>
    )
}