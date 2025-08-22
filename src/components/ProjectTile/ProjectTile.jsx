import "./ProjectTile.css";
import { useNavigate } from "react-router-dom";
import Badge from "../Badges/Badges";
import { formatMoYrDate } from "../../utility/formatMoYrDate";

export function ProjectTile({ project, type, onClick }) {
  const navigate = useNavigate();
  const pathname = type === 1 ? "projects" : "just-for-fun";

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    navigate(`/${pathname}/${project.slug.current}`);
  };

  return (
    <div className="projectTile" onClick={handleClick}>
      <img
        className="projectThumbnail"
        src={project.thumbnail.asset.url}
        alt={project.thumbnail.alt}
      />
      <div className="projectTileInfo">
        <h3>{project.title.toLowerCase()}</h3>
        <p>{formatMoYrDate(project.date)}</p>
        <div className="projectTileBadges">
          {project.tags.map((tag) => (
            <Badge key={tag} size={"small"} type={tag.title} />
          ))}
          {project.featured ? <Badge size={"small"} type={"featured"} /> : null}
          {project.ongoing ? <Badge size={"small"} type={"ongoing"} /> : null}
        </div>
        <p>{project.description}</p>
      </div>
    </div>
  );
}
