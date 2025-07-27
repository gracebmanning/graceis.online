import './Blog.css';
import { posts } from "../../data/posts";
import { Link } from 'react-router-dom';
import { tagRoute } from '../../utility/slugify';
import { BasicLayout } from '../../layouts/BasicLayout';

// ALL TAGS LIST
const tags = [];
posts.forEach((post) => post.tags.forEach((tag) => {
    if(!tags.includes(tag)){tags.push(tag)}
} ));

export default function Tag(){
    const content = 
    <div>
        <h1 className="tagsTitle">Tags</h1>
        <ul>
            {tags.sort().map((tag) => 
                <li key={tag}>
                    <Link to={tagRoute(tag)}>{tag}</Link>
                </li>
            )}
        </ul>
    </div>
    return(
        <BasicLayout title={"All Blog Tags"} content={content} />
    );
}