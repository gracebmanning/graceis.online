import './Blog.css';
import { BasicLayout } from '../../layouts/BasicLayout';
import { Link } from 'react-router-dom';

// NOT CURRENTLY IN USE
export default function Blog(){
    const content = 
    <div>
        <h1>Blog Home</h1>
        <p>Featured Posts</p>
        <Link to='/blog/posts'>All Posts</Link>
    </div>
    return(
        <BasicLayout title="Blog Home" content={content} />
    );
}
