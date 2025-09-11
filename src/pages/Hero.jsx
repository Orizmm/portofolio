import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import gambar from "../assets/img/profile/pp home.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Hero = () => {
    const [text] = useTypewriter({
        words: [
            "Data Analyst",
            "Data Scientist",
            "ML Engineer",
            "Data Enthusiast",
            "Problem Solver",
        ],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,
    });

    return (
        <>
            <Navbar />
            <section id="hero">
                <div className="hero hero-section relative flex items-center justify-center min-h-screen">
                    <div className="hero-content flex flex-col lg:flex-row-reverse lg:items-center lg:justify-between lg:px-20 relative z-10">
                        <img
                            src={gambar}
                            className="img-hero max-w-sm relative z-10 mb-10"
                            alt="Profile"
                        />
                        <div className="text-hero text-center lg:text-left">
                            <h1 className="text-3xl lg:text-4xl lg:mb-3 font-bold ">
                                Hello!
                            </h1>
                            <h1 className="font-bold text-4xl lg:text-6xl py-6">
                                I'M{" "}
                                <span className="text-primary">
                                    Muhammad Al Ghorizmi Muttaqin
                                </span>
                            </h1>
                            <h1 className="text-3xl lg:text-4xl font-bold mt-6 bg-gradient-to-r from-primary to-[#FFA500]  bg-clip-text text-transparent">
                                <span className="job-hero">{text}</span>
                                <Cursor />
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Hero;
