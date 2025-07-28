import './BlogTile.css';
import { useNavigate } from 'react-router-dom';
import { formatISODate } from '../../utility/formatISODate';

function createPreview(body, wordLimit=50){
  if (!body || !Array.isArray(body)) {
    return "This post has no content yet.";
  }

  // Extract all text from the blocks, ignoring images and other non-text types.
  const text = body
    // Find all blocks of type 'block' that have children
    .filter(block => block._type === 'block' && block.children)
    // For each block, join the text of its children (spans)
    .map(block =>
      block.children
        .filter(child => child._type === 'span' && child.text)
        .map(span => span.text)
        .join('')
    )
    .join(' '); // Add a space between paragraphs

  // Split the combined text into words
  const words = text.split(/\s+/); // Split by any whitespace character

  // If the text is already shorter than the limit, return it as is
  if (words.length <= wordLimit) {
    return text;
  }

  // Otherwise, slice the array and add an ellipsis
  return words.slice(0, wordLimit).join(' ') + '...';
}

// BLOG PREVIEW TILE
export function BlogTile({post, onClick}){
    const navigate = useNavigate();
    
    const handleClick = () => {
      if (onClick) {
        onClick();
      }
      navigate(`/blog/${post.slug.current}`);
    };

    

    return(
        <div className="blogTile">
            <ul className="blogTileTags">
              {post.tags?.map((tag, index) => (
                <li key={index}>{tag.title}</li>
              ))}
            </ul>
            <h2>{post.title}</h2>
            <h3>{formatISODate(post.publishedAt)}</h3>
            <p className="blogTileText">{createPreview(post.body)}</p>
            <button onClick={handleClick}>read more</button>
        </div>
    );
}