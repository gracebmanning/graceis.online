import "./IndividualProjectPage.css";
import { BasicLayout } from "../../../layouts/BasicLayout";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import Badge from "../../../components/Badges/Badges";

export function IndividualProjectPage({ project }) {
  const content = (
    <div className="individualProjectPageContainer">
      <Link to="">← back</Link>
      <img src={project.thumbnail.src} alt={project.thumbnail.alt} />
      <h3>{project.title}</h3>
      <div className="individualProjectPageDetails">
        <p className="individualProjectDate">{project.date}</p>
        {project.externalLink === null ? null : (
          <a href={project.externalLink} target="_blank" rel="noreferrer">
            link
            <MdArrowOutward style={{ marginLeft: "2px", fontSize: "18px" }} />
          </a>
        )}
      </div>
      <div className="individualProjectPageBadges">
        <Badge size={"medium"} type={project.type} />
        {project.isFeatured ? (
          <Badge size={"medium"} type={"featured"} />
        ) : null}
        {project.isOngoing ? <Badge size={"medium"} type={"ongoing"} /> : null}
      </div>
      <div className="individualProjectPageBody">{project.body}</div>
    </div>
  );
  return <BasicLayout title={project.title} content={content} bg={false} />;
}
