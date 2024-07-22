import { Outlet } from "react-router-dom";
import { useRef } from "react";

function App() {
    const hoverRef = useRef();

    const handleOnMouseMove = (e, ref) => {
        if (window.innerWidth > 768) {
            const rect = ref.current.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;

            ref.current.style.setProperty("--mouse-x", `${x}px`);
            ref.current.style.setProperty("--mouse-y", `${y}px`);
            ref.current.style.setProperty(
                "--page-height",
                `${document.documentElement.scrollHeight}px`
            );
        } else {
            return;
        }
    };
    return (
        <main
            ref={hoverRef}
            onMouseMove={(e) => {
                handleOnMouseMove(e, hoverRef);
            }}
            className={`hover-effect flex max-[768px]:flex-col bg-slate-900 text-slate-400`}>
            <Outlet />
        </main>
    );
}

export default App;
