import './Projects.css';
import { MdArrowOutward } from "react-icons/md";
import { gracemanningCom, emmygardnerOnline, classifiedsLol, gracesPortal, itneedsmorecolor } from '../../assets/thumbnails/thumbnails.js';
import { pinkBow } from '../../assets/assets';
import { IoHome, IoDesktopOutline, IoHeadset, IoCutSharp, IoVideocam } from "react-icons/io5";
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

const musicVideos = [
    {
        title: 'talk talk by charli xcx - lyric video',
        link: '',
        href: '',
        embed: <iframe src="https://www.youtube.com/embed/QL--AfXtkCo?si=bKkyBOGr1yJQF7Tk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    },
    {
        title: 'talk talk by charli xcx - lyric video',
        link: '',
        href: '',
        embed: <iframe src="https://www.youtube.com/embed/QL--AfXtkCo?si=Qg6-7WLleQU-jM4x" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    },
]

function MusicVideoTile(video, index){
    return(
        <div className='projectTile musicVideoTile' key={index}>
            {video.embed}
            <p>{video.title}</p>
            {video.link === '' ? <></> : <a href={video.href} target='_blank' rel='noreferrer'>{video.link}<MdArrowOutward/></a>}
        </div>
    )
}

function WebsiteTile(website, index){
    return(
        <div className='projectTile websiteTile' key={index}>
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
                            <IoVideocam className='projectNavIcon'/>
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
                    <h3>web design</h3>
                    <p>
                        I create websites for fun, including but not limited to:
                    </p>
                    <div className='projectsList'>
                        {websites.map((proj, index) => {return WebsiteTile(proj, index)})}
                    </div>
                    <p>
                        If you've looked at all those, you would realize by now that I never settle on one aesthetic. I love to design for any vision, any project!
                    </p>
                </div>
                <p>There is something to be said about a line of text. Maybe I can put some here and see what happens!</p>
                <div className='projectsContentBox'>
                    <h3>project case study</h3>
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
                    <h3>music videos</h3>
                    <p>
                        This is where I may list some projects.
                    </p>
                    <div className='projectsList'>
                        {musicVideos.map((proj, index) => {return MusicVideoTile(proj, index)})}
                    </div>
                    <p>
                        ...and then describe it some more.
                    </p>
                </div>
                <div className='projectsContentBox' ref={liveVisualsRef}>
                    <h3>live visuals</h3>
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
                    <h3>fiber arts</h3>
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