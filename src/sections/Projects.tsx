import React from 'react';
import { Code, ExternalLink } from 'lucide-react';

function Projects() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A modern e-commerce solution built with Next.js and Stripe.',
      link: 'https://project1.com',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
      technologies: ['Next.js', 'Stripe', 'Tailwind CSS', 'PostgreSQL']
    },
    {
      title: 'Task Management App',
      description: 'Real-time task management application using React and Firebase.',
      link: 'https://project2.com',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800',
      technologies: ['React', 'Firebase', 'Material-UI', 'TypeScript']
    }
  ];

  return (
    <div>
      <div className="flex items-center gap-2 mb-8">
        <Code className="text-gray-400" size={24} />
        <h1 className="text-3xl font-handwriting">Projects</h1>
      </div>
      <div className="grid grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="border border-[#E6E6E6] dark:border-neutral-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-handwriting">{project.title}</h3>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300">
                  <ExternalLink size={18} />
                </a>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-neutral-900 text-gray-600 dark:text-gray-400 rounded-full text-sm font-handwriting">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;