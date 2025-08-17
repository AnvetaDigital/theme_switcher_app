import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <motion.div
      className="p-6 max-w-2xl mx-auto text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 3 }}
    >
      <h1 className="text-2xl font-bold mb-4">About Theme Switcher App</h1>
      <p className="text-gray-700 dark:text-gray-300">
        This is a demo React + TypeScript + Tailwind project to showcase theme
        switching and data fetching from an API. You can toggle between multiple
        themes and see the UI adapt instantly.
      </p>
    </motion.div>
  );
};

export default About;
