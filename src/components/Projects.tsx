import { motion } from "framer-motion";

function Projects() {
    const projects = [
        {
            title: "Deepfake Audio Detection",
            description:
                "AI-powered platform for detecting synthetic and AI-generated speech using ML models.",
            tech: ["Python", "Flask", "Scikit-Learn", "Librosa"],
            github: "#",
            demo: "#",
        },
        {
            title: "Potato Plant Disease Recognition",
            description:
                "Deep learning application for potato leaf disease detection with treatment recommendations.",
            tech: ["TensorFlow", "Flask", "MongoDB"],
            github: "#",
            demo: "#",
        },
        {
            title: "Shoe Mart",
            description:
                "AI-powered e-commerce platform with visual search and recommendation system.",
            tech: ["React", "Node.js", "MongoDB", "Gemini AI"],
            github: "#",
            demo: "#",
        },
    ];

    return (
        <section
            id="projects"
            className="min-h-screen px-6 py-20"
        >
            <h2 className="text-4xl font-bold text-center mb-16">
                Projects
            </h2>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        whileHover={{
                            scale: 1.05,
                        }}
                        className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md"
                    >
                        <div className="h-48 bg-slate-800 rounded-xl mb-5 flex items-center justify-center">
                            Project Image
                        </div>

                        <h3 className="text-2xl font-bold mb-3">
                            {project.title}
                        </h3>

                        <p className="text-gray-300 mb-4">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-5">
                            {project.tech.map((item, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-3">
                            <a
                                href={project.github}
                                className="bg-blue-600 px-4 py-2 rounded-lg"
                            >
                                GitHub
                            </a>

                            <a
                                href={project.demo}
                                className="border border-cyan-400 px-4 py-2 rounded-lg"
                            >
                                Live Demo
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Projects;