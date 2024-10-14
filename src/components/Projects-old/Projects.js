import './Projects.css';
import { backarrow, ladybug, whiteRabbit } from '../../assets/assets';

const projects = [
    {
        title: 'project 1',
        subtitle: 'subtitle 1',
        previewImage: whiteRabbit,
        body: 
        <div>
            <p>this is a project description</p>
            <img src={whiteRabbit} alt='test' />
        </div>
    },
    {
        title: 'project 1',
        subtitle: 'subtitle 1',
        previewImage: whiteRabbit,
        body: 
        <div>
            <p>this is a project description</p>
            <img src={whiteRabbit} alt='test' />
        </div>
    },
    {
        title: 'project 1',
        subtitle: 'subtitle 1',
        previewImage: whiteRabbit,
        body: 
        <div>
            <p>this is a project description</p>
            <img src={whiteRabbit} alt='test' />
        </div>
    },
    {
        title: 'project 1',
        subtitle: 'subtitle 1',
        previewImage: whiteRabbit,
        body: 
        <div>
            <p>this is a project description</p>
            <img src={whiteRabbit} alt='test' />
        </div>
    },
]

function ProjectTile(project, index){
    return(
        <div className='projectTile' key={index}>
            <img src={project.previewImage} alt='' />
            <div className='projectTileText'>
                <h3>{project.title}</h3>
                <h4>{project.subtitle}</h4>
            </div>
        </div>
    )
}

export default function Projects(){
    return(
        
            <div className='container subpageContainer projectsContainer'>
                <div className='subpageText'>
                    <a className='backLink' href='/'>
                        <img src={backarrow} alt='sketch outline of arrow pointing left' />
                        go home
                    </a>
                </div>
                <div className='subpageText subpageHeader'>
                    <div className='subpageHeaderText'>
                        <h2>this is the</h2>
                        <h1>projects page</h1>
                    </div>
                    <img id='ladybug' src={ladybug} alt='brown teddy bear' />
                </div>
                <div className='projectsListContainer'>
                    {projects.map((proj, index) => {
                        return ProjectTile(proj, index);
                    })}
                </div>
            </div>
        
    )
}