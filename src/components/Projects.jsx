import React from "react";
import { useFetchProjects } from "../fetchProjects";
const Projects = () => {
  const { isLoading, projects } = useFetchProjects();

  console.log(isLoading, projects);

  if (isLoading) {
    <section className="loading">
      <h2>Loading...</h2>;
    </section>;
  }

  return (
    <section className="projects">
      <div className="title">
        <h2>Projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((project) => {
          const { id, title, img, url } = project;
          return (
            <a
              href={url}
              className="project"
              key={id}
              target="_blank"
              rel="noreferrer"
            >
              <img src={img} alt={title} className="img" />
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
