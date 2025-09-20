import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Hack 24',
      issuer: 'IIIT Delhi',
      year: '2024',
    },
    {
      title: 'Hack IIT Kanpur',
      issuer: 'IIT Kanpur',
      year: '2024',
    },
  ];

  const certificateImages = [
    {
      title: 'Hack24 Certificate',
      image: '/hack24.png',
      downloadName: 'hack24-certificate.png',
    },
    {
      title: 'IIT Certificate',
      image: '/ceritificate_iit.png',
      downloadName: 'iit-certificate.png',
    },
    {
      title: 'Adobe Certificate',
      image: '/adobe_cirtificate_page-0001.jpg', // ✅ added Adobe certificate
      downloadName: 'adobe-certificate.jpg',
    },
  ];

  return (
    <section id="certifications" className="animate-fadeIn">
      <h2 className="text-2xl font-semibold mb-4 border-b-2 border-blue-600 pb-1">Certifications</h2>
      
      {/* Text-based certifications */}
      <ul className="space-y-4 mb-8">
        {certifications.map(({ title, issuer, year }) => (
          <li key={title} className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow">
            <h3 className="font-bold text-lg">{title}</h3>
            <p>{issuer}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{year}</p>
          </li>
        ))}
      </ul>

      {/* Certificate Images Section */}
      <h3 className="text-xl font-semibold mb-4">Certificate Gallery</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificateImages.map((cert) => (
          <div key={cert.title} className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow">
            <h4 className="font-bold text-lg mb-2">{cert.title}</h4>
            <div className="relative group">
              <img 
                src={cert.image} 
                alt={cert.title}
                className="w-full h-64 object-contain rounded border border-gray-300 dark:border-gray-600"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center rounded">
                <a
                  href={cert.image}
                  download={cert.downloadName}
                  className="opacity-0 group-hover:opacity-100 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-opacity duration-300"
                >
                  Download Certificate
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
