import React from 'react';
import { Code, ExternalLink } from 'lucide-react';

function Projects() {
  const projects = [
    {
      title: 'WoundWatch',
      description: 'AI-powered wound assessment tool with real-time image classification and segmentation using PyTorch and Streamlit',
      link: 'https://github.com/WiamSkakri/WoundWatch.git',
      image: '/WoundWatch.png',
      technologies: ['Python', 'Grad-Cam', 'ResNet-18', 'U-Net Architecture']
    },
    {
      title: 'Mutual-Fund-Calculator',
      description: 'Goldman Sachs project to develop a mutual fund performance calculator.',
      link: 'https://github.com/WiamSkakri/Mutual-Fund-Calculator',
      image: '/GoldmanSachs.png',
      technologies: ['Java', 'PostgreSQL', 'Angular', 'Tailwind CSS']
    },

    {
      title: 'Sustainify',
      description: 'A gamified approach to sustainability that calculates a sustainability score based on transaction history..',
      link: 'https://github.com/WiamSkakri/Sustainability_Score.git',
      image: '/Sustainify.png',
      technologies: ['React-Native', 'Expo', 'Gemini', 'Google-API']
    }
  ];

  return (
    <div>
      <div className="flex items-center gap-2 mb-8">
        <Code className="text-gray-400" size={24} />
        <h1 className="text-3xl font-handwriting">Projects</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border border-[#E6E6E6] dark:border-neutral-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
           <div className="w-full h-64 flex items-center justify-center overflow-hidden">
  <img
    src={project.image}
    alt={project.title}
    className="max-w-full max-h-full object-contain"
  />
</div>
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