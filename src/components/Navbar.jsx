import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

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

    // fungsi cek apakah path sedang aktif
    const isActive = (path) => location.pathname === path;

    return (
        <div
            className={`bg-base-100 shadow-sm sticky top-0 z-50 ${
                scrolling
                    ? "backdrop-blur-md bg-black/30 shadow-md"
                    : "bg-transparent"
            }`}
        >
            <div className="navbar max-w-7xl mx-auto p-0 lg:py-3">
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
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm text-2xl gap-3 dropdown-content bg-base-100 z-50 mt-3 p-4 shadow w-screen left-0 top-9 rounded-none flex flex-col items-center text-center transition-all duration-300 ease-in-out"
                        >
                            <li>
                                <button
                                    type="button"
                                    onClick={() => navigate("/")}
                                    className="flex items-center"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-3 w-3 mr-2"
                                        fill="currentColor"
                                        viewBox="0 0 576 512"
                                    >
                                        <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                                    </svg>
                                    Home
                                </button>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    onClick={() => navigate("/about")}
                                    className="flex items-center"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-3 w-3 mr-2"
                                        fill="currentColor"
                                        viewBox="0 0 448 512"
                                    >
                                        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                                    </svg>
                                    About
                                </button>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    onClick={() => navigate("/projects")}
                                    className="flex items-center"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-3 w-3 mr-2"
                                        fill="currentColor"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M448 160l-128 0 0-32 128 0 0 32zM48 64C21.5 64 0 85.5 0 112l0 64c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48L48 64zM448 352l0 32-256 0 0-32 256 0zM48 288c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48L48 288z" />
                                    </svg>
                                    Projects
                                </button>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    onClick={() => navigate("/blog")}
                                    className="flex items-center"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-4 mr-2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                                        />
                                    </svg>
                                    Experiences
                                </button>
                            </li>
                        </ul>
                    </div>
                    <button
                        type="button"
                        onClick={() => navigate("/")}
                        className="text-4xl font-bold"
                        style={{ color: "#FFA500" }}
                    >
                        Orizm_
                    </button>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="text-xl flex items-center mx-3 gap-10 font-semibold">
                        {[
                            { label: "Home", path: "/" },
                            { label: "About", path: "/about" },
                            { label: "Projects", path: "/projects" },
                            { label: "Experiences", path: "/blog" },
                        ].map((item, idx) => (
                            <li key={idx}>
                                <button
                                    type="button"
                                    onClick={() => navigate(item.path)}
                                    className={`relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-1 after:bg-primary after:transition-all after:duration-300 ${
                                        isActive(item.path)
                                            ? "after:w-full text-primary"
                                            : "after:w-0 hover:after:w-full"
                                    }`}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <a
                        className="btn text-xl text-neutral transition-colors duration-300 bg-[#FFA500] border-none hover:bg-primary hover:text-white"
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                            />
                        </svg>
                        Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
