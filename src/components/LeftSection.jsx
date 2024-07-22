import React, { useEffect, useRef, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";

const LeftSection = () => {
    const [activeSection, setActiveSection] = useState("about");
    const sections = useRef([]);

    const handleScroll = () => {
        const pageYOffset = window.scrollY;
        let newActiveSection = null;

        sections.current.forEach((section) => {
            const sectionOffsetTop = section.offsetTop - 100;
            const sectionOffsetHeight = section.offsetHeight;
            if (
                pageYOffset >= sectionOffsetTop &&
                pageYOffset < sectionOffsetHeight + sectionOffsetTop
            ) {
                newActiveSection = section.id;
            }
        });
        setActiveSection(newActiveSection);
    };

    useEffect(() => {
        sections.current = document.querySelectorAll("section");
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="md:h-screen md:sticky top-0 md:w-1/2 max-[768px]:mt-6 p-8 md:p-32">
            <div className="flex flex-col gap-3">
                <h1 className="text-slate-200 text-3xl md:text-6xl font-semibold">
                    Bohdan Bilovodskyi
                </h1>
                <h2 className="text-slate-200 text-xl">Full-stack developer</h2>
                <p>
                    I build pixel-perfect, engaging, and accessible digital
                    experiences.
                </p>
            </div>
            <nav className="hidden mt-14 md:flex flex-col gap-4">
                <div>
                    <a
                        className={`navigation ${
                            activeSection === "about" && "active"
                        }`}
                        href="#about">
                        About me
                    </a>
                </div>
                <div>
                    <a
                        className={`navigation ${
                            activeSection === "skills" && "active"
                        }`}
                        href="#skills">
                        Skills
                    </a>
                </div>
                <div>
                    <a
                        className={`navigation ${
                            activeSection === "projects" && "active"
                        }`}
                        href="#projects">
                        Projects
                    </a>
                </div>
            </nav>
            <div className="mt-12 md:mt-40 flex gap-10 md:gap-6">
                <a
                    href="https://www.linkedin.com/in/bohdan-bilovodskyi-0437241b7/"
                    target="_blank">
                    <FaLinkedin className="text-[1.5rem] hover:text-slate-200 duration-300 transition-all cursor-pointer " />
                </a>
                <a href="https://github.com/Bilovodskyi" target="_blank">
                    <FaGithub className="text-[1.5rem] hover:text-slate-200 duration-300 transition-all cursor-pointer" />
                </a>
                <a href="Bohdan Bilovodskyi.docx" target="_blank" download>
                    <FaCloudDownloadAlt className="text-[1.5rem] hover:text-slate-200 duration-300 transition-all cursor-pointer" />
                </a>
            </div>
        </div>
    );
};

export default LeftSection;
