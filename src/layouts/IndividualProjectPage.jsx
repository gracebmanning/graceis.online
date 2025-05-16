import { BasicLayout } from "./BasicLayout";

export function IndividualProjectPage({ project }) {
  const content = (
    <div>
      <img
        src={project.thumbnail.src}
        alt={project.thumbnail.alt}
        style={{ width: "100%" }}
      />
      <h3>{project.title}</h3>
      {project.body}
    </div>
  );
  return <BasicLayout content={content} />;
}
