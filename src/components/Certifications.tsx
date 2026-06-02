function Certifications() {
    const certifications = [
        "Machine Learning with Python Professional Certificate",
        "Full Stack Web Development Internship Training Program",
    ];

    return (
        <section
            id="certifications"
            className="min-h-screen px-6 py-20"
        >
            <h2 className="text-4xl font-bold text-center mb-16">
                Certifications
            </h2>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                    <div
                        key={index}
                        className="bg-white/5 border border-white/10 rounded-xl p-6"
                    >
                        📜 {cert}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Certifications;