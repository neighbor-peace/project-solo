import React from 'react';
import Project from '../components/Project.jsx';

export default function ProjectsContainer({
  projectData,
  openTaskModal,
  openProjectEditor,
  openTaskEditor,
}) {
  const projects = projectData.map((project) => (
    <Project
      key={project._id}
      projectId={project._id}
      title={project.title}
      tasksArr={project.tasks}
      openTaskModal={openTaskModal}
      openProjectEditor={openProjectEditor}
      openTaskEditor={openTaskEditor}
    />
  ));
  return <>{projects}</>;
}
