import './Blog.css';
import { posts } from "../../data/posts";
import { List } from '../../components/List/List';

export default function Blog(){
    return(
        <List header={"all blog posts"} items={posts} type={3} />
    );
}
