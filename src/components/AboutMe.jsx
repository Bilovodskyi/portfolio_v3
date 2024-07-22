import React from "react";

const AboutMe = () => {
    return (
        <section id="about" className="section-class">
            <h1 className="md:hidden sticky top-0 text-white text-[1rem] bg-slate-900 py-5 opacity-90">
                ABOUT
            </h1>
            <p className="leading-8">
                I was born in Ukraine. In 2017 I moved to Warsaw to pursue my
                university education. There, I earned a bachelor's degree in
                finance and accounting. In September 2022, I relocated to
                Vancouver. I started my journey as a web developer in early
                2023, and since then, I've undertaken numerous projects to
                enhance my skills.
            </p>
            <p className="leading-8 mt-4">
                Programming is the most exciting activity I have encountered in
                my life, so I am enthusiastic to open the door of a new life
                experience, and to work in a team of people for whom programming
                is a passion, to improve my personal and professional skills.
            </p>
            <p className="leading-8 mt-4">
                When I'm not at the computer, I enjoy playing tennis, hiking,
                reading, and spending active time with friends.
            </p>
        </section>
    );
};

export default AboutMe;
