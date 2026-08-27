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
import {
  FaTrophy,
  FaExternalLinkAlt,
  FaCode,
} from 'react-icons/fa';

const Hackathons = () => {
  const hackathons = [
    {
      name: 'Hack 24',
      organizer: 'IIIT Delhi',
      date: 'August 24, 2024',
      achievement: '6th Rank',
      description:
        'Participated in Hack 24 at IIIT Delhi and secured 6th rank among participating teams.',
    },

    {
      name: 'Drone4S Hackathon',
      organizer: 'IIT Roorkee',
      date: 'October 12, 2024',
      achievement: 'Participant',
      description:
        'Participated in the Drone4S Hackathon at IIT Roorkee, focusing on technical problem-solving and innovation.',
    },

    {
      name: 'Cybersecurity Hackathon – HACK IITK',
      organizer: 'IIT Kanpur',
      date: 'February 15–18, 2025',
      achievement: 'Cybersecurity Solution Track',
      description:
        'Participated in the Cybersecurity Hackathon at IIT Kanpur in the Cybersecurity Solution Track.',
    },

    {
      name: 'GreenGuard Hackathon',
      organizer: 'IIT Roorkee',
      date: '2024',
      achievement: 'Finalist – Top 5%',
      description:
        'Reached the finalist stage, placing among the top 5% of participants in the GreenGuard Hackathon.',
    },

    {
      name: 'Adobe India Hackathon 2025',
      organizer: 'Adobe',
      date: '2025',
      achievement: 'Participant – Team Recursion Rebels',
      description:
        'Participated in the Adobe India Hackathon as a member of Team Recursion Rebels.',
    },
  ];

  return (
    <section id="hackathons" className="animate-fadeIn">
      <h2 className="text-2xl font-semibold mb-6 border-b-2 border-primary pb-1">
        Hackathons & Competitions
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hackathons.map((hackathon) => (
          <div
            key={hackathon.name}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-2xl hover:-translate-y-1 transition duration-300 border border-transparent hover:border-primary/40"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <h3 className="font-bold text-xl text-primary">
                  {hackathon.name}
                </h3>

                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-1">
                  {hackathon.organizer}
                </p>
              </div>

              <FaTrophy className="text-xl text-primary flex-shrink-0" />
            </div>

            {/* Date */}
            <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-3">
              {hackathon.date}
            </p>

            {/* Achievement */}
            <div className="flex items-center gap-2 mb-4">
              <FaCode className="text-primary text-sm" />

              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                {hackathon.achievement}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {hackathon.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hackathons;
