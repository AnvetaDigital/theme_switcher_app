import React from "react";
import ContentBlock from "./ContentBlock";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
    <motion.div
      className="p-6 text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 3 }}
    >
      <h1 className="text-2xl font-bold">Home Page</h1>
      <p className="mt-2 text-grey-600">Welcome to the Theme Switcher App!</p>
      <ContentBlock />
    </motion.div>
  );
};

export default Home;
