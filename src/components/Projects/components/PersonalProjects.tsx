import React from 'react'
import { ChangeMe } from '../../Navbar/models';
import { ProjectCard } from './ProjectCard';

type PersonalProjectsProps = ChangeMe;

export const PersonalProjects: React.FC<PersonalProjectsProps> = ({ }) => {
    return (
        <div className='PersonalProjects'>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    )
}
