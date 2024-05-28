import React from "react";
import Navbar from "../components/Navbar";
import contactImage from "../assets/contact-image.png";

const Contact = () => {
  return (
    <>
      <Navbar />
      <h1 className="flex justify-center text-center text-[#C9C9C9] text-4xl font-bold mt-12">
        CONTACT<span className="font-light">&nbsp; Me</span>
      </h1>
      <img src={contactImage} alt="Contact glasses graphic" />
    </>
  );
};

export default Contact;
