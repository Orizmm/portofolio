import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const experiences = [
    {
        period: "Feb 2026 - Present",
        title: "Junior Data Analyst Intern (Vinix7)",
        details: [
            "Executed end-to-end data analysis workflow, including data collection (survey design & secondary data), cleaning, transformation, and exploratory data analysis (EDA) to uncover patterns and insights",
            "Processed and prepared datasets by handling missing values, outliers, and inconsistencies using Excel and spreadsheet techniques",
            "Developed interactive dashboards and data visualizations using Tableau and Looker Studio to support business monitoring and decision-making",
            "Applied SQL and basic statistical analysis, and leveraged AI tools to accelerate data exploration and deliver actionable insights through data storytelling",
        ],
    },
    {
        period: "Oct 2025 - Nov 2025",
        title: "Project-Based Virtual Intern : Kimia Farma Big Data Analytics x Rakamin Academy",
        details: [
            "Develop a comprehensive business performance review for PT Kimia Farma by analyzing data for the period 2020-2023",
            "Performing an end-to-end ETL (Extract, Transform, Load) process, starting from importing, cleaning, to loading 4 main datasets (transactions, inventory, branches, products) into the Google BigQuery platform",
            "Design and execute complex SQL queries to combine data, create calculated metrics (such as net sales & net profit), and implement business logic to produce one master analytical table",
            "Design and build an interactive performance analytics dashboard to visualize revenue trends, regional performance, and product analysis",
            "Identifying crucial business insights. Key outcomes of this analysis include identifying West Java as a core market, identifying operational improvement opportunities in high-performing branches, and formulating strategic recommendations for product cross-selling strategies to increase revenue",
        ],
    },
    {
        period: "Oct 2024 – Sep 2025",
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
