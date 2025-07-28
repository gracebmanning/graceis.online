import '../Projects/Projects.css';
import { justForFun } from '../../data/justForFun';
import { Route } from 'react-router-dom';
import { subpageRoute } from '../../utility/slugify';
import { IndividualProjectPage } from '../Projects/IndividualProjectPage/IndividualProjectPage';
//import { ProjectPage } from '../../layouts/ProjectPage';
import { List } from '../../components/List/List';
import { BasicLayout } from '../../layouts/BasicLayout';

// ROUTES FOR ALL ART PROJECTS
export const justForFunRoutes = justForFun.map((project) => <Route path={subpageRoute('just-for-fun', project)} element={<IndividualProjectPage project={project} />} key={project.title} />);

export default function JustForFun(){
    // let content = null;
    // if(postData){
    //   content = <List header={"all blog posts"} items={postData} type={3} />
    // } else{
    //   content = "Loading..."
    // }
    let content = <List header={"personal (non-commercial) projects"} items={justForFun} type={2} />

    return(
        <BasicLayout title={"Just for Fun"} content={content} />
    )
}