import './Projects.css';
import { projects } from '../../data/projects';
import { Route } from 'react-router-dom';
import { subpageRoute } from '../../utility/slugify';
import { IndividualProjectPage } from './IndividualProjectPage/IndividualProjectPage';
import { List } from '../../components/List/List';
import { BasicLayout } from '../../layouts/BasicLayout';

// ROUTES FOR ALL PROJECTS
export const projectRoutes = projects.map((project) => <Route path={subpageRoute('projects', project)} element={<IndividualProjectPage project={project} />} key={project.title} />);

export default function Projects(){
    // let content = null;
    // if(postData){
    //   content = <List header={"all blog posts"} items={postData} type={3} />
    // } else{
    //   content = "Loading..."
    // }
    let content = <List header={"commercial projects"} items={projects} type={1} />

    return(
        <BasicLayout title={"Projects"} content={content} />
    )
}