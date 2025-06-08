import './Blog.css';
import { Route, Link } from 'react-router-dom';
import { posts } from '../../data/posts';
import { tagRoute } from '../../utility/slugify';
import { BasicLayout } from '../../layouts/BasicLayout';
import { BlogPage } from '../../layouts/BlogListPage';

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
    return(
        <BlogPage title={`posts tagged with: ${tag}`} posts={filteredPosts} />
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
        <BasicLayout title={"All Blog Tags"} content={content} />
    );
}