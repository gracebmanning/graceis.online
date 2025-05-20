import "./IndividualProjectPage.css";
import { BasicLayout } from "./BasicLayout";
import { MdArrowOutward } from "react-icons/md";

export function IndividualProjectPage({ project }) {
  const content = (
    <div className="individualProjectPageContainer">
      <div className="individualProjectPageContent">
        <img src={project.thumbnail.src} alt={project.thumbnail.alt} />
        <h3>{project.title}</h3>
        <div className="individualProjectPageDetails">
          <p>{project.date}</p>
          {project.externalLink === "" ? null : (
            <a href={project.externalLink} target="_blank" rel="noreferrer">
              link
              <MdArrowOutward style={{ marginLeft: "2px", fontSize: "18px" }} />
            </a>
          )}
        </div>
        <div className="individualProjectPageBody">{project.body}</div>
      </div>
    </div>
  );
  return <BasicLayout title={project.title} content={content} />;
}
