import './Blog.css';
import { BasicLayout } from '../../layouts/BasicLayout';
import { Link } from 'react-router-dom';


export default function Blog(){
    const content = 
    <div>
        This will be a place where I list recent posts. See <Link to="/blog/posts">all posts here</Link>
    </div>

    return(
        <BasicLayout title={"Blog"} content={content} />
    )
}