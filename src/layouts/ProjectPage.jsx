import { BasicLayout } from "./BasicLayout";
import ProjectFilter from "../components/ProjectFilter/ProjectFilter";
import ProjectTile from "../components/ProjectTile/ProjectTile";

export function ProjectPage({ projects, filters, header }) {
  const content = (
    <div style={{ width: "100%" }}>
      <div className="projectsHeader">
        <p style={{ margin: "0px", fontStyle: "italic" }}>{header}</p>
        <ProjectFilter projects={projects} filters={filters} />
      </div>
      <div className="projectsList">
        {projects.map((proj, index) => {
          return <ProjectTile key={index} project={proj} type="project" />;
        })}
      </div>
    </div>
  );

  return <BasicLayout content={content} />;
}
