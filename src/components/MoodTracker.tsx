import React from "react";
import { motion } from "framer-motion";
import { Box, Slider, Typography } from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import BoltIcon from "@mui/icons-material/Bolt";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import { useTheme } from "../context/ThemeContext";

interface MoodTrackerProps {
  moodData: { stress: number; energy: number; positive: number };
  onMoodChange: (data: {
    stress: number;
    energy: number;
    positive: number;
  }) => void;
}

const sliders = [
  {
    label: "How stressed do you feel?",
    icon: <SentimentVeryDissatisfiedIcon />,
    key: "stress" as const,
    color: "#ef4444",
    minLabel: "No stress",
    maxLabel: "Extreme stress",
  },
  {
    label: "How energetic do you feel?",
    icon: <BoltIcon />,
    key: "energy" as const,
    color: "#f59e0b",
    minLabel: "Very low",
    maxLabel: "Highly energetic",
  },
  {
    label: "How positive is your mood?",
    icon: <SentimentSatisfiedAltIcon />,
    key: "positive" as const,
    color: "#22c55e",
    minLabel: "Very negative",
    maxLabel: "Very positive",
  },
];

const MoodTracker: React.FC<MoodTrackerProps> = ({ moodData, onMoodChange }) => {
  const { darkMode } = useTheme();
  const handleChange = (key: string, value: number) => {
    onMoodChange({ ...moodData, [key]: value });
  };

  return (
    <section id="mood" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-4"
        >
          Mood Tracker
        </motion.h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-12 max-w-lg mx-auto">
          Drag the sliders to reflect how you're feeling right now.
        </p>

        <div className="space-y-6">
          {sliders.map((item, idx) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 dark:border-gray-700/50 hover:shadow-xl transition-shadow"
            >
              <Box display="flex" alignItems="center" gap={1.5} mb={3}>
                <Box sx={{ color: item.color }}>{item.icon}</Box>
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  sx={{ color: darkMode ? "#e2e8f0" : "text.primary" }}
                >
                  {item.label}
                </Typography>
              </Box>

              <Slider
                value={moodData[item.key]}
                onChange={(_, val) => handleChange(item.key, val as number)}
                min={0}
                max={10}
                step={1}
                marks={[
                  { value: 0, label: "0" },
                  { value: 5, label: "5" },
                  { value: 10, label: "10" },
                ]}
                sx={{
                  color: item.color,
                  "& .MuiSlider-thumb": {
                    boxShadow: `0 0 0 6px ${item.color}22`,
                    "&:hover, &.Mui-focusVisible": {
                      boxShadow: `0 0 0 10px ${item.color}33`,
                    },
                  },
                  "& .MuiSlider-track": {
                    height: 6,
                    borderRadius: 3,
                  },
                  "& .MuiSlider-rail": {
                    height: 6,
                    borderRadius: 3,
                    opacity: 0.3,
                  },
                  "& .MuiSlider-mark": {
                    backgroundColor: item.color,
                    height: 8,
                    width: 2,
                  },
                  "& .MuiSlider-markLabel": {
                    fontSize: "0.75rem",
                  },
                }}
              />

              <Box display="flex" justifyContent="space-between" mt={1}>
                <Typography variant="caption" sx={{ color: darkMode ? "#94a3b8" : "text.secondary" }}>
                  {item.minLabel}
                </Typography>
                <Typography variant="caption" fontWeight={600} color={item.color}>
                  {moodData[item.key]}/10
                </Typography>
                <Typography variant="caption" sx={{ color: darkMode ? "#94a3b8" : "text.secondary" }}>
                  {item.maxLabel}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoodTracker;
