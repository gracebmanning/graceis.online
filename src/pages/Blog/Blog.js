import './Blog.css';
//import { posts } from "../../data/posts";
import { List } from '../../components/List/List';
import { useState, useEffect } from 'react';
import sanityClient from '../../sanityClient';
import { postsQuery } from '../../queries/blogQuery';
import { BasicLayout } from '../../layouts/BasicLayout';

export default function Blog(){
    const [postData, setPostData] = useState(null);

    useEffect(() => {
      sanityClient.fetch(postsQuery)
      .then((data) => setPostData(data))
      .catch(console.error);
    }, [])

    let content = null;
    if(postData){
      content = <List header={"all blog posts"} items={postData} type={3} />
    } else{
      content = "Loading..."
    }

    return(
        <BasicLayout title={"Blog"} content={content} />
    );
}
