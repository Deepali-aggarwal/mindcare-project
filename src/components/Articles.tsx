import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PsychologyIcon from "@mui/icons-material/Psychology";

const articles = [
  {
    title: "Understanding Anxiety",
    description:
      "Anxiety is a normal response to stress. Understanding its causes helps manage it better and leads to a healthier mindset.",
    url: "https://www.healthline.com/health/anxiety",
    icon: <PsychologyIcon />,
    color: "#6366f1",
  },
  {
    title: "How to Reduce Stress",
    description:
      "Stress management is important for mental balance and emotional stability. Learn effective techniques to stay calm.",
    url: "https://www.helpguide.org/articles/stress/stress-management.htm",
    icon: <MenuBookIcon />,
    color: "#8b5cf6",
  },
  {
    title: "Mindfulness for Beginners",
    description:
      "Mindfulness helps you stay present and reduce anxiety. Start with simple daily practices that take just minutes.",
    url: "https://www.mindful.org/meditation/mindfulness-getting-started/",
    icon: <PsychologyIcon />,
    color: "#a855f7",
  },
];

const Articles: React.FC = () => {
  return (
    <section id="articles" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-4"
        >
          Mental Health Articles
        </motion.h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-12">
          Read trusted resources to support your well-being journey.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, idx) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
            >
              <Card
                className="h-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm shadow-lg border border-white/50 dark:border-gray-700/50"
                sx={{ borderRadius: 4, overflow: "hidden" }}
              >
                <div
                  className="h-2"
                  style={{
                    background: `linear-gradient(90deg, ${article.color}, ${article.color}44)`,
                  }}
                />
                <CardContent className="p-6 flex flex-col items-start gap-3">
                  <Box
                    className="p-3 rounded-xl"
                    sx={{ backgroundColor: `${article.color}15` }}
                  >
                    {React.cloneElement(article.icon, {
                      sx: { fontSize: 32, color: article.color },
                    })}
                  </Box>
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    className="text-gray-800 dark:text-gray-100"
                  >
                    {article.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="flex-1"
                  >
                    {article.description}
                  </Typography>
                </CardContent>
                <CardActions className="px-6 pb-4">
                  <Button
                    size="small"
                    variant="outlined"
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      borderRadius: 8,
                      px: 3,
                      borderColor: article.color,
                      color: article.color,
                      textTransform: "none",
                      fontWeight: 600,
                      "&:hover": {
                        borderColor: article.color,
                        backgroundColor: `${article.color}11`,
                      },
                    }}
                  >
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
