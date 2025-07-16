import './Blog.css';
import { posts } from "../../data/posts";
import { Route, Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { postRoute, tagRoute } from '../../utility/slugify';
import { BasicLayout } from "../../layouts/BasicLayout";
import { List } from '../../components/List/List';

// ROUTES FOR ALL BLOG POSTS
export const postRoutes = posts.map((post, index) => <Route path={postRoute(post)} element={<BlogPost post={post} index={index}/>} key={post.title} />);

// INDIVIDUAL BLOG POST PAGE
export function BlogPost({post, index}){
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const handleBackClick = () => {
        navigate(-1);
    };
    
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
        <button className="backButton" onClick={handleBackClick}>← back</button>
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

export function Posts(){
    return(
        <List header={"all blog posts"} items={posts} type={3} />
    );
}