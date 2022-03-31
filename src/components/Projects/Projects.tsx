import React from 'react'
import { ChangeMe } from '../Navbar/models'
import { ClientProjects } from './components/ClientProjects';
import { PersonalProjects } from './components/PersonalProjects';

type ProjectsProps = ChangeMe;

export const Projects: React.FC<ProjectsProps> = ({ innerRef }) => {
    return (
        <section className='Projects' ref={innerRef}>
            <div className='SectionHeaderContainer'>
                <h1>Projects</h1>
            </div>
            <div className='SectionBody'>
                <PersonalProjects />
                <ClientProjects />
            </div>
        </section>
    )
}
