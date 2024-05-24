import cardImageOne from "../assets/react-to-do-list.jpg";
import cardImageTwo from "../assets/react-profile-card.jpg";
import cardImageThree from "../assets/theme-toggler-sreenshot.jpg";
import cardImageFour from "../assets/react-password-generator.jpg";
import { FaGithub } from "react-icons/fa";

const cards = [
  {
    id: Date.now().toString(36) + Math.random().toString(36),
    image: cardImageOne,
    header: "React To-Do List",
    content:
      "An interactive To-Do List that dynamically populates as the user adds tasks. Additionlly, a user can edit and delete a task.",
    icon: <FaGithub size={42} />,
  },
  {
    id: Date.now().toString(36) + Math.random().toString(36),
    image: cardImageTwo,
    header: "React Profile Card",
    content:
      "An interactive profile card that features an active state on hover, expanding to reveal additional content.",
    icon: <FaGithub size={42} />,
  },
  {
    id: Date.now().toString(36) + Math.random().toString(36),
    image: cardImageThree,
    header: "React Theme Toggler",
    content:
      "An app that enables a user to toggle between dark and light mode themes.",
    icon: <FaGithub size={42} />,
  },
  {
    id: Date.now().toString(36) + Math.random().toString(36),
    image: cardImageFour,
    header: "React Password Generator",
    content:
      "An app that enables a user to generate a random password based on specific selection criteria and copy it to the clipboard.",
    icon: <FaGithub size={42} />,
  },
];

export default cards;
