
const ParticleSystem = () => {
  const experiences = [
    {
      company: "Tech-Yard Hub",
      role: "Front-End Developer",
      duration: "March 2025 - Present",
      description: "Developing and optimizing user interfaces using React and Tailwind CSS. Working on a large dashboard with nested and dynamic routes."
    },
    {
      company: "Ideas & Concepts",
      role: "Full-Stack Intern (Node.js & React)",
      duration: "Currently",
      description: "Gaining hands-on experience in full-stack development using Node.js and React. Working on backend APIs and front-end interfaces."
    }
    , {
      company: "NCPC",
      role: "IT Support",
      duration: "2023 - 2024",
      description: "Provided technical support, troubleshooting hardware and software issues, and maintaining network infrastructure."
    }
  ];
  return (
    <section className="py-10 px-6 bg-gray-900 text-white">
      <div className=" container max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold border-b-2 border-teal-400 pb-2 mb-6">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="p-4 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-teal-400">{exp.company}</h3>
              <p className="text-lg text-gray-300">{exp.role}</p>
              <span className="text-sm text-gray-400">{exp.duration}</span>
              <p className="mt-2 text-gray-200">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParticleSystem;
