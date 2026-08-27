// import React from 'react';

// const WorkExperience = () => {
//   const experiences = [
//     {
      
//     },
//     {
     
//     },
//   ];

//   return (
//     <section id="work-experience" className="animate-fadeIn">
//       <h2 className="text-2xl font-semibold mb-4 border-b-2 border-blue-600 pb-1">Work Experience</h2>
//       <ul className="space-y-4">
//         {experiences.map(({ company, role, duration, description }) => (
//           <li key={company} className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow">
//             <h3 className="font-bold text-lg">{role} - {company}</h3>
//             <p className="italic text-sm text-gray-600 dark:text-gray-400">{duration}</p>
//             <p>{description}</p>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// export default WorkExperience;




import React from 'react';

const WorkExperience = () => {
  const experiences = [
    {
      company: 'Eduskills',
      role: 'AI-ML Virtual Intern',
      duration: 'Jan 2026 – Mar 2026',
      description:
        'Built and evaluated Machine Learning models using Scikit-learn, applying data preprocessing and feature engineering. Applied model evaluation and feature selection techniques to improve predictive performance.',
    },
    {
      company: 'IIIT Delhi',
      role: 'Hack 24 Participant',
      duration: 'August 24, 2024',
      description:
        'Participated in Hack 24 at IIIT Delhi and secured 6th rank among participating teams.',
    },
    {
      company: 'IIT Kanpur',
      role: 'Cybersecurity Hackathon Participant',
      duration: 'February 15–18, 2025',
      description:
        'Participated in the Cybersecurity Hackathon at IIT Kanpur in the Cybersecurity Solution Track.',
    },
    {
      company: 'IIT Roorkee',
      role: 'Drone4S Hackathon Participant',
      duration: 'October 12, 2024',
      description:
        'Participated in the Drone4S Hackathon at IIT Roorkee, focusing on technical problem-solving and innovation.',
    },
    {
      company: 'IIT Roorkee',
      role: 'GreenGuard Hackathon Finalist',
      duration: '2024',
      description:
        'Reached the finalist stage and placed among the top 5% of participants in the GreenGuard Hackathon.',
    },
    {
      company: 'Adobe',
      role: 'Adobe India Hackathon Participant',
      duration: '2025',
      description:
        'Participated in the Adobe India Hackathon as a member of Team Recursion Rebels.',
    },
  ];

  return (
    <section id="work-experience" className="animate-fadeIn">
      <h2 className="text-2xl font-semibold mb-4 border-b-2 border-blue-600 pb-1">
        Work Experience & Hackathons
      </h2>

      <ul className="space-y-4">
        {experiences.map(({ company, role, duration, description }) => (
          <li
            key={`${role}-${company}`}
            className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow"
          >
            <h3 className="font-bold text-lg">
              {role} - {company}
            </h3>

            <p className="italic text-sm text-gray-600 dark:text-gray-400">
              {duration}
            </p>

            <p>{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WorkExperience;
