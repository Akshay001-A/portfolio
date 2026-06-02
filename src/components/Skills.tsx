function Skills() {
  const skills = [
    "Java",
    "Python",
    "JavaScript",
    "C",
    "C++",
    "React.js",
    "Node.js",
    "Express.js",
    "Flask",
    "MongoDB",
    "MySQL",
    "TensorFlow",
    "PyTorch",
    "Docker",
    "Git",
    "REST APIs",
  ];

  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-20"
    >
      <h2 className="text-4xl font-bold text-center mb-16">
        Skills
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition"
          >
            {skill}
          </div>
        ))}

      </div>
    </section>
  );
}

export default Skills;