import React, { useState, useEffect } from 'react';
import { GithubIcon, LinkedinIcon, MailIcon, Sun, Moon, Menu, X } from 'lucide-react';
import Home from './sections/Home';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Blog from './sections/Blog';
import Contact from './sections/Contact';
import { LoadingScreen } from './components/LoadingScreen';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'projects', 'blog', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  const socialLinks = [
    { href: 'https://github.com/WiamSkakri', icon: GithubIcon },
    { href: 'https://www.linkedin.com/in/wiam-skakri/', icon: LinkedinIcon },
    { href: 'mailto:wxs428@case.edu', icon: MailIcon }
  ];

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-[#37352F] dark:text-gray-100 font-mono">
      <nav className="fixed top-0 left-0 right-0 bg-white/50 dark:bg-black/50 backdrop-blur-sm z-50">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">WS</h1>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex space-x-1">
                {navigationItems.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`px-3 py-1.5 rounded-md transition-colors ${
                      activeSection === id
                        ? 'bg-gray-100/80 dark:bg-neutral-900/80'
                        : 'hover:bg-gray-100/50 dark:hover:bg-neutral-900/50'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-4 pl-4 border-l border-gray-200 dark:border-neutral-800">
                {socialLinks.map(({ href, icon: Icon }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                ))}
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="p-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-neutral-900/50 transition-colors"
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation Button */}
            <div className="flex items-center gap-4 md:hidden">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-neutral-900/50 transition-colors"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-neutral-900/50 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-neutral-800">
              <div className="flex flex-col space-y-2">
                {navigationItems.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`px-3 py-2 rounded-md transition-colors ${
                      activeSection === id
                        ? 'bg-gray-100/80 dark:bg-neutral-900/80'
                        : 'hover:bg-gray-100/50 dark:hover:bg-neutral-900/50'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-200 dark:border-neutral-800">
                {socialLinks.map(({ href, icon: Icon }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      <main className="pt-16">
        <div className="max-w-5xl mx-auto px-6">
          <section id="home" className="min-h-screen">
            <Home />
          </section>
          <section id="experience" className="min-h-screen py-20">
            <Experience />
          </section>
          <section id="projects" className="min-h-screen py-20">
            <Projects />
          </section>
          <section id="blog" className="min-h-screen py-20">
            <Blog />
          </section>
          <section id="contact" className="min-h-screen py-20">
            <Contact />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;