import React from "react";

const Skills = () => {
    return (
        <section id="skills" className="section-class">
            <h1 className="md:hidden sticky top-0 text-white text-[1rem] bg-slate-900 py-5 opacity-90">
                SKILLS
            </h1>
            <div className="max-[768px]:mb-4">
                <h1 className=" text-slate-200 mb-4">Programming Languages:</h1>
                <ul className="flex gap-3 flex-wrap">
                    <li className="tech">JavaScript</li>

                    <li className="tech">TypeScript</li>
                    <li className="tech">CSS</li>
                    <li className="tech">HTML</li>
                    <li className="tech">Python</li>
                </ul>
            </div>
            <div className="max-[768px]:mb-4">
                <h1 className=" text-slate-200 mb-4">
                    Libraries & Frameworks:
                </h1>
                <ul className="flex gap-3 flex-wrap">
                    <li className="tech">React</li>

                    <li className="tech">Next.js</li>
                    <li className="tech">Express.js</li>
                    <li className="tech">Django</li>
                    <li className="tech">Tailwind CSS</li>
                    <li className="tech">Framer Motion</li>
                    <li className="tech">Three.js</li>
                    <li className="tech">GSAP</li>
                </ul>
            </div>
            <div className="max-[768px]:mb-4">
                <h1 className=" text-slate-200 mb-4">Databases and ORM:</h1>
                <ul className="flex gap-3 flex-wrap">
                    <li className="tech">MongoDB</li>

                    <li className="tech">Postgresql</li>
                    <li className="tech">Mongoose</li>
                    <li className="tech">Prisma</li>
                </ul>
            </div>
            <div className="max-[768px]:mb-4">
                <h1 className=" text-slate-200 mb-4">Tools & Platforms:</h1>
                <ul className="flex gap-3 flex-wrap">
                    <li className="tech">Git and GitHub</li>
                    <li className="tech">Redux</li>
                    <li className="tech">Netlify</li>
                    <li className="tech">Vercel</li>
                    <li className="tech">Firebase</li>
                    <li className="tech">Figma</li>
                    <li className="tech">Docker</li>
                    <li className="tech">tRPC</li>
                    <li className="tech">JWT</li>
                </ul>
            </div>
        </section>
    );
};

export default Skills;
