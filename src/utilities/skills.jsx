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
    icon: <DiHtml5 size={42} />,
    heading: "HTML5",
  },

  {
    id: Date.now().toString(36) + Math.random().toString(36),
    icon: <DiCss3 size={42} />,
    heading: "CSS3",
  },

  {
    id: Date.now().toString(36) + Math.random().toString(36),
    icon: <DiJsBadge size={42} />,
    heading: "JavaScript",
  },

  {
    id: Date.now().toString(36) + Math.random().toString(36),
    icon: <DiReact size={42} />,
    heading: "React JS",
  },

  {
    id: Date.now().toString(36) + Math.random().toString(36),
    icon: <DiBootstrap size={42} />,
    heading: "Bootstrap",
  },

  {
    id: Date.now().toString(36) + Math.random().toString(36),
    icon: <SiTailwindcss size={42} />,
    heading: "Tailwind CSS",
  },

  {
    id: Date.now().toString(36) + Math.random().toString(36),
    icon: <SiFramer size={42} />,
    heading: "Framer Motion",
  },

  {
    id: Date.now().toString(36) + Math.random().toString(36),
    icon: <DiNpm size={42} />,
    heading: "npm",
  },

  {
    id: Date.now().toString(36) + Math.random().toString(36),
    icon: <FaGitAlt size={42} />,
    heading: "Git",
  },

  {
    id: Date.now().toString(36) + Math.random().toString(36),
    icon: <DiGithubBadge size={42} />,
    heading: "GitHub",
  },

  {
    id: Date.now().toString(36) + Math.random().toString(36),
    icon: <DiVisualstudio size={42} />,
    heading: "VsCode",
  },

  {
    id: Date.now().toString(36) + Math.random().toString(36),
    icon: <FaFigma size={42} />,
    heading: "Figma",
  },
];

export default skills;
