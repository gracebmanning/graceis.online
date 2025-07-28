import './Blog.css';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { BasicLayout } from "../../layouts/BasicLayout";
import sanityClient from '../../sanityClient';
import { postQuery } from '../../queries/blogQuery';
import { formatISODate } from '../../utility/formatISODate';
import PortableTextComponent from '../../components/PortableText/PortableText';

export default function SinglePost(){
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [singlePost, setSinglePost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const handleBackClick = () => {
        navigate(-1);
    };

    useEffect(() => {
    if (!slug) return;

    setIsLoading(true);
    sanityClient
      .fetch(postQuery, { slug })
      .then((data) => {
        if (data) {
          setSinglePost(data);
        } else {
          setError('Post not found.');
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to fetch post.');
        setIsLoading(false);
      });
    }, [slug]);

    if (isLoading) {
      return <BasicLayout title="Loading..." content="Loading..." bg={false} />;
    }

    if (error) {
      return <BasicLayout title="Error" content={error} bg={false} />;
    }
    
    // It's safer to check for singlePost before rendering
    if (!singlePost) {
      return <BasicLayout title="Not Found" content="This post could not be found." bg={false} />;
    }

    const content = ( 
      <div className="singleBlogPost">
        <button className="backButton" onClick={handleBackClick}>← back</button>
        <div>
            <h1>{singlePost.title}</h1>
            <div className="singleBlogPostDates">
              <h2>{`published ${formatISODate(singlePost.publishedAt)}`}</h2>
              <span>  |  </span>
              <h2>{`last updated ${formatISODate(singlePost._updatedAt)}`}</h2>
            </div>
            <ul className="singleBlogPostTags">
                {singlePost.tags?.sort().map((tag) => (
                  <li key={tag.title}>{tag.title}</li>
                ))}
            </ul>
            <div className="postBody">
              <PortableTextComponent content={singlePost.body} />
          </div>
        </div>
    </div>
    )

    return(
        <BasicLayout title={singlePost.title} content={content} bg={false} />
    );
}