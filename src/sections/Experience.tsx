import React from 'react';
import { Briefcase } from 'lucide-react';

function Experience() {
  const experiences = [
    {
      title: 'Senior Developer',
      company: 'Tech Corp',
      period: '2021 - Present',
      description: 'Led development of multiple full-stack applications using React and Node.js.',
      responsibilities: [
        'Architected and implemented scalable web applications',
        'Mentored junior developers and conducted code reviews',
        'Improved application performance by 40%'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency',
      period: '2019 - 2021',
      description: 'Developed responsive web applications and improved site performance.',
      responsibilities: [
        'Built responsive web interfaces using React',
        'Implemented modern CSS practices and animations',
        'Collaborated with designers to improve UX'
      ]
    }
  ];

  return (
    <div>
      <div className="flex items-center gap-2 mb-8">
        <Briefcase className="text-gray-400" size={24} />
        <h1 className="text-3xl">Experience</h1>
      </div>
      <div className="space-y-6">
        {experiences.map((job, index) => (
          <div key={index} className="p-6 rounded-lg bg-gray-50 dark:bg-neutral-900/50">
            <h3 className="text-xl mb-1">{job.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-3">{job.company} • {job.period}</p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{job.description}</p>
            <ul className="space-y-2">
              {job.responsibilities.map((responsibility, idx) => (
                <li key={idx} className="text-gray-600 dark:text-gray-400">
                  • {responsibility}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;