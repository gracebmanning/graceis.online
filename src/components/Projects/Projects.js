import './Projects.css';
import { MdArrowOutward } from "react-icons/md";
import { 
    // THUMBNAILS
    gracemanningCom, emmygardnerOnline, classifiedsLol, gracesPortal, itneedsmorecolor, graceIsOnline,
 } from '../../assets/projects/projects';
import { pinkBow } from '../../assets/assets';
import { IoHome, IoDesktopOutline, IoHeadset, IoVideocam } from "react-icons/io5";
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
    {
        title: 'the website you are viewing right at this very moment',
        link: `let's see it again!`,
        href: 'https://graceis.online/',
        thumbnail: graceIsOnline
    },
]

const musicVideos = [
    {
        title: 'black sheep by metric - lyric video',
        link: '',
        href: '',
        embed: <iframe src="https://www.youtube.com/embed/YpCVh5VX8mc?si=-qsG2CKij9gbVPVo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    },
    {
        title: 'talk talk by charli xcx - lyric video',
        link: '',
        href: '',
        embed: <iframe src="https://www.youtube.com/embed/QL--AfXtkCo?si=bKkyBOGr1yJQF7Tk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    },
]

/*const fiberArts = [
    {
        image: pufferSnoopy,
        alt: '',
        title: 'puffer snoopy [pattern from destinymakes.com]',
        date: 'December 2024',
        materials: 'acrylic yarn'
    },
    {
        image: tusnoBag,
        alt: '',
        title: 'tsuno bag',
        date: 'March 2024',
        materials: 'cotton canvas fabric, polyester thread'
    },
    {
        image: crochetScarf1,
        alt: '',
        title: 'skinny scarf',
        date: 'January 2024',
        materials: 'acrylic yarn'
    },
]*/

function WebsiteTile(website, index){
    return(
        <div className='projectTile websiteTile' key={index}>
            <img src={website.thumbnail} alt='website home page' />
            <p>{website.title}</p>
            <a href={website.href} target='_blank' rel='noreferrer'>{website.link}<MdArrowOutward/></a>
        </div>
    )
}

function MusicVideoTile(video, index){
    return(
        <div className='projectTile musicVideoTile' key={index}>
            {video.embed}
            <p>{video.title}</p>
            {video.link === '' ? <></> : <a href={video.href} target='_blank' rel='noreferrer'>{video.link}<MdArrowOutward/></a>}
        </div>
    )
}

/*function FiberArtsTile(project, index){
    return(
        <div className='projectTile fiberArtsTile' key={index}>
            <img src={project.image} alt={project.alt} />
            <h4>{project.title}</h4>
            <p>{project.date}</p>
            <p>materials: {project.materials}</p>
        </div>
    )
}*/

export default function Projects(){
    const webRef = useRef(null);
    const musicVideosRef = useRef(null);
    const liveVisualsRef = useRef(null);
    //const fiberArtsRef = useRef(null);

    return(
            <div className='container projectsContainer'>                
                <div>
                    <h2 className='projectsPreTitle'>you've entered grace's</h2>
                    <h1 className='projectsTitle'>Project Realm</h1>
                </div>
                <ul className='projectsNav'>
                    <li>
                        <a className='projectsNavButton' href='/'>
                            <IoHome className='projectNavIcon'/>
                            take me home!
                        </a>
                    </li>
                    <li>
                        <button className='projectsNavButton' onClick={() => webRef.current?.scrollIntoView({behavior: 'smooth'})}>
                            <IoDesktopOutline className='projectNavIcon'/>
                            web
                        </button>
                    </li>
                    <li>
                        <button className='projectsNavButton' onClick={() => musicVideosRef.current?.scrollIntoView({behavior: 'smooth'})}>
                            <IoHeadset className='projectNavIcon'/>
                            music videos
                        </button>
                    </li>
                    <li>
                        <button className='projectsNavButton' onClick={() => liveVisualsRef.current?.scrollIntoView({behavior: 'smooth'})}>
                            <IoVideocam className='projectNavIcon'/>
                            live visuals
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
                <p className='unboxedText'>There is something to be said about a line of text. Maybe I can put some here and see what happens!</p>
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
                
            </div>
        
    )
}

/*

import { 
    // THUMBNAILS
    gracemanningCom, emmygardnerOnline, classifiedsLol, gracesPortal, itneedsmorecolor, graceIsOnline,
    // FIBER ARTS
    crochetScarf1, tusnoBag, pufferSnoopy,
} from '../../assets/projects/projects';

import {IoCutSharp} from "react-icons/io5";

<li>
    <button className='projectsNavButton' onClick={() => fiberArtsRef.current?.scrollIntoView({behavior: 'smooth'})}>
        <IoCutSharp className='projectNavIcon'/>
        fiber arts, etc.
    </button>
</li>

<div className='projectsContentBox' ref={fiberArtsRef}>
    <h3>fiber arts</h3>
    <p>
        I am actively learning how to sew, as well as improving my crochet and embroidery skills. I'll keep my projects here to track progress! ⋆ ˚｡⋆୨୧˚⋆ ˚｡⋆
    </p>
    <div style={{display: 'flex', flexDirection: 'row'}}>
        <div className='projectsList'>
            {fiberArts.map((proj, index) => {return FiberArtsTile(proj, index)})}
        </div>
    </div>
</div>

*/