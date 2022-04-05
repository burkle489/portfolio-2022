import React from 'react'
import { ChangeMe } from '../Navbar/models'
import { ClientProjects } from './components/ClientProjects';
import { PersonalProjects } from './components/PersonalProjects';

/* ICONS */
import SkippyScoutIcon from '../../assets/skippy-scout-icon.png';
import PsycruitIcon from '../../assets/psycruit-icon.png';
import ClevryIcon from '../../assets/clevry-icon.png';
import EmbarkIcon from '../../assets/embark-platform-icon.svg';
import AltCasesIcon from '../../assets/alt-cases-icon.svg';
import BetDSIIcon from '../../assets/bet-dsi-icon.png';

type ProjectsProps = ChangeMe;

export const Projects: React.FC<ProjectsProps> = ({ innerRef }) => {

    const PERSONAL_PROJECTS = [
        {
            icon: 'C',
            title: 'Crypt',
            description: 'Crypt is a personal crypto asset management tool',
            technologies: ['React', 'HTML', 'SCSS', 'WebSockets', 'Coinbase Api', 'AWS Amplify']
        },
        {
            icon: 'C',
            title: 'Crypt',
            description: 'Crypt is a personal crypto asset management tool',
            technologies: ['React', 'HTML', 'SCSS', 'WebSockets', 'Coinbase Api', 'AWS Amplify']
        },
        {
            icon: 'C',
            title: 'Crypt',
            description: 'Crypt is a personal crypto asset management tool',
            technologies: ['React', 'HTML', 'SCSS', 'WebSockets', 'Coinbase Api', 'AWS Amplify']
        },
    ]
    const CLIENT_PROJECTS = [
        {
            icon: SkippyScoutIcon,
            title: 'Skippy Scout',
            link: 'https://client.skippy.farm/'
        },
        {
            icon: ClevryIcon,
            title: 'Clevry',
            link: 'https://joy.clevry.com/'
        },
        {
            icon: PsycruitIcon,
            title: 'Psycruit',
            link: 'https://my.psycruit.com/login'
        },
        {
            icon: EmbarkIcon,
            title: 'Embark',
            link: 'https://embarkplatform.co.uk/'
        },
        {
            icon: AltCasesIcon,
            title: 'Embark',
            link: 'https://www.alt-cases.com/'
        },
        {
            icon: BetDSIIcon,
            title: 'BetDSI',
            link: 'https://www.betdsi.eu/'
        },

    ]

    return (
        <section className='Projects HasBottomBanner' ref={innerRef}>
            {/* <div className='SectionHeaderContainer'>
                <h1>Projects</h1>
            </div> */}
            <div className='SectionBody'>
                <PersonalProjects projects={PERSONAL_PROJECTS} />
            </div>
            <div className='SectionBottomBanner'>
                <ClientProjects projects={CLIENT_PROJECTS} />
            </div>
        </section>
    )
}
