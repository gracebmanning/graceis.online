import './Projects.css';
import { MdArrowOutward } from "react-icons/md";
import { gracemanningCom, emmygardnerOnline, classifiedsLol, gracesPortal, itneedsmorecolor } from '../../assets/thumbnails/thumbnails.js';
import { frame } from '../../assets/assets';

const navItems = [
    {
        text: 'home',
        href: '/',
        target: '_self'
    },
    {
        text: 'about',
        href: '/about',
        target: '_self'
    },
    {
        text: 'explore',
        href: '/explore',
        target: '_self'
    },
    {
        text: 'instagram',
        href: 'https://www.instagram.com/graceis0nline/',
        target: '_blank'
    },
    {
        text: 'youtube',
        href: '/',
        target: '_blank'
    },
]

const websites = [
    {
        title: 'a portfolio site for emmy',
        link: 'emmygardner.online',
        href: 'https://emmygardner.online/',
        thumbnail: emmygardnerOnline
    },
    {
        title: 'a craigslist knockoff',
        link: 'classifieds.lol',
        href: 'https://classifieds.lol/',
        thumbnail: classifiedsLol
    },
    {
        title: 'a (professional) portfolio website for myself',
        link: 'grace-manning.com',
        href: 'https://grace-manning.com/',
        thumbnail: gracemanningCom
    },
    {
        title: 'my personal portal on the internet',
        link: 'graces-portal.net',
        href: 'https://graces-portal.net/',
        thumbnail: gracesPortal
    },
    {
        title: 'the website that was going to be the one you are currently looking at, until I redesigned the entire thing...',
        link: 'itneedsmorecolor.com',
        href: 'https://itneedsmorecolor.com/',
        thumbnail: itneedsmorecolor
    },
]

function WebsiteTile(website, index){
    return(
        <div className='websiteTile' key={index}>
            <img src={website.thumbnail} alt='website home page' />
            <p>{website.title}</p>
            <a href={website.href} target='_blank' rel='noreferrer'>{website.link}<MdArrowOutward/></a>
        </div>
    )
}

export default function Projects(){
    return(
            <div className='container projectsContainer'>
                <ul className='projectsNav'>
                    {navItems.map((item, index) => {
                        return(
                            <a key={index} href={item.href} target={item.target}>
                                <li>
                                    {item.text}
                                </li>
                            </a>
                        )
                    })}
                </ul>
                <div>
                    <h2 className='projectsPreTitle'>you've entered grace's</h2>
                    <h1 className='projectsTitle'>Project Realm</h1>
                    <img className='projectsFrame' src={frame} alt='gold vintage frame surrounding a portrait of grace, holding a book about the World Wide Web' />
                </div>
                <div className='projectsContentBox'>
                    <h3 className='projectsContentBoxTitle'>web design</h3>
                    <p>
                        I create websites for fun, including but not limited to:
                    </p>
                    <div className='projectsWebsiteList'>
                        {websites.map((proj, index) => {return WebsiteTile(proj, index)})}
                    </div>
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