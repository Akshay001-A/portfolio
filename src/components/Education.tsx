import { motion } from "framer-motion";
import ramaiahLogo from "../assets/Ramaiah_Logo.png";
import vidyanidhiLogo from "../assets/vidyanidhi_logo.png";

function Education() {
  const education = [
    {
      year: "2023 - 2027",
      title: "B.E Information Science & Engineering",
      institute: "M.S. Ramaiah Institute of Technology",
      location: "Bengaluru, Karnataka",
      score: "CGPA: 8.76",
      status: "Current",
      logo: ramaiahLogo,
      description:
        "Currently pursuing B.E in Information Science & Engineering at M.S. Ramaiah Institute of Technology with a CGPA of 8.76. Actively building expertise in Full Stack Development, Artificial Intelligence, Machine Learning, and Software Engineering.",
      subjects: [
        "Data Structures",
        "DBMS",
        "Machine Learning",
        "Web Development",
      ],
    },
    {
      year: "2021 - 2023",
      title: "Pre-University (PCMB)",
      institute: "VIDYANIDHI IND PU COLLEGE",
      location: "Bengaluru, Karnataka",
      score: "93.5%",
      status: "Completed",
      logo: vidyanidhiLogo,
      description:
        "Completed Pre-University (PCMB) at Vidyanidhi IND PU College with 93.5%, establishing a strong foundation in Mathematics, Physics, Chemistry, and Computer Science.",
      subjects: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "Biology",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen px-6 py-24"
    >
      {/* Heading */}

      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold mb-3">
          Education
        </h2>

        <p className="text-gray-400">
          My academic journey and achievements
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-10">

        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.02,
              y: -5,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              bg-white/5
              border
              border-white/10
              rounded-3xl
              p-8
              backdrop-blur-md
              hover:border-cyan-400
              hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
              transition-all
              duration-300
            "
          >
            <div className="flex flex-col md:flex-row gap-6">

              {/* Logo */}

              <div className="flex justify-center md:justify-start">
                <img
                  src={item.logo}
                  alt={item.institute}
                  className="
                    w-24
                    h-24
                    object-contain
                    rounded-xl
                    bg-white
                    p-2
                  "
                />
              </div>

              {/* Content */}

              <div className="flex-1">

                <div className="flex flex-wrap items-center gap-3 mb-3">

                  <p className="text-cyan-400 font-medium">
                    {item.year}
                  </p>

                  <span
                    className={`
                      px-3 py-1 rounded-full text-xs font-medium
                      ${item.status === "Current"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-blue-500/20 text-blue-400"
                      }
                    `}
                  >
                    {item.status}
                  </span>

                </div>

                <h3 className="text-2xl font-bold mb-2">
                  {item.title}
                </h3>

                <p className="text-lg text-gray-300">
                  {item.institute}
                </p>

                <p className="text-gray-500 mb-4">
                  📍 {item.location}
                </p>

                <p className="font-semibold text-cyan-400 text-lg">
                  {item.score}
                </p>

                <p className="mt-4 text-gray-300 leading-7">
                  {item.description}
                </p>

                {/* Subjects */}

                <div className="flex flex-wrap gap-2 mt-5">
                  {item.subjects.map((subject, idx) => (
                    <span
                      key={idx}
                      className="
                        px-3
                        py-1
                        rounded-full
                        bg-cyan-500/10
                        border
                        border-cyan-500/20
                        text-cyan-400
                        text-sm
                      "
                    >
                      {subject}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Education;
