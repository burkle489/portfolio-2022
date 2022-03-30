import { Image } from "../Image/Image";
import { ChangeMe } from "../Navbar/models";
import HeadshotOld from '../../assets/headshot-OLD.jpeg'
import { ScrollToSection } from "../ScrollToSection/ScrollToSection";
import { DIRECTION } from "../../appConstants";

export const About: React.FC<ChangeMe> = ({ innerRef, toNextSection }) => {
    return (
        <section className='About' ref={innerRef}>
            <Image image={HeadshotOld} circle size='300px' />
            <h1>Tayler Burke</h1>
            <h2>Front-End Web Developer</h2>
            <ScrollToSection direction={DIRECTION.DOWN} onClick={toNextSection} />
        </section>
    )
}