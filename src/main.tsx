import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/600.css';

createRoot(document.getElementById("root")!).render(<App />);
