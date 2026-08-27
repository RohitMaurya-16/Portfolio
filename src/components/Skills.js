// import React from 'react';
// import { FaCode, FaLaptopCode, FaRobot } from 'react-icons/fa';

// const Skills = () => {
//   const skillCategories = [
//     {
//       title: 'Programming Languages',
//       icon: <FaCode className="text-2xl" />,
//       skills: ['Python', 'Java', 'C', 'JavaScript']
//     },
//     {
//       title: 'Web Development',
//       icon: <FaLaptopCode className="text-2xl" />,
//       skills: ['React.js', 'Node.js', 'Tailwind CSS', 'MongoDB']
//     },
//     {
//       title: 'AI/ML Tools',
//       icon: <FaRobot className="text-2xl" />,
//       skills: ['OpenAI API', 'TensorFlow (Basic)', 'Scikit-Learn']
//     }
//   ];

//   return (
//     <section id="skills" className="animate-fadeIn">
//       <h2 className="text-2xl font-semibold mb-6 border-b-2 border-primary pb-1">Technical Skills</h2>
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {skillCategories.map((category) => (
//           <div key={category.title} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
//             <div className="flex items-center gap-3 mb-4 text-primary">
//               {category.icon}
//               <h3 className="font-bold text-lg">{category.title}</h3>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {category.skills.map((skill) => (
//                 <span
//                   key={skill}
//                   className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium hover:bg-primary/20 transition"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>

import React from 'react';
import {
  FaCode,
  FaLaptopCode,
  FaRobot,
  FaDatabase,
  FaTools,
  FaBrain,
} from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <FaCode className="text-2xl" />,
      skills: ['Java', 'JavaScript', 'Python', 'C', 'SQL'],
    },
    {
      title: 'Frontend Development',
      icon: <FaLaptopCode className="text-2xl" />,
      skills: ['React.js', 'HTML', 'CSS'],
    },
    {
      title: 'Backend Development',
      icon: <FaCode className="text-2xl" />,
      skills: ['Node.js', 'Express.js', 'Flask', 'REST APIs', 'API Integration'],
    },
    {
      title: 'Databases',
      icon: <FaDatabase className="text-2xl" />,
      skills: ['Supabase', 'PostgreSQL', 'MongoDB'],
    },
    {
      title: 'AI & Machine Learning',
      icon: <FaRobot className="text-2xl" />,
      skills: ['Machine Learning', 'Scikit-learn'],
    },
    {
      title: 'Tools & Technologies',
      icon: <FaTools className="text-2xl" />,
      skills: ['Git', 'GitHub', 'VS Code', 'Google Colab'],
    },
    {
      title: 'Computer Science',
      icon: <FaBrain className="text-2xl" />,
      skills: [
        'Data Structures & Algorithms',
        'OOP',
        'DBMS',
        'Operating Systems',
      ],
    },
  ];

  return (
    <section id="skills" className="animate-fadeIn">
      <h2 className="text-2xl font-semibold mb-6 border-b-2 border-primary pb-1">
        Technical Skills
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 
                       hover:shadow-xl hover:-translate-y-1 
                       transition duration-300 
                       border border-transparent hover:border-primary/30"
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-4 text-primary">
              {category.icon}

              <h3 className="font-bold text-lg">
                {category.title}
              </h3>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-primary/10 text-primary px-3 py-1.5 
                             rounded-full text-sm font-medium 
                             hover:bg-primary hover:text-white 
                             transition duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
//   );
// };

// export default Skills;
