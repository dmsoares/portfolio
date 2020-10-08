import React from 'react';
import ScrollableTabs from './ScrollableTabs';
import Manifest from './Manifest';
import Projects from './Projects';
import Skills from './Skills';

const pages = [
    {
        id: 1,
        name: 'Manifest',
        component: <Manifest/>
    },
    {
        id: 2,
        name: 'Projects',
        component: <Projects/>
    },
    {
        id: 3,
        name: 'Skills',
        component: <Skills/>
    },
]

export default function Main() {
    return (
        <React.Fragment>
            <ScrollableTabs pages={pages}/>
        </React.Fragment>
    )
}