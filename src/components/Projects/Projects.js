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
                    <p>
                        If you've looked at all those, you would realize by now that I never settle on one aesthetic. I love to design for any vision, any project!
                    </p>
                </div>
                <p>There is something to be said about a line of text. Maybe I can put some here and see what happens!</p>
                <div className='projectsContentBox'>
                    <h3 className='projectsContentBoxTitle'>Project Case Study</h3>
                    <p>
                        This is where I may break down a project that I did.
                    </p>
                    <div className='projectsFillerImage'>
                    </div>
                    <p>
                        ...and then describe it some more.
                    </p>
                </div>
                <div className='projectsContentBox'>
                    <h3 className='projectsContentBoxTitle'>Music Videos &amp; Generative Art</h3>
                    <p>
                        This is where I may list some projects.
                    </p>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div className='projectsFillerImage'>
                        </div>
                        <div className='projectsFillerImage'>
                        </div>
                        <div className='projectsFillerImage'>
                        </div>
                    </div>
                    <p>
                        ...and then describe it some more.
                    </p>
                </div>
                <div className='projectsContentBox'>
                    <h3 className='projectsContentBoxTitle'>App Development</h3>
                    <p>
                        I also made a mobile app called the "Cowculator" once. It's how I learned that app development is not in my future.
                    </p>
                    <div className='projectsFillerImage'>
                    </div>
                    <p>
                        ...and then describe it some more.
                    </p>
                </div>
            </div>
        
    )
}