import React, { useState, useCallback, useMemo } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider as AppThemeProvider, useTheme } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MoodTracker from "./components/MoodTracker";
import MoodPercentage from "./components/MoodPercentage";
import Videos from "./components/Videos";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

interface MoodData {
  stress: number;
  energy: number;
  positive: number;
}

const AppContent: React.FC = () => {
  const { darkMode } = useTheme();

  const muiTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: { main: "#818cf8" },
          secondary: { main: "#a78bfa" },
          ...(darkMode
            ? { background: { default: "#0f172a", paper: "#1e293b" } }
            : {}),
        },
        typography: {
          fontFamily: '"Inter", sans-serif',
        },
        shape: {
          borderRadius: 12,
        },
      }),
    [darkMode]
  );

  const [moodData, setMoodData] = useState<MoodData>(() => {
    try {
      const saved = localStorage.getItem("moodData");
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          stress: parsed.stress ?? 5,
          energy: parsed.energy ?? 5,
          positive: parsed.positive ?? 5,
        };
      }
    } catch {}
    return { stress: 5, energy: 5, positive: 5 };
  });

  const handleMoodChange = useCallback((data: MoodData) => {
    setMoodData(data);
    const percentage = Math.round(
      ((data.energy + data.positive + (10 - data.stress)) / 30) * 100
    );
    localStorage.setItem(
      "moodData",
      JSON.stringify({
        ...data,
        percentage,
        date: new Date().toLocaleDateString(),
      })
    );
  }, []);

  const moodPercentage = Math.round(
    ((moodData.energy + moodData.positive + (10 - moodData.stress)) / 30) * 100
  );

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800">
        <Navbar />
        <Hero />
        <MoodTracker moodData={moodData} onMoodChange={handleMoodChange} />
        <MoodPercentage percentage={moodPercentage} />
        <Videos />
        <Articles />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

const App: React.FC = () => {
  return (
    <AppThemeProvider>
      <AppContent />
    </AppThemeProvider>
  );
};

export default App;
