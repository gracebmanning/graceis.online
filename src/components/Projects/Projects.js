import './Projects.css';
import { MdArrowOutward } from "react-icons/md";
import { pinkBow } from '../../assets/assets';
import { IoHome, IoDesktopOutline, IoHeadset, IoVideocam, IoLogoInstagram } from "react-icons/io5";
import { useRef } from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import { websites, musicVideos } from './projectLists';

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

export default function Projects(){
    const webRef = useRef(null);
    const musicVideosRef = useRef(null);
    const liveVisualsRef = useRef(null);
    const IGRef = useRef(null);

    return(
            <div className='container projectsContainer'>                
                <div>
                    <h2 className='projectsPreTitle'>you've entered grace's</h2>
                    <h1 className='projectsTitle'>Project Realm</h1>
                </div>
                <a className='projectsNavButton' href='/'>
                    <IoHome className='projectNavIcon'/>
                    take me home!
                </a>
                <ul className='projectsNav'>
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
                    <li>
                        <button className='projectsNavButton' onClick={() => liveVisualsRef.current?.scrollIntoView({behavior: 'smooth'})}>
                            <IoLogoInstagram className='projectNavIcon'/>
                            IG picks
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
                <div className='projectsContentBox' ref={IGRef}>
                    <h3>picks from my Instagram</h3>
                    <div class='projectsList'>
                        <div className='instagramEmbed'>
                            <InstagramEmbed url="https://www.instagram.com/p/DBkYdI7yQ6I/" width={330} />
                        </div>
                        <div className='instagramEmbed'>
                            <InstagramEmbed url="https://www.instagram.com/p/DCIFhjHTA78/" width={330} />
                        </div>
                        <div className='instagramEmbed'>
                            <InstagramEmbed url="https://www.instagram.com/p/DGUuDI7xWru/" width={330} />
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

/*

<p className='unboxedText'>
    There is something to be said about a line of text. Maybe I can put some here and see what happens!
</p>
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

*/