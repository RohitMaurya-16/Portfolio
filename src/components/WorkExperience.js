import React from 'react';

const WorkExperience = () => {
  const experiences = [
    {
      
    },
    {
     
    },
  ];

  return (
    <section id="work-experience" className="animate-fadeIn">
      <h2 className="text-2xl font-semibold mb-4 border-b-2 border-blue-600 pb-1">Work Experience</h2>
      <ul className="space-y-4">
        {experiences.map(({ company, role, duration, description }) => (
          <li key={company} className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow">
            <h3 className="font-bold text-lg">{role} - {company}</h3>
            <p className="italic text-sm text-gray-600 dark:text-gray-400">{duration}</p>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WorkExperience;
