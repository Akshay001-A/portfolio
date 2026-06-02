import { motion } from "framer-motion";

function Education() {
  const education = [
    {
      year: "2023 - 2027",
      title: "B.E Information Science & Engineering",
      institute: "M.S. Ramaiah Institute of Technology",
      score: "CGPA: 8.76",
    },
    {
      year: "2021 - 2023",
      title: "Pre-University (PCMB)",
      institute: "VIDYANIDHI IND PU COLLEGE",
      score: "93.5%",
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen px-6 py-20"
    >
      <h2 className="text-4xl font-bold text-center mb-16">
        Education
      </h2>

      <div className="max-w-4xl mx-auto">
        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10"
          >
            <h3 className="text-xl font-semibold">
              {item.title}
            </h3>

            <p className="text-cyan-400">
              {item.year}
            </p>

            <p className="text-gray-300">
              {item.institute}
            </p>

            <p className="mt-2 font-semibold">
              {item.score}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;