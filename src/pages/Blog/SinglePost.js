import './Blog.css';
import { posts } from "../../data/posts";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { postRoute, tagRoute } from '../../utility/slugify';
import { BasicLayout } from "../../layouts/BasicLayout";

// TODO: incorporate PortableText as laid out below. Adapt from TS to JS.
/*
From https://medium.com/@mark_centoni/adding-a-code-block-to-sanity-io-content-editor-and-display-in-a-react-frontend-3f0acba16787

const ptComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null
      }

      return (
        <Image
          alt={value.alt || ' '}
          loading="lazy"
          height={value.height || 500}
          width={value.width || 500}
          src={urlForImage(value).url()}
          style={{
            width: '100%',
            marginBottom: '24px',
          }}
        />
      )
    },
    code: ({ value }: any) => {
      return <CodeBlock value={value} />
    },
  },
}

Pass the components defined above as a prop to the PortableText component, 
along with the blockContent field AKA 'body'.

<PortableText
  value={body}
  components={ptComponents}
/>

*/

export default function SinglePost({post, index}){
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