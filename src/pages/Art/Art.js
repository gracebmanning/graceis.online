import './Art.css';
import {BasicLayout} from '../../layouts/BasicLayout';
import ProjectTile from '../../components/ProjectTile/ProjectTile';
import ProjectFilter from '../../components/ProjectFilter/ProjectFilter';
import { art } from '../../data/artList';
import { Route } from 'react-router-dom';
import { artRoute } from '../../utility/slugify';
import { ProjectPage } from '../../layouts/ProjectPage';

// ROUTES FOR ALL ART PROJECTS
export const artRoutes = art.map((project) => <Route path={artRoute(project)} element={<ProjectPage project={project} />} key={project.title} />);

export default function Art(){
    const content = 
    <div style={{width: '100%'}}>
        <ProjectFilter/>
        <div className="projectsList">
            {art.map((proj, index) => {
                return(
                    <ProjectTile key={index} project={proj} type="art" />
                )})}
        </div>
    </div>

    return(
        <BasicLayout content={content} />
    )
}