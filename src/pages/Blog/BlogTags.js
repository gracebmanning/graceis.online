import { Route, Link } from 'react-router-dom';
import { posts } from '../../data/posts';
import { BlogPreview } from './BlogPosts';
import { tagRoute } from '../../utility/slugify';
import { BasicLayout } from '../../layouts/BasicLayout';

// ALL TAGS LIST
const tags = [];
posts.forEach((post) => post.tags.forEach((tag) => {
    if(!tags.includes(tag)){tags.push(tag)}
} ));

// ROUTES FOR ALL TAGS
export const tagRoutes = tags.map((tag) => <Route path={tagRoute(tag)} element={tagPage(tag)} key={tag} />);

// INDIVIDUAL TAG PAGE
function tagPage(tag){
    const filteredPosts = posts.filter((post) => post.tags.includes(tag));
    const content =
    <div>
        <h1>posts tagged with: {tag}</h1>
        {filteredPosts.map((post) => BlogPreview(post))}
    </div>
    return(
        <BasicLayout content={content} />
    );
}

// ALL TAGS PAGE
export function Tags(){
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
        <BasicLayout content={content} />
    );
}