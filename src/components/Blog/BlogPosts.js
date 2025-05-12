import { posts } from "./posts";
import { Route, Link } from "react-router-dom";
import { BsEnvelopeHeart } from "react-icons/bs";
import { postRoute, tagRoute } from '../../utility/slugify';
import { BasicLayout } from "../../layouts/BasicLayout";

// ROUTES FOR ALL BLOG POSTS
export const postRoutes = posts.map((post, index) => <Route path={postRoute(post)} element={BlogPost(post, index)} key={post.title} />);

// INDIVIDUAL BLOG POST PAGE
function BlogPost(post, index){
    let prev;
    let next;
    if(posts.length === 1){
        prev = '';
        next = '';
    } else{
        if(index === 0){
            let prevPost = posts[index+1];
            prev = <p>prev: <Link to={postRoute(prevPost)}>{prevPost.title}</Link></p>;
            next = <p>next: none</p>;
        } else if(index === posts.length-1){
            prev = <p>previous: none</p>;
            let nextPost = posts[index-1];
            next = <p>next: <Link to={postRoute(nextPost)}>{nextPost.title}</Link></p>;
        } else{
            let prevPost = posts[index+1];
            let nextPost = posts[index-1];
            prev = <p>prev: <Link to={postRoute(prevPost)}>{prevPost.title}</Link></p>;
            next = <p>next: <Link to={postRoute(nextPost)}>{nextPost.title}</Link></p>;
        }
    }

    const content = 
    <div>
        <div className="blogContainer">
            <h1>{post.title}</h1>
            <h2>{post.date}</h2>
            <p className="blogTags">tags:</p>
            <ul>
                {post.tags.sort().map((tag) => {
                    return(
                        <li key={tag}>
                            <Link to={tagRoute(tag)}>{tag}</Link>
                        </li>
                )})}
            </ul>
            {post.content}
        </div>
        <div className="blogFooterLinks">
            <span className="footerLink">{prev}</span>
            <span className="footerLink">{next}</span>
        </div>
    </div>
    
    return(
        BasicLayout(content)
    );
}

// BLOG PREVIEW TILE
export function BlogPreview(post){
    return(
        <div key={post.title}>
            <BsEnvelopeHeart className="envelopeIcon" />
            <div>
                <h2>{post.title}</h2>
                <h3>{post.date}</h3>
                <Link to={postRoute(post)}>read here!</Link>
            </div>
        </div>
    );
}

// POSTS PAGE - SHOWING ALL POSTS
export function Posts(){
    const content = 
        <div>
            <h1>All Posts</h1>
            {posts.map((post) => BlogPreview(post))}
        </div>
    return(
        BasicLayout(content)
    );
}