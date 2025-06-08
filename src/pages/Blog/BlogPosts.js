import './Blog.css';
import { posts } from "../../data/posts";
import { Route, Link } from "react-router-dom";
import { postRoute, tagRoute } from '../../utility/slugify';
import { BasicLayout } from "../../layouts/BasicLayout";
import { BlogPage } from "../../layouts/BlogListPage";

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
    <div className="blogPostPage">
        <div>
            <h1>{post.title}</h1>
            <h2>{post.date}</h2>
            <div className="blogPostTagList">
                <p>tags:</p>
                <ul>
                    {post.tags.sort().map((tag) => {
                        return(
                            <li key={tag}>
                                <Link to={tagRoute(tag)}>{tag}</Link>
                            </li>
                    )})}
                </ul>
            </div>
            {post.content}
        </div>
        <div className="blogFooterLinks">
            <span className="footerLink">←{prev}</span>
            <span className="footerLink">{next}→</span>
        </div>
    </div>
    
    return(
        <BasicLayout title={post.title} content={content} />
    );
}

// BLOG PREVIEW TILE
export function BlogPreview({post}){
    return(
        <div className="blogPreview" key={post.title}>
            <h2>{post.title}</h2>
            <h3>{post.date}</h3>
            <p>tags: {post.tags.map((tag, index) => { return(<Link key={index} to={tagRoute(tag)}>{tag}</Link>) })}</p>
            <p className="blogPreviewText">{post.previewText}</p>
            <Link to={postRoute(post)}>read here!</Link>
        </div>
    );
}

export function Posts(){
    return(
        <BlogPage title="all blog posts" posts={posts} />
    );
}