import React from 'react';
import { ChevronDown } from 'lucide-react';
import { TypewriterText } from '../components/TypewriterText';

function Home() {
  const professions = [
    'Web Developer',
    'Software Engineer',
    'UI/UX Designer',
    'Full Stack Developer'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="flex-1 flex items-center justify-center px-6 md:px-12">
        <div className="w-full max-w-7xl flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-24">
          <div className="w-full md:w-1/2 max-w-2xl">
            <h1 className="text-6xl md:text-7xl font-bold text-primary dark:text-primary-dark mb-4">
              Wiam Skakri
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              I'm a{' '}
              <TypewriterText
                words={professions}
                className="text-primary dark:text-primary-dark"
              />
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Passionate about building scalable web applications and exploring innovative solutions.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 bg-primary dark:bg-primary-dark text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Contact Me
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 border-2 border-primary dark:border-primary-dark text-primary dark:text-primary-dark rounded-lg hover:bg-primary/10 dark:hover:bg-primary-dark/10 transition-colors"
              >
                View Projects
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src="/public/wiam.jpg"
              alt="Profile"
              className="w-64 h-64 md:w-[28rem] md:h-[28rem] rounded-full object-cover border-8 border-white dark:border-neutral-800 shadow-2xl"
            />
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection('experience')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
      >
        <ChevronDown size={32} className="animate-bounce" />
      </button>
    </div>
  );
}

export default Home;