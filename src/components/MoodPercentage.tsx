import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface MoodPercentageProps {
  percentage: number;
}

const MoodPercentage: React.FC<MoodPercentageProps> = ({ percentage }) => {
  const [displayed, setDisplayed] = useState(percentage);
  const prevRef = useRef(percentage);

  useEffect(() => {
    const start = prevRef.current;
    const diff = percentage - start;
    if (diff === 0) return;

    const duration = 800;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayed(Math.round(start + diff * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
    prevRef.current = percentage;
  }, [percentage]);

  const getEmoji = () => {
    if (percentage >= 80) return "🌟";
    if (percentage >= 60) return "😊";
    if (percentage >= 40) return "😐";
    if (percentage >= 20) return "😔";
    return "💔";
  };

  const getMessage = () => {
    if (percentage >= 80) return "You're doing great! Keep it up!";
    if (percentage >= 60) return "Doing well! A little self-care goes a long way.";
    if (percentage >= 40) return "Consider taking some time to relax.";
    if (percentage >= 20) return "It's okay to not be okay. Reach out to someone.";
    return "Your feelings are valid. Please seek support.";
  };

  const getColor = () => {
    if (percentage >= 80) return "from-emerald-500 to-teal-500";
    if (percentage >= 60) return "from-green-500 to-emerald-500";
    if (percentage >= 40) return "from-yellow-500 to-orange-500";
    if (percentage >= 20) return "from-orange-500 to-red-500";
    return "from-red-500 to-rose-600";
  };

  return (
    <section id="percentage" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-4"
        >
          Your Mood Percentage
        </motion.h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-12">
          Your estimated well-being score based on your inputs.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-xl border border-white/50 dark:border-gray-700/50 text-center max-w-lg mx-auto"
        >
          <motion.span
            className="text-6xl sm:text-7xl inline-block"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            {getEmoji()}
          </motion.span>

          <motion.h3
            className={`text-6xl sm:text-7xl font-extrabold mt-4 bg-gradient-to-r ${getColor()} bg-clip-text text-transparent`}
          >
            {displayed}%
          </motion.h3>

          <p className="text-gray-600 dark:text-gray-300 mt-6 text-lg font-medium">
            {getMessage()}
          </p>
          <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">
            This is an estimated mood score based on your inputs.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MoodPercentage;
