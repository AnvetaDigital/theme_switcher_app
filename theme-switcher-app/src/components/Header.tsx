import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../theme/ThemeContext";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();

  {
    /* Theme Dropdown */
  }
  const ThemeDropdown = (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value as any)}
      className="text-black p-1 rounded"
    >
      <option value="theme1">Theme 1</option>
      <option value="theme2">Theme 2</option>
      <option value="theme3">Theme 3</option>
    </select>
  );

  if (theme !== "theme2") {
    return (
      <motion.header
        className="fixed top-0 left-0 w-full bg-blue-500 text-white shadow-md z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <h1 className="text-lg font-bold">Theme Switcher</h1>
          <nav className="space-x-4">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/about" className="hover:underline">
              About
            </Link>
            <Link to="/blog" className="hover:underline">
              Blog
            </Link>
          </nav>
          {ThemeDropdown}
        </div>
      </motion.header>
    );
  }

  return (
    <motion.aside
      className="fixed top-0 left-0 h-screen w-56 bg-gray-800 text-white flex flex-col p-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    >
      <h1 className="text-xl font-bold mb-6">Theme Switcher</h1>
      <nav className="flex flex-col space-y-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/about" className="hover:underline">
          About
        </Link>
        <Link to="/blog" className="hover:underline">
          Blog
        </Link>
      </nav>
      <div className="mt-auto">{ThemeDropdown}</div>
    </motion.aside>
  );
};

export default Header;
