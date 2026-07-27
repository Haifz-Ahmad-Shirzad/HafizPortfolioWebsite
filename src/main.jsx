import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeProvider } from "./context/ThemeContext.jsx";
AOS.init({
  duration: 800,
  once: false,
  mirror: true,
  offset: 50,
});

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
);
