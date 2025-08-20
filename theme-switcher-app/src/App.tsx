import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import { useTheme } from "./theme/ThemeContext";
import Blog from "./components/Blog";


const App: React.FC = () => {
  const { theme } = useTheme();

  const contentClasses =
    theme === "theme2" ? "flex-1 mt-16 md:mt-0 md:ml-56 p-4" : "pt-16";

  return (
    <Router>
      <Header />
      <div className={contentClasses}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
