import React from 'react'
import { ChangeMe } from '../../Navbar/models';

import { Navigation, Pagination, EffectCoverflow } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react';
// Styles must use direct files imports
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

type ClientProjectsProps = ChangeMe;

export const ClientProjects: React.FC<ClientProjectsProps> = ({ projects }) => {
    return (
        <div className='ClientProjects'>
            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={8}
                loop={true}
                className="ClientProjectsSwiper"
                spaceBetween={40}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    360: {
                        width: 360,
                        slidesPerView: 3,
                    },
                    640: {
                        width: 640,
                        slidesPerView: 5,
                    },
                    768: {
                        width: 768,
                        slidesPerView: 6,
                    },
                    1024: {
                        width: 1024,
                        slidesPerView: 8,
                    },
                }}
            >
                {projects.map((project: ChangeMe) => (
                    <SwiperSlide>
                        <a href={project.link}>
                            <img src={project.icon} />
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    )
}
