import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      name: 'FormSathi',
      description:
        'Full-stack application management system for managing applications, profiles, documents, eligibility, and opportunities.',
      tags: ['Node.js', 'Express.js', 'React.js', 'Supabase', 'REST APIs'],
      achievements: [
        'Application & profile management',
        'REST API integration',
        'Document & opportunity management',
      ],
      github: 'https://github.com/RohitMaurya-16/FormSathi',
      demo: 'https://formsathi-20260324210206.netlify.app/',
    },

    {
      name: 'NoteHive',
      description:
        'A full-stack note management platform designed to create, organize, and manage notes with a clean and user-friendly interface.',
      tags: ['React.js', 'JavaScript', 'Node.js', 'Database'],
      achievements: [
        'Note management',
        'Clean and responsive UI',
        'Full-stack integration',
      ],
      github: 'https://github.com/RohitMaurya-16/NoteHive',
    },

    {
      name: 'Digital Mental Health Platform',
      description:
        'Full-stack digital mental health platform with AI chat, appointments, mood tracking, posts, likes, and comments.',
      tags: ['Python', 'Flask', 'JavaScript', 'HTML', 'CSS', 'Chart.js'],
      achievements: [
        'AI-powered chat',
        'Mood tracking',
        'Appointment management',
      ],
      github: 'https://github.com/RohitMaurya-16/Digital_Mental_Health',
      demo: 'https://comforting-boba-03f45e.netlify.app/',
    },

    {
      name: 'StreamSense',
      description:
        'AI-powered movie recommendation system using React.js, Node.js, and Watchmode API. Optimized API calls (40% faster) and designed a seamless UI for OTT navigation.',
      tags: ['React.js', 'Node.js', 'AI', 'API Integration'],
      achievements: [
        '40% faster API calls',
        'Seamless UI/UX',
        'Smart Recommendations',
      ],
      github: 'https://github.com/RohitMaurya-16/Stream',
      demo: 'https://stream-rosy-nine.vercel.app/',
    },

    {
      name: 'ProjectCloud',
      description:
        'Project Cloud is an open-source platform that connects students and educational institutes, facilitating project sharing and event discovery.',
      tags: ['Next.js', 'Supabase', 'Tailwind CSS'],
      achievements: [
        'Seamless UI/UX',
        'Modern Design',
      ],
      github: 'https://github.com/RohitMaurya-16/projectcloud',
    },

    {
      name: 'E-Commerce Website',
      description:
        'A simple yet functional e-commerce website built with Django featuring product browsing, shopping cart, user authentication, and profile management.',
      tags: [
        'Django',
        'Python (3.8+)',
        'HTML + CSS',
        'JavaScript',
        'SQLite',
      ],
      achievements: [
        'Search & filters',
        'Modern Design',
        'Product reviews',
      ],
      github: 'https://github.com/RohitMaurya-16/E-Commerce-Websites',
    },

    {
      name: 'Airline Management System',
      description:
        'Built a real-time booking and scheduling system using Java and SQL for passenger and booking management.',
      tags: ['Java', 'SQL', 'Real-time Processing'],
      achievements: [
        'Reduced booking errors',
        'Streamlined management',
        'Real-time updates',
      ],
      github: 'https://github.com/RohitMaurya-16/AirLineSystem',
    },
  ];

  return (
    <section id="projects" className="animate-fadeIn">
      <h2 className="text-2xl font-semibold mb-6 border-b-2 border-primary pb-1">
        Technical Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.github || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className={`block group ${
              project.github
                ? 'cursor-pointer'
                : 'cursor-not-allowed opacity-80'
            }`}
            tabIndex={project.github ? 0 : -1}
            aria-label={
              project.github
                ? `View ${project.name} on GitHub`
                : undefined
            }
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-2xl hover:-translate-y-1 transition duration-300 border border-transparent group-hover:border-primary/40">

              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-bold text-xl text-primary mb-0">
                  {project.name}
                </h3>

                {project.github && (
                  <FaGithub className="text-xl text-muted group-hover:text-primary transition" />
                )}
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="font-semibold text-sm mb-2 text-gray-700 dark:text-gray-300">
                  Key Achievements:
                </h4>

                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                  {project.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-2">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-green-600 text-sm font-semibold hover:underline"
                    aria-label={`View ${project.name} live demo`}
                  >
                    Live Demo
                    <FaExternalLinkAlt className="inline text-xs" />
                  </a>
                )}

                {project.github && (
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:underline">
                    View on GitHub
                    <FaExternalLinkAlt className="inline text-xs" />
                  </span>
                )}
              </div>

            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
