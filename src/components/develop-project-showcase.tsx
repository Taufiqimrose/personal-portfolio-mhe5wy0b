import React from 'react';

interface Project {
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    title: 'Project One',
    description: 'A brief description of Project One.',
    link: 'https://example.com/project-one',
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two.',
    link: 'https://example.com/project-two',
  },
  {
    title: 'Project Three',
    description: 'A brief description of Project Three.',
    link: 'https://example.com/project-three',
  },
];

const ProjectShowcase: React.FC = () => {
  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-700">{project.description}</p>
            <a href={project.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;