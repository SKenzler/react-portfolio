import React from "react";
import { useState } from "react";
import { FaCaretLeft, FaCaretRight, FaCircle } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const ProjectCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((previousIndex) =>
      previousIndex + 1 === images.length ? 0 : previousIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((previousIndex) =>
      previousIndex - 1 < 0 ? images.length - 1 : previousIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center mt-5">
      <img
        key={currentIndex}
        className="flex justify-center items-cneter w-5/6 sm:w-6/12 object-fill p-2"
        src={images[currentIndex]}
        alt="Left Arrow"
      />

      <div className="flex justify-center items-center text-[#C9C9C9] p-4">
        <div
          className="hover:text-yellow-400 cursor-pointer"
          onClick={handlePrevious}
        >
          <FaCaretLeft size={24} />
        </div>
        <div className="flex justify-center items-center text-[#C9C9C9]">
          {images.map((_, index) =>
            index === currentIndex ? (
              <div
                key={index}
                className="hover:text-yellow-400 p-2 cursor-pointer"
                onClick={console.log(index, currentIndex)}
              >
                <FaCircle color="yellow" size={10} />
              </div>
            ) : (
              <div
                key={index}
                className="hover:text-yellow-400 p-2 cursor-pointer"
                onClick={console.log(index, currentIndex)}
              >
                <FaCircle size={10} />
              </div>
            )
          )}
        </div>
        <div
          className="hover:text-yellow-400 cursor-pointer"
          onClick={handleNext}
        >
          <FaCaretRight size={24} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
