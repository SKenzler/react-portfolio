import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Modal from "../components/Modal";
import { useState } from "react";

const SendEmail = () => {
  const form = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_mw7ji1c", "template_qxbm1cu", form.current, {
        publicKey: "WXbBuXDeL18gVPTvN",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          console.log(isOpen);
          {
            isOpen && <Modal />;
          }
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="w-full flex flex-col justify-center items-start rounded-lg p-5 mt-4"
    >
      <label
        htmlFor="name-feild"
        className="text-[#C9C9C9] text-start text-sm mb-2"
      >
        Name:
      </label>
      <input
        type="text"
        name="user_name"
        id="name-feild"
        placeholder="name"
        className="w-60 shadow shadow-black text-sm text-black placeholder-black appearance-none focus:outline-none rounded px-2 py-1 mb-2"
      ></input>
      <label
        htmlFor="email-feild"
        className="text-[#C9C9C9] text-start text-sm mb-2"
      >
        Email:
      </label>
      <input
        type="email"
        name="user_email"
        id="email-feild"
        placeholder="email"
        className="w-60 shadow shadow-black text-sm text-black placeholder-black appearance-none focus:outline-none rounded px-2 py-1 mb-2"
      ></input>
      <label
        htmlFor="message-feild"
        className="text-[#C9C9C9] text-start text-sm mb-2"
      >
        Message:
      </label>
      <textarea
        name="message"
        id="message-feild"
        placeholder="message"
        rows="6"
        className="resize-none w-60 sm:w-72 shadow shadow-black text-sm text-black placeholder-black appearance-none focus:outline-none rounded px-2 py-1 mb-2"
      ></textarea>
      <button
        type="submit"
        value="Send"
        className="flex justify-center items-center border-2 border-yellow-400 px-5 py-1 text-yellow-400 text-center text-sm tracking-wide gap-4 font-normal rounded-md my-5 cursor-pointer hover:border-[#C9C9C9] hover:text-[#C9C9C9]"
      >
        Let's Chat
      </button>
    </form>
  );
};

export default SendEmail;
