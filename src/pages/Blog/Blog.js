import './Blog.css';
import { BlogLayout } from '../../layouts/BlogLayout';
import { Link } from 'react-router-dom';

// NOT CURRENTLY IN USE
export default function Blog(){
    const content = 
    <div>
        <h1>Blog Home</h1>
        <p>Featured Posts</p>
        <Link to='/posts'>All Posts</Link>
    </div>
    return(
        <BlogLayout title="Blog Home" content={content} />
    );
}
