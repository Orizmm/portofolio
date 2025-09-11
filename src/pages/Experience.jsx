import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const experiences = [
    {
        period: "Okt 2024 – Present",
        title: "Lead of Creative Media GDGoC Udinus",
        details: [
            "Led and managed 3 team members",
            "I implemented structured task divisions for make design for GDGoC Social Media",
            "Make and review every design and video before publication",
        ],
    },
    {
        period: "Sep 2024 – Jul 2025",
        title: "Head of Information and Communication Division",
        details: [
            "Managed 2 departments, namely information media and public relations",
            "Led and managed 16 team members",
            "Carry out 5 main work programs",
            "Review every design and video before publication",
            "Be a liaison between HMTI and external parties",
        ],
    },
    {
        period: "Sep 2023 – Jul 2024",
        title: "Head of Information Media Departement",
        details: [
            "Led and managed 7 team members",
            "I implemented structured task divisions for make design for HM-TI Social Media",
            "Make and review every design and video before publication",
        ],
    },
    {
        period: "Dec 2023 – Jan 2024",
        title: "Head of Information Technology Competition 2024",
        details: [
            "Led and managed 48 members and achieved outstanding results, including attracting 15 Web Developer teams and 36 LCC participants to participate in ITC 2024.",
            "By effectively motivating and guiding team members, I ensured alignment with our vision, mission, and activity goals, resulting in the successful realization of the event",
        ],
    },
    // Bisa tambahkan pengalaman lain di sini
];

const Experience = () => (
    <>
        <Navbar />
        <section id="experience" className="min-h-screen text-white py-12">
            <div className="max-w-6xl mx-auto px-4 space-y-6">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="bg-base-200 p-6 rounded-xl shadow-lg border border-gray-700"
                    >
                        <p className="text-sm text-gray-400 italic mb-2 flex items-center">
                            {exp.period}
                        </p>

                        <h3 className="text-lg text-primary font-bold">
                            {exp.title}{" "}
                        </h3>

                        <ul className="list-disc list-inside mt-3 space-y-1 text-white">
                            {exp.details.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
        <Footer />
    </>
);

export default Experience;
