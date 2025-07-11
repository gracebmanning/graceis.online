import "./ProjectTile.css";
import { Link } from "react-router-dom";
import { artRoute, projectRoute } from "../../utility/slugify";
import Badge from "../Badges/Badges";

export function ProjectTile({ project, type }) {
  return (
    <Link
      className="projectTile2"
      to={type === "justForFun" ? artRoute(project) : projectRoute(project)}
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
        <div className="projectTileBadges">
          <Badge size={"small"} type={project.type} />
          {project.isFeatured ? (
            <Badge size={"small"} type={"featured"} />
          ) : null}
          {project.isOngoing ? <Badge size={"small"} type={"ongoing"} /> : null}
        </div>
      </div>
    </Link>
  );
}
