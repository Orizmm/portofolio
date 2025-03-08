import React, { useState, useEffect } from "react";

const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`navbar bg-base-100 shadow-sm lg:px-20 lg:py-3 sticky top-0 z-50 ${
                scrolling
                    ? "backdrop-blur-md bg-white/10 shadow-md"
                    : "bg-transparent"
            }`}
        >
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {" "}
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />{" "}
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm text-xl dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        <li>
                            <a href="#hero">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                    </ul>
                </div>
                <a
                    href="#"
                    className="text-4xl font-bold"
                    style={{ color: "#FFA500" }}
                >
                    Orizm_
                </a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="text-xl flex items-center mx-3 gap-8">
                    <li>
                        <a
                            href="#hero"
                            className="relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-1 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className="relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-1 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                            style={{ textDecoration: "none" }}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className="relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-1 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a className="btn text-xl text-neutral transition-colors duration-300 bg-[#FFA500] border-none hover:bg-primary hover:text-white">
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
