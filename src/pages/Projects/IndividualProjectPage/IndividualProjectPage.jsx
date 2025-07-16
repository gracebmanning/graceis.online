import "./IndividualProjectPage.css";
import { BasicLayout } from "../../../layouts/BasicLayout";
import { MdArrowOutward } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import Badge from "../../../components/Badges/Badges";
import { useEffect } from "react";

export function IndividualProjectPage({ project }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleBackClick = () => {
    navigate(-1);
  };

  const content = (
    <div className="individualProjectPageContainer">
      <button className="backButton" onClick={handleBackClick}>
        ← back
      </button>
      <img src={project.thumbnail.src} alt={project.thumbnail.alt} />
      <h3>{project.title}</h3>
      <div className="individualProjectPageDetails">
        <p className="individualProjectDate">{project.date}</p>
        {project.externalLink === null ? null : (
          <a href={project.externalLink[1]} target="_blank" rel="noreferrer">
            {project.externalLink[0]}
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
