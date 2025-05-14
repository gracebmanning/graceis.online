import './Projects.css';
import { projects } from '../../data/projectLists';
import { BasicLayout } from '../../layouts/BasicLayout';
import ProjectTile from '../../components/ProjectTile/ProjectTile';
import ProjectFilter from '../../components/ProjectFilter/ProjectFilter';
import { Route } from 'react-router-dom';
import { projectRoute } from '../../utility/slugify';
import { ProjectPage } from '../../layouts/ProjectPage';

// ROUTES FOR ALL PROJECTS
export const projectRoutes = projects.map((project) => <Route path={projectRoute(project)} element={<ProjectPage project={project} />} key={project.title} />);

export default function Projects(){
    const content = 
    <div style={{width: '100%'}}>
        <ProjectFilter/>
        <div className="projectsList">
            {projects.map((proj, index) => {
                return(
                    <ProjectTile key={index} project={proj} type="project" />
                )})}
        </div>
    </div>

    return(
        <BasicLayout content={content} />
    )
}

/*
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

function TouchDesignerClipTile(proj, index){
    return(
        <div className='projectTile touchdesignerTile' key={index}>
            <ReactPlayer
                url={proj.source}
                className="temp"
                width="100%"
                height="100%"
                controls={true}
                loop={true}
            />
            <p style={{fontStyle: 'italic'}}>{proj.title}</p>
            <p>{proj.date}</p>
        </div>
    )
}

export default function Projects(){
    const webRef = useRef(null);
    const musicVideosRef = useRef(null);
    const visualsRef = useRef(null);

    return(
            <div className='container projectsContainer'>                
                <div>
                    <h2 className='projectsPreTitle'>you've entered grace's</h2>
                    <h1 className='projectsTitle'>Project Realm</h1>
                </div>
                <Link className='projectsNavButton' to='/'>
                    <IoHome className='projectNavIcon'/>
                    take me home!
                </Link>
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
                        <button className='projectsNavButton' onClick={() => visualsRef.current?.scrollIntoView({behavior: 'smooth'})}>
                            <IoVideocam className='projectNavIcon'/>
                            visuals
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
                        music / lyric videos created in TouchDesigner.
                    </p>
                    <div className='projectsList'>
                        {musicVideos.map((proj, index) => {return MusicVideoTile(proj, index)})}
                    </div>
                </div>
                <div className='projectsContentBox' ref={visualsRef}>
                    <h3>touchdesigner visuals</h3>
                    <p>
                        generative art created with TouchDesigner - NOT AI!
                    </p>
                    <div className='projectsList'>
                        {touchdesignerClips.map((proj, index) => {return TouchDesignerClipTile(proj, index)})}
                    </div>
                </div>
            </div>
        
    )
}


*/