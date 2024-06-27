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
    icon: <DiHtml5 />,
    heading: "HTML5",
  },

  {
    id: Date.now().toString(36) + Math.random().toString(36),
    icon: <DiCss3 />,
    heading: "CSS3",
  },

  {
    id: Date.now().toString(36) + Math.random().toString(36),
    icon: <DiJsBadge />,
    heading: "JavaScript",
  },

  {
    id: Date.now().toString(36) + Math.random().toString(36),
    icon: <DiReact />,
    heading: "React JS",
  },

  {
    id: Date.now().toString(36) + Math.random().toString(36),
    icon: <DiBootstrap />,
    heading: "Bootstrap",
  },

  {
    id: Date.now().toString(36) + Math.random().toString(36),
    icon: <SiTailwindcss />,
    heading: "Tailwind CSS",
  },

  {
    id: Date.now().toString(36) + Math.random().toString(36),
    icon: <SiFramer />,
    heading: "Framer Motion",
  },

  {
    id: Date.now().toString(36) + Math.random().toString(36),
    icon: <DiNpm />,
    heading: "npm",
  },

  {
    id: Date.now().toString(36) + Math.random().toString(36),
    icon: <FaGitAlt />,
    heading: "Git",
  },

  {
    id: Date.now().toString(36) + Math.random().toString(36),
    icon: <DiGithubBadge />,
    heading: "GitHub",
  },

  {
    id: Date.now().toString(36) + Math.random().toString(36),
    icon: <DiVisualstudio />,
    heading: "VsCode",
  },

  {
    id: Date.now().toString(36) + Math.random().toString(36),
    icon: <FaFigma />,
    heading: "Figma",
  },
];

export default skills;
