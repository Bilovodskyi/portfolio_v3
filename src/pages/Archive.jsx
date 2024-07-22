import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { archive } from "../utils/data";
import { useMediaQuery } from "usehooks-ts";
import { TfiArrowTopRight } from "react-icons/tfi";

const Archive = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    return (
        <section className="p-8 max-[768px]:pt-12 md:p-32 pb-0 z-10 w-full">
            <div className="group flex text-teal-300 items-center gap-1 mb-2 max-[768px]:text-[1.1 rem]">
                <GoArrowLeft className="ml-2 group-hover:ml-0" />
                <a href="/" className="ml-0 group-hover:ml-2">
                    Bohdan Bilovodskyi
                </a>
            </div>
            <h1 className="text-5xl font-bold text-white mb-12">
                All Projects
            </h1>
            <table className="table-auto w-full">
                <thead>
                    <tr className="max-[768px]:border-b-[.7px] max-[768px]:border-[#E2E8F0]/10 text-white text-[.9rem]">
                        <th className="text-start">Year</th>
                        <th className="text-start">Project</th>
                        <th className="text-start max-[768px]:hidden">
                            Build with
                        </th>
                        <th className="text-start max-[768px]:hidden">Link</th>
                    </tr>
                </thead>
                <tbody>
                    {archive.map((project) => (
                        <tr
                            key={project.id}
                            className="max-[768px]:border-b-[.7px] max-[768px]:border-[#E2E8F0]/10">
                            <td className="text-[.9rem]">{project.year}</td>
                            {isMobile ? (
                                <td className="text-white flex items-center gap-1">
                                    <a href={project.link} target="_blank">
                                        {project.name}
                                    </a>
                                    <TfiArrowTopRight className="text-[.8rem]" />
                                </td>
                            ) : (
                                <td className="text-white">{project.name}</td>
                            )}
                            <td className="max-[768px]:hidden">
                                <ul className="flex gap-3 flex-wrap">
                                    {project.techStack.map((tech) => (
                                        <li key={tech} className="tech">
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </td>
                            <td className="max-[768px]:hidden">
                                <a
                                    href={project.link}
                                    className="hover:text-teal-300 text-[0.9rem]"
                                    target="_blank">
                                    {project.link}
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default Archive;
