import "./ProjectTile.css";
import { Link } from "react-router-dom";
import { artRoute, projectRoute } from "../../utility/slugify";

export default function ProjectTile({ project, type }) {
  return (
    <Link
      className="projectTile2"
      to={type === "art" ? artRoute(project) : projectRoute(project)}
    >
      <img
        className="projectThumbnail"
        src={project.thumbnail.src}
        alt={project.thumbnail.alt}
      />
      <div className="projectTileInfo">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <p>{project.date}</p>
      </div>
    </Link>
  );
}
