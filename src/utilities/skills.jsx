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
  {
    id: Date.now().toString(36) + Math.random().toString(36),
    icon: <DiHtml5 size={28} />,
    heading: "HTML5",
  },

  {
    id: Date.now().toString(36) + Math.random().toString(36),
    icon: <DiCss3 size={28} />,
    heading: "CSS3",
  },

  {
    id: Date.now().toString(36) + Math.random().toString(36),
    icon: <DiJsBadge size={28} />,
    heading: "JavaScript",
  },

  {
    id: Date.now().toString(36) + Math.random().toString(36),
    icon: <DiReact size={28} />,
    heading: "React JS",
  },

  {
    id: Date.now().toString(36) + Math.random().toString(36),
    icon: <DiBootstrap size={28} />,
    heading: "Bootstrap",
  },

  {
    id: Date.now().toString(36) + Math.random().toString(36),
    icon: <SiTailwindcss size={28} />,
    heading: "Tailwind CSS",
  },

  {
    id: Date.now().toString(36) + Math.random().toString(36),
    icon: <SiFramer size={28} />,
    heading: "Framer Motion",
  },

  {
    id: Date.now().toString(36) + Math.random().toString(36),
    icon: <DiNpm size={28} />,
    heading: "npm",
  },

  {
    id: Date.now().toString(36) + Math.random().toString(36),
    icon: <FaGitAlt size={28} />,
    heading: "Git",
  },

  {
    id: Date.now().toString(36) + Math.random().toString(36),
    icon: <DiGithubBadge size={28} />,
    heading: "GitHub",
  },

  {
    id: Date.now().toString(36) + Math.random().toString(36),
    icon: <DiVisualstudio size={28} />,
    heading: "VsCode",
  },

  {
    id: Date.now().toString(36) + Math.random().toString(36),
    icon: <FaFigma size={28} />,
    heading: "Figma",
  },
];

export default skills;
