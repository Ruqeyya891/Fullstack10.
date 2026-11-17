import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Theme() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div
            style={{
                backgroundColor: theme === "dark" ? "black" : "white",
                color: theme === "dark" ? "white" : "black",
                minHeight: "100vh",
                padding: "20px"
            }}
        >
            <h1>Theme: {theme}</h1>

            <button onClick={() => setTheme("dark")}>
                Dark Mode
            </button>

            <button onClick={() => setTheme("light")}>
                Light Mode
            </button>
        </div>
    );
}

export default Theme;