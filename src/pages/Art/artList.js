import { Route } from 'react-router-dom';
import { artRoute } from '../../utility/slugify';
import { ProjectPage } from '../../layouts/ProjectPage';
import { gracemanningCom, classifiedsLol, gracesPortal, itneedsmorecolor} from '../../assets/projects/projects';

// ALL ART PROJECTS (SEE ROUTES BELOW)
export const art = [
    {
        title: 'classifieds.lol',
        description: 'a craigslist knockoff',
        type: 'website',
        date: 'August 2023 - Present',
        thumbnail: classifiedsLol,
        body:
        <div>
            <a href='https://classifieds.lol/'>here</a>
        </div>
    },
    {
        title: 'grace-manning.com',
        description: 'a (professional) portfolio website for myself',
        type: 'website',
        date: 'November 2023 - September 2024',
        thumbnail: gracemanningCom,
        body:
        <div>
            <a href='https://grace-manning.com/'>here</a>
        </div>
    },
    {
        title: 'graces-portal.net',
        description: 'my personal portal on the internet',
        type: 'website',
        date: 'August 2023 - Present',
        thumbnail: gracesPortal,
        body:
        <div>
            <a href='https://graces-portal.net/'>here</a>
        </div>
    },
    {
        title: 'itneedsmorecolor.com',
        description: 'the website that was going to be the one you are currently looking at, until I redesigned the entire thing...',
        type: 'website',
        date: 'January 2024',
        thumbnail: itneedsmorecolor,
        body:
        <div>
            <a href='https://itneedsmorecolor.com/'>here</a>
        </div>
    },
]

// ROUTES FOR ALL ART PROJECTS
export const artRoutes = art.map((project) => <Route path={artRoute(project)} element={<ProjectPage project={project} />} key={project.title} />);