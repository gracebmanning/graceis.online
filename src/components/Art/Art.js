import './Art.css';
import {BasicLayout} from '../../layouts/BasicLayout';
import ProjectTile from '../ProjectTile/ProjectTile';
import ProjectFilter from '../ProjectFilter/ProjectFilter';
import { art } from './artList';

export default function Art(){
    const content = 
    <div style={{width: '100%'}}>
        <ProjectFilter/>
        <div className="projectsList">
            {art.map((proj, index) => {
                return(
                    <ProjectTile project={proj} key={index} />
                )})}
        </div>
    </div>

    return(
        <BasicLayout content={content} />
    )
}