import React from "react";
import { motion } from "framer-motion";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

const quotes = [
  "You are not alone. You are seen, you are heard, you matter.",
  "It's okay to not be okay. Taking care of your mind is brave.",
  "Small steps forward are still progress. Be proud of yourself.",
  "Your feelings are valid. Give yourself the same kindness you give others.",
  "Healing is not linear, but every step counts.",
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Mood Tracker", href: "#mood" },
  { label: "Mood %", href: "#percentage" },
  { label: "Videos", href: "#videos" },
  { label: "Articles", href: "#articles" },
];

const helplines = [
  {
    name: "AASRA (India)",
    number: "91-9820466726",
    icon: <PhoneInTalkIcon />,
  },
  {
    name: "Vandrevala Foundation",
    number: "1860-266-2345",
    icon: <LocalPoliceIcon />,
  },
  {
    name: "iCall (TISS)",
    number: "9152987821",
    icon: <MedicalServicesIcon />,
  },
  {
    name: "COOJ Mental Health",
    number: "0832-2252525",
    icon: <PhoneInTalkIcon />,
  },
];

const Footer: React.FC = () => {
  const [quote] = React.useState(
    () => quotes[Math.floor(Math.random() * quotes.length)]
  );

  return (
    <footer className="relative mt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-50/50 dark:to-gray-900/50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand + Mission */}
          <div className="lg:col-span-1">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-4"
            >
              MindCare
            </motion.h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              We are here to support your mental well-being journey. Track your
              mood, find peace, and explore resources that help you thrive.
            </p>
            <div className="flex items-center gap-1 mt-4 text-sm text-gray-400 dark:text-gray-500">
              <FavoriteIcon sx={{ fontSize: 16 }} className="text-pink-400" />
              <span>Built with care for your mind</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-4 uppercase tracking-wider text-sm">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Helplines */}
          <div>
            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-4 uppercase tracking-wider text-sm">
              Helplines
            </h4>
            <ul className="space-y-3">
              {helplines.map((h) => (
                <li key={h.name}>
                  <a
                    href={`tel:${h.number.replace(/[^0-9]/g, "")}`}
                    className="group flex items-start gap-2 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors"
                  >
                    <span className="mt-0.5 text-indigo-400 dark:text-indigo-500 group-hover:scale-110 transition-transform">
                      {h.icon}
                    </span>
                    <div>
                      <span className="block font-medium text-gray-700 dark:text-gray-300">
                        {h.name}
                      </span>
                      <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                        {h.number}
                      </span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quote */}
          <div>
            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-4 uppercase tracking-wider text-sm">
              Daily Reminder
            </h4>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-5 border border-indigo-100 dark:border-indigo-800/30"
            >
              <p className="text-gray-700 dark:text-gray-300 text-sm italic leading-relaxed">
                &ldquo;{quote}&rdquo;
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-xs text-indigo-500 dark:text-indigo-400 font-medium">
                <FavoriteIcon sx={{ fontSize: 12 }} />
                <span>MindCare</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400 dark:text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} MindCare. All rights reserved.
          </p>
          <p>
            If you are in crisis, please call your local emergency services
            immediately.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
