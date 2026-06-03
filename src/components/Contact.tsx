import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
    FaEnvelope,
    FaPhone,
    FaGithub,
    FaLinkedin,
    FaInstagram,
} from "react-icons/fa";

function Contact() {
    const form = useRef<HTMLFormElement>(null);

    const [loading, setLoading] = useState(false);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.current) return;

        setLoading(true);

        emailjs
            .sendForm(
                "service_hmychlf",
                "template_zregtqc",
                form.current,
                "GyIYdrqtyIlhRXjnU"
            )
            .then(
                () => {
                    alert("Message sent successfully!");
                    form.current?.reset();
                    setLoading(false);
                },
                (error) => {
                    console.log(error);
                    alert("Failed to send message.");
                    setLoading(false);
                }
            );
    };

    return (
        <section
            id="contact"
            className="pt-0 pb-16 px-6 scroll-mt-24"
        >
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4">
                        Contact Me
                    </h2>

                    <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        Let's connect and discuss opportunities in Software Development,
                        Artificial Intelligence, Machine Learning, and innovative projects.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">

                    {/* Contact Info */}
                    <div className="space-y-5">

                        <a
                            href="mailto:akshay02072005@gmail.com"
                            className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/10 hover:border-cyan-400 transition-all duration-300"
                        >
                            <FaEnvelope className="text-cyan-400 text-xl" />
                            <span>akshay02072005@gmail.com</span>
                        </a>

                        <a
                            href="tel:+919686606689"
                            className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/10 hover:border-cyan-400 transition-all duration-300"
                        >
                            <FaPhone className="text-cyan-400 text-xl" />
                            <span>+91 9686606689</span>
                        </a>

                        <a
                            href="https://github.com/Akshay001-A"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/10 hover:border-cyan-400 transition-all duration-300 hover:translate-x-2"
                        >
                            <FaGithub className="text-cyan-400 text-xl" />
                            <span>GitHub Profile</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/akshayofficial0207/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/10 hover:border-cyan-400 transition-all duration-300 hover:translate-x-2"
                        >
                            <FaLinkedin className="text-cyan-400 text-xl" />
                            <span>LinkedIn Profile</span>
                        </a>

                        <a
                            href="https://www.instagram.com/akshay_authentic"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/10 hover:border-cyan-400 transition-all duration-300 hover:translate-x-2"
                        >
                            <FaInstagram className="text-cyan-400 text-xl" />
                            <span>@akshay_authentic</span>
                        </a>

                    </div>

                    {/* Contact Form */}
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="space-y-5"
                    >

                        <input
                            type="text"
                            name="from_name"
                            required
                            placeholder="Your Name"
                            className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:border-cyan-400 outline-none"
                        />

                        <input
                            type="email"
                            name="from_email"
                            required
                            placeholder="Your Email"
                            className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:border-cyan-400 outline-none"
                        />

                        <textarea
                            rows={6}
                            name="message"
                            required
                            placeholder="Your Message"
                            className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:border-cyan-400 outline-none"
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="
                bg-cyan-500
                hover:bg-cyan-400
                text-black
                font-semibold
                px-8
                py-4
                rounded-2xl
                transition-all
                duration-300
                hover:scale-105
              "
                        >
                            {loading ? "Sending..." : "Send Message →"}
                        </button>

                    </form>

                </div>
            </div>
        </section>
    );
}

export default Contact;