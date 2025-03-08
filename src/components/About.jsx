import React from "react";
import gambar from "../assets/profile.png";
import "./about.css";

const About = () => {
    return (
        <section id="about">
            <div className="about bg-base-200 py-10">
                <div className="about-content flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between lg:px-20">
                    <img src={gambar} alt="" className="img-about max-w-sm mx-auto" />
                    <div className="text-left lg:w-2/3 px-5">
                        <h1 className="text-6xl text-center mb-10 text-primary font-bold">
                            Who Am I
                        </h1>
                        <p className="text-xl mb-5">
                            I am a <span className="font-bold text-primary">Junior Data Analyst</span> who is
                            passionate about data and technology. I am a tech
                            enthusiast who loves to explore new things. I am a highly motivated and hardworking
                            individual who is always eager to learn new things.
                            I am a team player who is always ready to
                            collaborate with others to get the job done.
                        </p>
                        <p className="text-xl">
                            I have a strong analytical and problem-solving
                            skills. I have a good understanding of data analysis
                            and data visualization. I have experience working
                            with various data analysis tools such as Python,
                            SQL, and Tableau. I have a good understanding of
                            statistical analysis and machine learning. I am
                            always looking for new challenges and opportunities
                            to grow and improve my skills.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
