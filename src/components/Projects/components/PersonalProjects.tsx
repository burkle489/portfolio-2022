import React from 'react'
import { ChangeMe } from '../../Navbar/models';
import { ProjectCard } from './ProjectCard';
// Core modules imports are same as usual
import { Navigation, Pagination, EffectCoverflow } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react';
// Styles must use direct files imports
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

type PersonalProjectsProps = ChangeMe;

export const PersonalProjects: React.FC<PersonalProjectsProps> = ({ projects }) => {
    return (
        <div className='PersonalProjects'>
            <Swiper
                modules={[Navigation, Pagination, EffectCoverflow]}

                effect={"coverflow"}
                centeredSlides={true}
                slidesPerView={window.innerWidth < 768 ? 1 : 3}
                loop={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true
                }}
                className="PersonalProjectsSwiper"
                spaceBetween={20}
            >
                {projects.map((project: ChangeMe) => (
                    <SwiperSlide>
                        <ProjectCard icon={project.icon} title={project.title} description={project.description} technologies={project.technologies} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
