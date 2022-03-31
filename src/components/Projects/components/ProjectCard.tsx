import React from 'react'
import { ChangeMe } from '../../Navbar/models'

type ProjectCardProps = ChangeMe;

export const ProjectCard: React.FC<ProjectCardProps> = ({ }) => {
    return (
        <div className='ProjectCard'>
            <div className='CardSection Top'>

                <div className='Icon'>C</div>
                <div className='Name'>Crypt</div>
            </div>
            <div className='CardSection Bottom'>
                <div className='Description'>A personal Crypto portfolio</div>
                <div className='Tech'>
                    <ul>
                        <li>React</li>
                        <li>TypeScript</li>
                        <li>WebSockets</li>
                        <li>AWS Amplify</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
