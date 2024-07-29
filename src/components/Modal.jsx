import { useState } from "react";
import Logo from "../assets/design-build-deploy-logo.png";
import { IoClose } from "react-icons/io5";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center backdrop-blur-sm">
      <div className="w-[22em] flex flex-col indent-0 bg-[#101824] rounded-lg border-2 border-slate-300 p-3">
        <button
          type="button"
          onClick={toggleModal}
          className="flex justify-end items-end cursor-pointer"
        >
          <IoClose size={"1.2em"} color="#C9C9C9" />
        </button>
        <div className="flex justify-center items-center gap-1">
          <img
            src={Logo}
            className="w-[4.4em] p-1 m-2 text-"
            alt="Design Build Deploy Logo"
          ></img>
          <div className="text-sm text-[#C9C9C9] text-center font-normal p-2">
            Your message has been sent
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            type="button"
            onClick={toggleModal}
            className="flex justify-center items-center w-[8em] bg-yellow-400 text-sm text-center font-semibold rounded-md px-4 py-1 m-2 hover:bg-[#C9C9C9] cursor-pointer"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
