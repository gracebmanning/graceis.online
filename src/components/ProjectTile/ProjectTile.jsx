import "./ProjectTile.css";

export default function ProjectTile({ project }) {
  return (
    <div className="projectTile2">
      <img className="projectThumbnail" src={project.thumbnail} alt="" />
      <div className="projectTileInfo">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <p>{project.date}</p>
      </div>
    </div>
  );
}
