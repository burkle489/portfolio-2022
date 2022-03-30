import React from 'react'
import { ChangeMe } from '../Navbar/models'

type ProjectsProps = ChangeMe;

export const Projects: React.FC<ProjectsProps> = ({ innerRef }) => {
    return (
        <section className='Projects' ref={innerRef}>
            PROJECTS
        </section>
    )
}
