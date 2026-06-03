import React from "react";
import { motion } from "framer-motion";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl"
      >
        <motion.div
          animate={{ y: [0, -12, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block mb-8 p-5 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 shadow-lg"
        >
          <FavoriteIcon sx={{ fontSize: 72 }} className="text-pink-500 dark:text-pink-400" />
        </motion.div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Your Mental Health
          </span>
          <br />
          <span className="text-gray-800 dark:text-gray-100">Matters</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Track your mood, relax your mind, and explore helpful resources for
          emotional well-being.
        </p>

        <motion.a
          href="#mood"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow text-lg"
        >
          Start Tracking
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
