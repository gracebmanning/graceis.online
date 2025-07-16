import './BlogTile.css';
import { Link, useNavigate } from 'react-router-dom';
import { tagRoute, postRoute } from '../../../utility/slugify';

// BLOG PREVIEW TILE
export function BlogTile({post, onClick}){
    const navigate = useNavigate();
    
      const handleClick = () => {
        if (onClick) {
          onClick();
        }
        navigate(postRoute(post));
      };

    return(
        <div className="blogTile">
            <h2>{post.title}</h2>
            <h3>{post.date}</h3>
            <p>tags: {post.tags.map((tag, index) => { return(<Link key={index} to={tagRoute(tag)}>{tag}</Link>) })}</p>
            <p className="blogTileText">{post.description}</p>
            <button onClick={handleClick}>read here!</button>
        </div>
    );
}