import cardImageOne from "../assets/react-to-do-list.jpg";
import { FaGithub } from "react-icons/fa";

const cards = [
  {
    id: Date.now().toString(36) + Math.random().toString(36),
    image: cardImageOne,
    header: "React To Do List",
    content:
      "An interactive To Do List in React. The To Do List dynamically populates as more tasks are added. Additionlly, a user can edit and delete a task",
    icon: <FaGithub size={28} />,
  },
  {
    id: Date.now().toString(36) + Math.random().toString(36),
    image: cardImageOne,
    header: "React Profile Card",
    content:
      "An interactive To Do List in React. The To Do List dynamically populates as more tasks are added. Additionlly, a user can edit and delete a task",
    icon: <FaGithub size={28} />,
  },
];

export default cards;
