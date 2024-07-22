import React from "react";
import { GoArrowRight } from "react-icons/go";
import { IoIosLink } from "react-icons/io";

const Projects = () => {
    return (
        <section id="projects" className="section-class">
            <h1 className="md:hidden sticky top-0 text-white text-[1rem] bg-slate-900 py-5 opacity-90 z-20">
                PROJECTS
            </h1>
            <ul className="group/list flex flex-col gap-12">
                <li className="list-item group">
                    <div className="effect-on-hover"></div>
                    <div className="flex flex-col gap-2 sm:order-2 z-10">
                        <h1 className="text-slate-200 group-hover:text-teal-300">
                            Stocks diary
                        </h1>
                        <p className="text-[.9rem] mb-3">
                            Full-stack Stocks diary built with React and
                            TypeScript for front-end and Express.js for
                            back-end. Mongoose for MongoDB database management.
                            Created a modern landing page with animations using
                            Framer Motion. Features include a nested
                            file-document structure, file and document editing
                            and deletion, charts and statistics, and custom
                            authentication with JWT and cookies.
                        </p>
                        <div className="flex gap-12 mb-3">
                            <div className="text-[0.9rem] flex gap-1 items-center hover:text-teal-300">
                                <IoIosLink />
                                <a
                                    href="https://stocks-diary.onrender.com"
                                    target="_blank">
                                    Website
                                </a>
                            </div>
                            {/* <div className="text-[0.9rem] flex gap-1 items-center hover:text-teal-300">
                                <IoIosLink />
                                <a href="">Video</a>
                            </div> */}
                        </div>
                        <ul className="flex gap-3 flex-wrap max-[768px]:mb-4">
                            <li className="tech">React</li>
                            <li className="tech">Tailwind CSS</li>
                            <li className="tech">Express.js</li>
                            <li className="tech">Mongoose</li>
                            <li className="tech">MongoDB</li>
                            <li className="tech">JWT</li>
                        </ul>
                    </div>
                    <div className="flex-shrink-0 sm:order-1 z-10">
                        <img
                            src="./img-1.png"
                            alt="project image"
                            className="project-img"
                        />
                    </div>
                </li>
                <li className="list-item group">
                    <div className="effect-on-hover"></div>
                    <div className="flex flex-col gap-3 z-10 sm:order-2">
                        <h1 className="text-slate-200 group-hover:text-teal-300 duration-150 transition-all">
                            Twitter clone
                        </h1>
                        <p className="text-[.9rem] mb-3">
                            Full-stack Twitter clone built with Next.js for both
                            front-end and back-end. Implemented TypeScript for
                            type safety, Prisma for PostgreSQL database
                            management, and Next Auth for authentication.
                            Utilized tRPC for client-server communication.
                            Features include a complex nested comments system,
                            likes, and subscriptions.
                        </p>
                        <div className="flex gap-12 mb-3">
                            <div className="text-[0.9rem] flex gap-1 items-center hover:text-teal-300">
                                <IoIosLink />
                                <a
                                    href="https://twitter-clone-lyart-kappa-79.vercel.app"
                                    target="_blank">
                                    Website
                                </a>
                            </div>
                            {/* <div className="text-[0.9rem] flex gap-1 items-center hover:text-teal-300">
                                <IoIosLink />
                                <a href="">Video</a>
                            </div> */}
                        </div>
                        <ul className="flex gap-3 flex-wrap max-[768px]:mb-4">
                            <li className="tech">Next.js</li>

                            <li className="tech">Tailwind CSS</li>
                            <li className="tech">tRPC</li>
                            <li className="tech">Prisma</li>
                            <li className="tech">Postgresql</li>
                        </ul>
                    </div>
                    <div className="flex-shrink-0 sm:order-1 z-10">
                        <img
                            src="./img-2.png"
                            alt="project image"
                            className="project-img"
                        />
                    </div>
                </li>
                <li className="list-item group">
                    <div className="effect-on-hover"></div>
                    <div className="flex flex-col gap-3 z-10 sm:order-2">
                        <h1 className="text-slate-200 group-hover:text-teal-300 duration-150 transition-all">
                            Apple clone
                        </h1>
                        <p className="text-[.9rem] mb-3">
                            Apple clone website. That has custom animations with
                            scroll triggers, staggers, timeline and more created
                            using Gsap. It also includes animated 3D models with
                            different configurations, light and viewports
                            implemented using Three.js. As well as complite
                            responsivness.
                        </p>
                        <div className="mb-3">
                            <div className="text-[0.9rem] flex gap-1 items-center hover:text-teal-300">
                                <IoIosLink />
                                <a
                                    href="https://apple-clone-one-beta.vercel.app"
                                    target="_blank">
                                    Website
                                </a>
                            </div>
                        </div>
                        <ul className="flex gap-3 flex-wrap max-[768px]:mb-4">
                            <li className="tech">React</li>

                            <li className="tech">Tailwind CSS</li>
                            <li className="tech">Three.js</li>
                            <li className="tech">GSAP</li>
                        </ul>
                    </div>
                    <div className="flex-shrink-0 sm:order-1 z-10">
                        <img
                            src="./img-3.png"
                            alt="project image"
                            className="project-img"
                        />
                    </div>
                </li>
            </ul>
            <div className="group flex items-center gap-2 mt-14 mb-[1px] hover:mb-0">
                <a
                    href="/archive"
                    className="text-white group-hover:border-b-[1px] w-fit border-teal-300 group-hover:mr-2 z-20">
                    View full project archive
                </a>
                <GoArrowRight className="text-white group-hover:mb-[1px]" />
            </div>
        </section>
    );
};

export default Projects;
