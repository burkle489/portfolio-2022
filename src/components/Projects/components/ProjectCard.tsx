import React from 'react'
import { ChangeMe } from '../../Navbar/models'

type ProjectCardProps = ChangeMe;

export const ProjectCard: React.FC<ProjectCardProps> = ({ icon, title, description, technologies }) => {
    return (
        <div className='ProjectCard'>
            <div className='CardSection Top'>

                <div className='Icon'>{icon}</div>
                <div className='Name'>{title}</div>
            </div>
            <div className='CardSection Bottom'>
                <div className='Description'>{description}</div>
                <div className='Tech'>
                    <ul>
                        {technologies.map((tech: string) => (
                            <li>{tech}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
