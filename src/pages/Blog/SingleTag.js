import './Blog.css';
import { posts } from '../../data/posts';
import { List } from '../../components/List/List';

export default function SingleTag({tag}){
    const filteredPosts = posts.filter((post) => post.tags.includes(tag));
    return(
        <List header={`posts tagged with: ${tag}`} items={filteredPosts} type={3} />
    );
}