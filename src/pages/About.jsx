import React from "react";
import gambar from "../assets/img/profile/profile.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sertif_nvidia from "../assets/img/sertif/sertif_nvidia.png";
import Sertif_ITbox_DA_Basic from "../assets/img/sertif/ITBox-Certificate_Data-Analyst-Level-Basic_alghorizmi.m.jpg";
import Sertif_ITbox_DA_Intermediate from "../assets/img/sertif/ITBox-Certificate_Data-Analyst-Level-Intermediate_alghorizmi.m.jpg";
import Sertif_IBM_dataAnalysis from "../assets/img/sertif/Coursera_data_analysis.png";
import Sertif_IBM_dataVisualization from "../assets/img/sertif/Coursera_data_visualization.png";
import Sertif_IBM_databases from "../assets/img/sertif/Coursera_databases.png";
import Sertif_KFxRakamin from "../assets/img/sertif/pbi-kf.png";

const About = () => {
    const skills = [
        "Python",
        "SQL",
        "Machine Learning",
        "Laravel",
        "Flask",
        "Bootstrap",
        "Data Visualization",
        "GIS",
    ];

    const tools = [
        "VS Code",
        "Colab",
        "Jupyter Notebook",
        "Git",
        "GitHub",
        "Tableau",
        "Power BI",
        "Excel",
        "Figma",
        "Canva",
    ];

    const sertif = [
        {
            img: Sertif_KFxRakamin,
            title: "Certificate of Achievement - Kimia Farma Big Data Analytics Project Based Internship Program",
            issued: "Nov 2025",
            link: "https://www.linkedin.com/in/orizm/details/certifications/1762178025908/single-media-viewer/?profileId=ACoAAE9jZfMBwYlii254EFUR3JYLJ7GS8VZmGvI",
        },
        {
            img: Sertif_IBM_databases,
            title: "Databases and SQL for Data Science with Python",
            issued: "Sep 2025",
            link: "https://coursera.org/verify/EVZZUYKA8JWB",
        },
        {
            img: Sertif_IBM_dataVisualization,
            title: "Data Visualization with Python",
            issued: "Sep 2025",
            link: "https://coursera.org/verify/ELYCARA5IBR6",
        },
        {
            img: Sertif_IBM_dataAnalysis,
            title: "Data Analysis with Python",
            issued: "Sep 2025",
            link: "https://coursera.org/verify/O07VW4YQ6H5Y",
        },
        {
            img: Sertif_nvidia,
            title: "Nvidia Getting Started with Deep Learning",
            issued: "Jun 2025",
            link: "https://learn.nvidia.com/certificates?id=fg08phCgTd6vo44pkpfq6g#",
        },
        {
            img: Sertif_ITbox_DA_Intermediate,
            title: "ITBox Data Analyst Level Intermediate",
            issued: "May 2025",
            link: "https://itbox.id/certificate-verifier/13EF9F35F-759D50B176-12D45529F",
        },
        {
            img: Sertif_ITbox_DA_Basic,
            title: "ITBox Data Analyst Level Basic",
            issued: "Apr 2025",
            link: "https://itbox.id/certificate-verifier/13EF9F35F-759D42CF24-12D45529F",
        },
    ];

    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto flex flex-col relative">
                <div class="mt-10 bg-base-200 px-5 py-5 md:px-12 md:py-10 text-left shadow-lg rounded-3xl text-amber-50 mx-3 mb-5">
                    <article data-page="about">
                        <header>
                            <div class="text-2xl font-bold text-primary mb-5 fadein-bot title-section flex items-center">
                                About Me &nbsp;
                                <div
                                    class="h-[1px] w-32 bg-primary md:w-96 aos-init aos-animate"
                                    data-aos="zoom-in-left"
                                    data-aos-duration="600"
                                ></div>
                            </div>
                        </header>
                        <section class="text-sm md:text-lg text-justify flex flex-col gap-4 md:flex-row md:gap-8 md:justify-center md:items-center">
                            <div class="flex justify-center md:w-7/12">
                                <img
                                    class="w-9/12 mb-3 fadein-up rounded-full border-4 border-primary md:mb-0"
                                    src={gambar}
                                    alt="Foto"
                                />
                            </div>
                            <div class="md:w-7/12">
                                <p class="mb-3 md:mb-7 fadein-left fadeins-1">
                                    Hello, my name is Muhammad Al Ghorizmi
                                    Muttaqin, a data enthusiast with a
                                    background in Information Technology
                                    Systems, specializing in research and
                                    spatial data analysis. I am a fresh graduate
                                    with hands-on experience gained through an
                                    internship and various project-based work in
                                    data analytics. During my internship, I
                                    worked on data processing, analysis, and
                                    visualization to support business
                                    decision-making, strengthening my practical
                                    skills in handling real-world datasets.
                                    Previously, I also had over one year of
                                    experience in course program management,
                                    which enhanced my project management and
                                    organizational abilities. My expertise
                                    includes research, analytical thinking, and
                                    data-driven problem solving, providing a
                                    strong foundation for roles as a data
                                    analyst or data scientist. I am proficient
                                    in spreadsheets, Python, SQL, business
                                    intelligence tools, and GIS for extracting
                                    insights from complex data. With a strong
                                    commitment to continuous learning, I
                                    actively keep up with the latest trends and
                                    methodologies in data analysis and aim to
                                    leverage data to support impactful and
                                    informed decision-making.
                                </p>
                            </div>
                        </section>

                        {/* Skills Section */}
                        <section className="mt-10">
                            <h2 className="text-xl md:text-2xl font-bold text-primary mb-5">
                                Skills
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-gray-800 text-white rounded-full text-sm md:text-base shadow-md hover:bg-primary hover:text-black transition"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </section>

                        {/* Tools Section */}
                        <section className="mt-10">
                            <h2 className="text-xl md:text-2xl font-bold text-primary mb-5">
                                Tools
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {tools.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-gray-800 text-white rounded-full text-sm md:text-base shadow-md hover:bg-primary hover:text-black transition"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </section>
                    </article>
                </div>

                {/* sertifikat */}
                <div className="mt-6 bg-base-200 px-5 py-5 md:px-12 md:py-10 text-left shadow-lg rounded-3xl text-amber-50 mx-3 mb-5">
                    <article data-page="about">
                        <h2 className="text-xl md:text-2xl font-bold text-primary mb-6 flex items-center">
                            Certificates &nbsp;
                            <div
                                className="h-[1px] w-32 bg-primary md:w-96 aos-init aos-animate"
                                data-aos="zoom-in-left"
                                data-aos-duration="600"
                            ></div>
                        </h2>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-3 xl:grid-cols-3 xl:gap-3 2xl:gap-5">
                            {sertif.map((prj, index) => (
                                <div className="item-card flex flex-col items-center gap-2 rounded border border-[#FFA500] rounded-2xl text-amber-50 md:gap-3 px-5 py-5 lg:px-5 shadow-sm md:hover:-translate-y-2 transition-transform duration-300">
                                    <div
                                        key={index}
                                        className="flex w-13 h-13 items-center justify-center p-0 h-full w-full lg:p-0"
                                    >
                                        <img
                                            src={prj.img}
                                            alt="{prj.title}"
                                            className="drop-shadow-xl rounded rounded-xl"
                                        />
                                    </div>
                                    <div className="w-full flex flex-col gap-2 items-start text-sm md:text-base lg:text-lg">
                                        <h2 className="title-text font-medium text-[#FFA500]">
                                            {prj.title}
                                        </h2>
                                        <p className="w-full text-left text-[10px] text-[#c1c1c1] md:text-xs lg:text-sm">
                                            {prj.issued}
                                        </p>
                                        <div className="w-full flex justify-end mt-4">
                                            <a href={prj.link} target="_blank">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="size-6 hover:text-primary"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </article>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default About;
