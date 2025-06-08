import '../Projects/Projects.css';
import { art } from '../../data/justForFun';
import { Route } from 'react-router-dom';
import { artRoute } from '../../utility/slugify';
import { IndividualProjectPage } from '../../layouts/IndividualProjectPage';
import { ProjectPage } from '../../layouts/ProjectPage';

// ROUTES FOR ALL ART PROJECTS
export const artRoutes = art.map((project) => <Route path={artRoute(project)} element={<IndividualProjectPage project={project} />} key={project.title} />);

export default function Art(){
    return(
        <ProjectPage projects={art} header={"personal (non-commercial) projects"} type="art" />
    )
}