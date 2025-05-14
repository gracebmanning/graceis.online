import '../Projects/Projects.css';
import { art } from '../../data/artList';
import { Route } from 'react-router-dom';
import { artRoute } from '../../utility/slugify';
import { IndividualProjectPage } from '../../layouts/IndividualProjectPage';
import { ProjectPage } from '../../layouts/ProjectPage';

// ROUTES FOR ALL ART PROJECTS
export const artRoutes = art.map((project) => <Route path={artRoute(project)} element={<IndividualProjectPage project={project} />} key={project.title} />);

const filters = ['website', 'music video', 'other'];
export default function Art(){
    return(
        <ProjectPage projects={art} filters={filters} header={"personal (non-commercial) projects"} />
    )
}