import React from 'react';

const Education = () => {
  const educationList = [
    {
      institution: 'IILM UNIVERSITY',
      location: 'Greater Noida, Uttar Pradesh',
      degree: "Bachelor's in Computer Science",
      year: '2023 - 2027 (Expected)',
      gpa: '9.38 CGPA'
    },
    {
      institution: 'New Public Inter College',
      location: 'Lucknow, Uttar Pradesh',
      degree: 'Intermediate (12th)',
      year: '2020 - 2022',
      gpa: '78%'
    },
    {
      institution: 'New Public Inter College',
      location: 'Lucknow, Uttar Pradesh',
      degree: 'High School (10th)',
      year: '2018 - 2020',
      gpa: '90%'
    }
  ];

  return (
    <section id="education" className="animate-fadeIn">
      <h2 className="text-2xl font-semibold mb-4 border-b-2 border-primary pb-1">Education</h2>
      <div className="space-y-6">
        {educationList.map(({ institution, location, degree, year, gpa }) => (
          <div key={`${institution}-${degree}`} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="font-bold text-xl text-primary">{institution}</h3>
            <p className="text-gray-600 dark:text-gray-300">{location}</p>
            <div className="mt-2">
              <p className="font-medium">{degree}</p>
              <div className="flex justify-between items-center mt-1 text-sm text-gray-600 dark:text-gray-400">
                <span>{year}</span>
                <span className="font-semibold text-primary">{gpa}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
