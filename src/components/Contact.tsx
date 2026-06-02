import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
    return (
        <section
            id="contact"
            className="min-h-screen px-6 py-20"
        >
            <h2 className="text-4xl font-bold text-center mb-16">
                Contact Me
            </h2>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">

                <div className="space-y-6">

                    <div className="bg-white/5 p-5 rounded-xl">
                        <FaEnvelope className="inline mr-3 text-cyan-400" />
                        akshay02072005@gmail.com
                    </div>

                    <div className="bg-white/5 p-5 rounded-xl">
                        <FaPhone className="inline mr-3 text-cyan-400" />
                        +91-9686606689
                    </div>

                    <div className="bg-white/5 p-5 rounded-xl">
                        <FaGithub className="inline mr-3 text-cyan-400" />
                        GitHub Profile
                    </div>

                    <div className="bg-white/5 p-5 rounded-xl">
                        <FaLinkedin className="inline mr-3 text-cyan-400" />
                        LinkedIn Profile
                    </div>

                </div>

                <form className="space-y-4">

                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-4 rounded-lg bg-white/5 border border-white/10"
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-4 rounded-lg bg-white/5 border border-white/10"
                    />

                    <textarea
                        rows={5}
                        placeholder="Your Message"
                        className="w-full p-4 rounded-lg bg-white/5 border border-white/10"
                    />

                    <button
                        className="bg-cyan-500 px-6 py-3 rounded-lg"
                    >
                        Send Message
                    </button>

                </form>

            </div>
        </section>
    );
}

export default Contact;