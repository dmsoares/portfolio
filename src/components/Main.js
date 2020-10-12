import React from 'react';
import ScrollableTabs from './ScrollableTabs';
import Projects from './Projects';
import Journey from './Journey';

const pages = [
    {
        id: 1,
        name: 'Journey',
        component: <Journey/>
    },
    {
        id: 2,
        name: 'Projects',
        component: <Projects/>
    },
]

export default function Main() {
    return (
        <React.Fragment>
            <ScrollableTabs tabs={pages}/>
        </React.Fragment>
    )
}