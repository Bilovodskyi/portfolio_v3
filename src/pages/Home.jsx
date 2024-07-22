import AboutMe from "../components/AboutMe";
import LeftSection from "../components/LeftSection";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

function Home() {
    return (
        <>
            <LeftSection />
            <div>
                <AboutMe />
                <Skills />
                <Projects />
                <p className="p-8 max-[768px]:py-12 md:p-32 pb-0 md:mx-6 text-[0.8rem]">
                    Loosely designed in Figma and coded in Visual Studio Code by
                    yours truly. Built with React and Tailwind CSS, deployed
                    with Vercel.
                </p>
            </div>
        </>
    );
}

export default Home;
