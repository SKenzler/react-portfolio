import cardImageOne from "../assets/react-to-do-list.jpg";
import cardImageTwo from "../assets/react-currency-converter.jpg";
import cardImageThree from "../assets/theme-toggler-sreenshot.jpg";
import cardImageFour from "../assets/react-password-generator.jpg";
import cardImageFive from "../assets/react-e-commerce-cards.jpg";
import cardImageSix from "../assets/react-dashboard.jpg";
import { FaGithub } from "react-icons/fa";

const cards = [
  {
    id: Date.now().toString(36) + Math.random().toString(36),
    image: cardImageOne,
    header: "React To-Do List",
    content:
      "An interactive To-Do List that dynamically populates as the user adds tasks. Additionlly, a user can edit and delete a task.",
    icon: <FaGithub size={42} />,
    path: "https://github.com/SKenzler/react-to-do-list",
  },
  {
    id: Date.now().toString(36) + Math.random().toString(36),
    image: cardImageTwo,
    header: "React Curreny Converter",
    content:
      "A React app that enables a user to input a monetary value and calculate the conversion amount by selecting a specific country with an associated currency rate. The rate is fetched from an external API.",
    icon: <FaGithub size={42} />,
    path: "https://github.com/SKenzler/react-currency-converter",
  },
  {
    id: Date.now().toString(36) + Math.random().toString(36),
    image: cardImageThree,
    header: "React Theme Toggler",
    content:
      "An app that enables a user to toggle between dark and light mode themes.",
    icon: <FaGithub size={42} />,
    path: "https://github.com/SKenzler/react-theme-toggle",
  },
  {
    id: Date.now().toString(36) + Math.random().toString(36),
    image: cardImageFour,
    header: "React Password Generator",
    content:
      "An app that enables a user to generate a random password based on specific selection criteria and copy it to the clipboard.",
    icon: <FaGithub size={42} />,
    path: "https://github.com/SKenzler/react-password-generator",
  },
  {
    id: Date.now().toString(36) + Math.random().toString(36),
    image: cardImageFive,
    header: "React E-commerce Cards",
    content:
      "A React App that displays a series of e-commerce cards generated from a data file. The App uses props and the map function to iterate through an Array of Shoes and render a card for each iteration.",
    icon: <FaGithub size={42} />,
    path: "https://github.com/SKenzler/e-commerce-cards",
  },
  {
    id: Date.now().toString(36) + Math.random().toString(36),
    image: cardImageSix,
    header: "React Dashboard",
    content: "A React Sidebar component that populates from a data file.",
    icon: <FaGithub size={42} />,
    path: "https://github.com/SKenzler/sidebar-component",
  },
];

export default cards;
