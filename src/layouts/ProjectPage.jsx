import { BasicLayout } from "./BasicLayout";
import ProjectFilter from "../components/ProjectFilter/ProjectFilter";
import ProjectTile from "../components/ProjectTile/ProjectTile";
import { useState, useEffect, useMemo } from "react";

export function ProjectPage({ projects, header, type }) {
  const [activeFilter, setActiveFilter] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const filters = useMemo(() => {
    const types = projects.map((project) => project.type); // Get all project types
    const uniqueTypes = [...new Set(types)];
    return uniqueTypes;
  }, [projects]);

  useEffect(() => {
    // If activeFilter is null, show all projects
    if (activeFilter === null) {
      setFilteredProjects(projects);
    } else {
      // Otherwise, filter by the active filter type
      const filtered = projects.filter(
        (project) => project.type === activeFilter
      );
      setFilteredProjects(filtered);
    }
  }, [activeFilter, projects]);

  const handleFilterChange = (filter) => {
    // If the clicked filter is already the active filter, unselect it (set to null)
    // Otherwise, set the clicked filter as the active filter
    setActiveFilter(activeFilter === filter ? null : filter);
  };

  const content = (
    <div style={{ width: "100%" }}>
      <div className="projectsHeader">
        <p style={{ margin: "0px", fontStyle: "italic" }}>{header}</p>
        <ProjectFilter
          filters={filters}
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
        />
      </div>
      <div className="projectsList">
        {filteredProjects.map((proj, index) => {
          return <ProjectTile key={index} project={proj} type={type} />;
        })}
      </div>
    </div>
  );

  const pageTitle = type === "art" ? "Art" : "Projects";

  return <BasicLayout title={pageTitle} content={content} />;
}
