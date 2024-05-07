import React from "react";
import { useState } from "react";
import { FaCaretLeft, FaCaretRight, FaCircle } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const ProjectCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidePositions = [
    "center",
    "leftFirst",
    "leftSecond",
    "leftThird",
    "rightFirst",
    "rightSecond",
    "rightThird",
  ];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    leftFirst: { x: "-50%", scale: 0.7, zIndex: 4 },
    leftSecond: { x: "-90%", scale: 0.5, zIndex: 3 },
    leftThird: { x: "-100%", scale: 0.25, zIndex: 2 },
    rightFirst: { x: "50%", scale: 0.7, zIndex: 4 },
    rightSecond: { x: "90%", scale: 0.5, zIndex: 3 },
    rightThird: { x: "100%", scale: 0.25, zIndex: 2 },
  };

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
    <div className="w-full h-screen bg-[#101824] flex flex-col justify-center items-center mt-5">
      {images.map((item, index) => {
        <motion.img
          key={index}
          className="flex justify-center items-center w-5/6 sm:w-6/12 object-fill rounded-md p-2"
          src={item}
          alt={item}
          initial="center"
          animate={slidePositions[currentIndex[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          style={{ width: "40%", position: "absolute" }}
        />;
      })}

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
                onClick={() => handleDotClick(index)}
              >
                <FaCircle color="yellow" size={10} />
              </div>
            ) : (
              <div
                key={index}
                className="hover:text-yellow-400 p-2 cursor-pointer"
                onClick={() => handleDotClick(index)}
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
