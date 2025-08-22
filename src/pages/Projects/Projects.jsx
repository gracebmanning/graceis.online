import "./Projects.css";
import { List } from "../../components/List/List";
import { BasicLayout } from "../../layouts/BasicLayout";
import { useState, useEffect } from "react";
import sanityClient from "../../sanityClient";
import {
  commercialProjectsQuery,
  personalProjectsQuery,
} from "../../queries/projectQuery";

export function CommercialProjects() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(commercialProjectsQuery)
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  let content = null;
  if (projectData) {
    content = (
      <List header={"commercial projects"} items={projectData} type={1} />
    );
  } else {
    content = "Loading...";
  }

  return <BasicLayout title={"Projects"} content={content} />;
}

export function PersonalProjects() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(personalProjectsQuery)
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  let content = null;
  if (projectData) {
    content = (
      <List
        header={"personal (non-commercial) projects"}
        items={projectData}
        type={2}
      />
    );
  } else {
    content = "Loading...";
  }

  return <BasicLayout title={"Projects"} content={content} />;
}
