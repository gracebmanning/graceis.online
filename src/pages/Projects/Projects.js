import './Projects.css';
import { projects } from '../../data/projects';
import { Route } from 'react-router-dom';
import { subpageRoute } from '../../utility/slugify';
import { IndividualProjectPage } from '../../layouts/IndividualProjectPage';
import { List } from '../../components/List/List';

// ROUTES FOR ALL PROJECTS
export const projectRoutes = projects.map((project) => <Route path={subpageRoute('projects', project)} element={<IndividualProjectPage project={project} />} key={project.title} />);

export default function Projects(){
    return(
        <List header={"commercial projects"} items={projects} type={1} />
    )
}