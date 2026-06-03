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
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";

const videos = [
  {
    title: "Guided Meditation",
    description:
      "10-minute guided meditation to calm your mind and reduce stress.",
    url: "https://www.youtube.com/watch?v=inpok4MKVLM",
    icon: <SelfImprovementIcon />,
    color: "#6366f1",
  },
  {
    title: "Calming Music",
    description: "Soothing instrumental music for deep relaxation and focus.",
    url: "https://www.youtube.com/watch?v=2OEL4P1Rz04",
    icon: <MusicNoteIcon />,
    color: "#8b5cf6",
  },
  {
    title: "Anxiety Relief Exercise",
    description: "Simple physical and breathing exercises to reduce anxiety instantly.",
    url: "https://www.youtube.com/watch?v=ZToicYcHIOU",
    icon: <PlayCircleIcon />,
    color: "#a855f7",
  },
];

const Videos: React.FC = () => {
  return (
    <section id="videos" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-4"
        >
          Stress Relief Videos
        </motion.h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-12">
          Curated videos to help you relax and unwind.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, idx) => (
            <motion.div
              key={video.title}
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
                    background: `linear-gradient(90deg, ${video.color}, ${video.color}44)`,
                  }}
                />
                <CardContent className="p-6 flex flex-col items-start gap-3">
                  <Box
                    className="p-3 rounded-xl"
                    sx={{ backgroundColor: `${video.color}15` }}
                  >
                    {React.cloneElement(video.icon, {
                      sx: { fontSize: 32, color: video.color },
                    })}
                  </Box>
                  <Typography variant="h6" fontWeight={700} className="text-gray-800 dark:text-gray-100">
                    {video.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="flex-1"
                  >
                    {video.description}
                  </Typography>
                </CardContent>
                <CardActions className="px-6 pb-4">
                  <Button
                    size="small"
                    variant="contained"
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      borderRadius: 8,
                      px: 3,
                      background: `linear-gradient(135deg, ${video.color}, ${video.color}aa)`,
                      textTransform: "none",
                      fontWeight: 600,
                      "&:hover": {
                        opacity: 0.9,
                        background: `linear-gradient(135deg, ${video.color}, ${video.color}aa)`,
                      },
                    }}
                  >
                    Watch Now
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

export default Videos;
