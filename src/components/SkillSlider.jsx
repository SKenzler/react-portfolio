import React from "react";
import { motion } from "framer-motion";
import {
  DiBootstrap,
  DiCss3,
  DiGithubBadge,
  DiHtml5,
  DiJsBadge,
  DiNpm,
  DiReact,
  DiVisualstudio,
} from "react-icons/di";
import { FaGitAlt, FaFigma } from "react-icons/fa6";
import { SiFramer, SiTailwindcss } from "react-icons/si";

const skills = [
  { icon: <DiHtml5 /> },
  { icon: <DiCss3 /> },
  { icon: <DiJsBadge /> },
  { icon: <DiReact /> },
  { icon: <DiBootstrap /> },
  { icon: <SiTailwindcss /> },
  { icon: <DiNpm /> },
  { icon: <FaGitAlt /> },
  { icon: <DiGithubBadge /> },
  { icon: <SiFramer /> },
  { icon: <FaFigma /> },
  { icon: <DiVisualstudio /> },
];

const SkillSlider = () => {
  const duplicateSkills = [...skills, ...skills];

  return (
    <div className="relative w-full overflow-hidden border-y-2 border-yellow-400 py-3 mx-auto my-5">
      <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-[#101824] before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-[#101824] after:to-transparent after:filter after:blur-3"></div>
      <motion.div
        className="flex"
        animate={{
          x: ["-100%", "0%"],
          transition: {
            ease: "linear",
            duration: 40,
            repeat: Infinity,
          },
        }}
      >
        {duplicateSkills.map((skill, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: `${100 / skills.length}%` }}
          >
            <div className="flex flex-col items-center justify-center h-full text-[#C9C9C9] text-4xl md:text-5xl">
              {skill.icon}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillSlider;
