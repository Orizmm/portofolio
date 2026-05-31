import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Gambar_Stunting from "../assets/img/proyek/proyek-stunting.png"
import Gambar_CountryData from "../assets/img/proyek/country-data.png"
import Gambar_Sentimen from "../assets/img/proyek/sentimen_tipikor.png"
import Gambar_WO from "../assets/img/proyek/wo_performance.png"
import Gambar_KF from "../assets/img/proyek/kf_data_analytics.png"
import Gambar_statistik from "../assets/img/proyek/analisis_statistic.png"
import Gambar_RS from "../assets/img/proyek/rs_dashboard.png"
import Gambar_HR from "../assets/img/proyek/hr_attrition.png"
import Gambar_Hotel from "../assets/img/proyek/hotel_operational.png"

const Projects = () => {
    const projects = [
        {
            img: Gambar_Hotel,
            title: "Hotel Operational Dashboard for Vinix7",
            tools: "Python, Tableau",
            link: "https://github.com/Orizmm/hotel-operational-analysis",
            text: "This project involved building an interactive dashboard to analyze hotel operational performance. It explored guest stay patterns, payment method distribution, and booking trends. The analysis identified why direct web revenue was significantly lower than OTA bookings and provided actionable insights to improve direct booking strategies.",
        },
        {
            img: Gambar_HR,
            title: "HR Attrition Analysis",
            tools: "Python, Tableau",
            link: "https://github.com/Orizmm/hr-attrition-analysis",
            text: "This project focuses on analyzing employee attrition using a dataset that includes various features such as age, job role, department, salary, and work environment. The analysis involves data preprocessing, exploratory data analysis (EDA), and data visualization. The insights gained from this project can help organizations develop strategies to improve employee retention and create a more positive work environment.",
        },
        {
            img: Gambar_RS,
            title: "Hospital Operational Dashboard for Vinix7",
            tools: "Python, Google Looker Studio",
            link: "https://github.com/Orizmm/Hospital-Operational-Dashboard",
            text: "This project involved building an interactive dashboard to analyze hospital outpatient service performance. It explored patient visit trends, payment method distribution, and waiting time across different clinics. The analysis identified peak visit days, high dependency on BPJS payments, and critical bottlenecks in specific departments with long waiting times. The dashboard provides actionable insights to improve service efficiency, reduce queue times, and support data-driven operational decisions.",
        },
        {
            img: Gambar_statistik,
            title: "Campaign statistics analysis for Vinix7",
            tools: "Ipynb",
            link: "https://github.com/Orizmm/analisis-statistik-strategi-promosi",
            text: "This project focused on evaluating the effectiveness of marketing campaigns through statistical analysis. It compared two promotional strategies (20% discount vs cashback) using hypothesis testing and identified a significant difference in revenue performance. Additionally, regression analysis was applied to measure the impact of advertising spend on web traffic, revealing a strong positive relationship. The insights help businesses optimize promotional strategies and allocate marketing budgets more effectively.",
        },
        {
            img: Gambar_KF,
            title: "Project Big Data Analytics Kimia Farma",
            tools: "Google Looker Studio",
            link: "https://github.com/Orizmm/rakamin-kf-BDA",
            text: "This project involved creating a comprehensive dashboard using Google Looker Studio to visualize key performance indicators (KPIs) for Kimia Farma's business operations. The dashboard integrates data from various sources, providing insights into sales performance, customer behavior, and operational efficiency. By leveraging Looker Studio's powerful visualization capabilities, stakeholders can easily monitor trends, identify areas for improvement, and make data-driven decisions to enhance business outcomes.",
        },
        {
            img: Gambar_Stunting,
            title: "Stunted Detection",
            tools: "Ipynb, Flask",
            link: "https://github.com/Orizmm/klasifikasi_stunting",
            text: "I built a stunted detection model using a dataset of children’s growth indicators, including weight, height, and age, with the goal of predicting whether a child is stunted or not using KNN, SVM, Random Forest, and XGBoost. After performing data preprocessing such as handling missing values, outlier detection, feature scaling, and addressing data imbalance, I tested several models using cross-validation. XGBoost was selected as the best-performing model. On the test dataset, the XGBoost classifier achieved an accuracy of 99.23%, precision of 91.67%, recall of 99.57%, and F1-score of 94.79%. These results demonstrate that the model performs excellently in classifying children into stunted and non-stunted categories, making it a reliable tool for early detection to support health practitioners and policymakers in addressing childhood stunting.",
        },
        {
            img: Gambar_WO,
            title: "Work Order Performance Analysis",
            tools: "Python, Power BI",
            link: "https://github.com/Orizmm/work-order-analysis",
            text: "I created an interactive Power BI dashboard to analyze work order performance using a dataset that includes work orders, labor hours, parts cost, lead time, services, and payment methods. The dashboard provides insights into total work orders (858), total labor hours (660.25), average lead time (28.02 days), and trends over time. It also highlights technician performance, identifying top contributors by completed work orders, average labor hours, and parts cost usage. In addition, warranty usage is visualized across districts and services, while cost and payment analysis show the most common methods such as C.O.D. and account payments. This project helps stakeholders monitor efficiency, cost allocation, and technician productivity to support better decision-making in work order management.",
        },
        {
            img: Gambar_CountryData,
            title: "Country Data Analysis",
            tools: "Power BI",
            link: "https://github.com/Orizmm/data-countries-analysis",
            text: "I built a Power BI dashboard to explore global development indicators covering socio-economic and demographic aspects such as GDP per capita, income, life expectancy, fertility rates, child mortality, trade, and inflation. The visualization highlights top-performing countries in terms of GDP per capita, income, and life expectancy, as well as those with the lowest child mortality and fertility rates. It also illustrates the relationship between life expectancy and child mortality, and compares economic performance across nations through imports, exports, and total trade. Additionally, the dashboard provides insights into inflation disparities between countries, including extreme cases like Venezuela and Nigeria. This project demonstrates how Power BI can reveal global development patterns and disparities, making complex data more accessible and actionable.",
        },
        {
            img: Gambar_Sentimen,
            title: "NLP | Deteksi Sentimen Positif Negatif Komentar Tiktok tentang UU Tipikor",
            tools: "Ipynb, TF-IDF",
            link: "",
            text: "This project focuses on sentiment analysis of TikTok comments related to the Indonesian Anti-Corruption Law (UU Tipikor). The approach uses TF-IDF to extract textual features and Support Vector Machine (SVM) as the classification algorithm. The comments are first preprocessed through case folding, tokenization, stopword removal, and stemming. After that, TF-IDF is applied to represent the text numerically. Finally, SVM is trained to classify the comments into positive or negative sentiments. The evaluation results indicate that the model performs effectively in identifying public sentiment from Indonesian TikTok comments regarding UU Tipikor.",
        },
    ];

    return (
        <>
            <Navbar />

            {/* PPT */}
            <section id="presentation" className="bg-base-100 pt-10 pb-5">
                <div className="max-w-7xl mx-auto px-3 flex flex-col items-center">
                    <h2 className="text-4xl text-center mb-2 text-primary font-bold">
                        Project Presentation
                    </h2>
                    <p className="mb-6 text-center">
                        Watch the presentation of my projects
                    </p>

                    {/* Kotak Kontainer PPT */}
                    <div className="w-full bg-[#1e1e24] p-4 md:p-6 rounded-2xl border border-[#FFA500] shadow-lg flex flex-col items-center">
                        {/* Wrapper iframe yang akan dijadikan fullscreen */}
                        <div
                            className="w-full aspect-video bg-black rounded-lg overflow-hidden flex justify-center items-center relative"
                        >
                            {/* Ganti URL src di bawah dengan link embed dari Google Slides/Canva */}
                            <iframe
                                src="https://www.canva.com/design/DAHLMj_vm_Q/dotZ1Z4PJEpospBpG9bV0g/view?embed"
                                frameBorder="0"
                                width="100%"
                                height="100%"
                                allowFullScreen={true}
                                title="Project Presentation"
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project */}
            <section id="projects">
                <div class="max-w-7xl mx-auto flex flex-col items-center justify-between py-10 bg-base-100">
                    <h2 class="text-4xl text-center mb-1 text-primary font-bold">
                        Past Project Experience
                    </h2>
                    <p className="mb-10">
                        Explore the projects I've worked on so far
                    </p>

                    <div class="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-3 xl:grid-cols-3 xl:gap-3 2xl:gap-5 mx-3">
                        {projects.map((prj, index) => (
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
                                    <p className="w-full text-left text-[10px] text-white md:text-xs lg:text-sm">
                                        {prj.text}
                                    </p>
                                    <p className="w-full mt-4 text-left text-[10px] text-primary md:text-xs lg:text-sm">
                                        {prj.tools}
                                    </p>
                                    <div className="w-full flex justify-end mt-4">
                                        <a href={prj.link} target="_blank">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                fill="currentColor"
                                                className="inline-block hover:text-primary"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Projects;
