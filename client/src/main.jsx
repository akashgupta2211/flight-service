import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import YourFlightNavbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <YourFlightNavbar />
    <App />
    <Footer />
  </StrictMode>
);
