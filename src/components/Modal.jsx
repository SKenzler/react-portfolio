import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaRegCircleCheck } from "react-icons/fa6";

const Modal = ({ isOpen }) => {
  const [showModal, setShowModal] = useState(isOpen);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div
      className={
        !showModal
          ? "hidden"
          : "w-screen h-screen fixed inset-0 flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm"
      }
    >
      <div className="w-[18em] flex flex-col bg-[#101824] rounded-lg border-2 border-slate-300 p-3">
        <button
          type="button"
          onClick={toggleModal}
          className="flex justify-end items-end cursor-pointer"
        >
          <IoClose size={"1.2em"} color="#C9C9C9" />
        </button>
        <div className="flex justify-center items-center px-5 pb-3">
          <FaRegCircleCheck size={42} color="#FACC15" />
        </div>
        <h1 className="text-lg text-center font-semibold text-yellow-400 uppercase">
          Thank You
        </h1>
        <div className="text-sm text-[#C9C9C9] text-center font-normal p-2">
          Your message has been sent
        </div>

        <div className="flex justify-center items-center mb-2">
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
