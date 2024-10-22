import './Projects.css';
import { MdArrowOutward } from "react-icons/md";
import { gracemanningCom, emmygardnerOnline, classifiedsLol, gracesPortal, itneedsmorecolor } from '../../assets/thumbnails/thumbnails.js';
import { pinkBow } from '../../assets/assets';
import { IoHome, IoDesktopOutline, IoHeadset, IoCutSharp  } from "react-icons/io5";
import { useRef } from 'react';

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
    const webRef = useRef(null);
    const musicVideosRef = useRef(null);
    const liveVisualsRef = useRef(null);
    const fiberArtsRef = useRef(null);

    return(
            <div className='container projectsContainer'>                
                <div>
                    <h2 className='projectsPreTitle'>you've entered grace's</h2>
                    <h1 className='projectsTitle'>Project Realm</h1>
                </div>
                <ul className='projectsNav'>
                    <li>
                        <a href='/'>
                            <IoHome className='projectNavIcon'/>
                            home
                        </a>
                    </li>
                    <li>
                        <button onClick={() => webRef.current?.scrollIntoView({behavior: 'smooth'})}>
                            <IoDesktopOutline className='projectNavIcon'/>
                            web
                        </button>
                    </li>
                    <li>
                        <button onClick={() => musicVideosRef.current?.scrollIntoView({behavior: 'smooth'})}>
                            <IoHeadset className='projectNavIcon'/>
                            music videos
                        </button>
                    </li>
                    <li>
                        <button onClick={() => liveVisualsRef.current?.scrollIntoView({behavior: 'smooth'})}>
                            <IoHeadset className='projectNavIcon'/>
                            live visuals
                        </button>
                    </li>
                    <li>
                        <button onClick={() => fiberArtsRef.current?.scrollIntoView({behavior: 'smooth'})}>
                            <IoCutSharp className='projectNavIcon'/>
                            fiber arts, etc.
                        </button>
                    </li>
                </ul>
                <img className='projectsBow' src={pinkBow} alt='baby pink ribbon bow' />
                <div className='projectsContentBox' ref={webRef}>
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
                    <h3 className='projectsContentBoxTitle'>project case study</h3>
                    <p>
                        This is where I may break down a project that I did.
                    </p>
                    <div className='projectsFillerImage'>
                    </div>
                    <p>
                        ...and then describe it some more.
                    </p>
                </div>
                <div className='projectsContentBox' ref={musicVideosRef}>
                    <h3 className='projectsContentBoxTitle'>music videos</h3>
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
                <div className='projectsContentBox' ref={liveVisualsRef}>
                    <h3 className='projectsContentBoxTitle'>music videos</h3>
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
                <div className='projectsContentBox' ref={fiberArtsRef}>
                    <h3 className='projectsContentBoxTitle'>music videos</h3>
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
            </div>
        
    )
}