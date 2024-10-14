import './Projects.css';
import { MdArrowOutward } from "react-icons/md";

const websites = [
    {
        title: 'a portfolio site for emmy',
        link: 'emmygardner.online',
        href: 'https://emmygardner.online/'
    },
    {
        title: 'a craigslist knockoff',
        link: 'classifieds.lol',
        href: 'https://classifieds.lol/'
    },
    {
        title: 'a (professional) portfolio website for myself',
        link: 'grace-manning.com',
        href: 'https://grace-manning.com/'
    },
    {
        title: 'my personal portal on the internet',
        link: 'graces-portal.net',
        href: 'https://graces-portal.net/'
    },
    {
        title: 'the website that was originally going to be the one you are currently looking at, until I decided to completely redesign the entire thing...new use TBD',
        link: 'itneedsmorecolor.com',
        href: 'https://itneedsmorecolor.com/'
    },
]

/*
{projects.map((proj, index) => {
                        return ProjectTile(proj, index);
                    })}
*/

export default function Projects(){
    return(
            <div className='container projectsContainer'>
                <div>
                    <h2 className='projectsPreTitle'>you've entered grace's</h2>
                    <h1 className='projectsTitle'>Project Realm</h1>
                </div>
                <div className='projectsContentBox'>
                    <p>
                        I create websites for fun, including but not limited to:
                    </p>
                    <ul className='projectsWebsiteList'>
                        {websites.map((proj, index) => {
                            return <li key={index}>{proj.title}, <a href={proj.href} target='_blank' rel='noreferrer'>{proj.link}</a><MdArrowOutward/></li>
                        })}
                    </ul>
                </div>
            </div>
        
    )
}