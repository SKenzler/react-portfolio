import React from "react";
import { useState } from "react";
import { FaCaretLeft, FaCaretRight, FaCircle } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const ProjectCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideOrder, setSlideOrder] = useState([0, 1, 2, 3, 4, 5, 6]);

  const slidePositions = [
    "center",
    "leftFirst",
    "leftSecond",
    "leftThird",
    "rightThird",
    "rightSecond",
    "rightFirst",
  ];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    leftFirst: { x: "-50%", scale: 0.7, zIndex: 4 },
    leftSecond: { x: "-80%", scale: 0.5, zIndex: 3 },
    leftThird: { x: "-100%", scale: 0.4, zIndex: 2 },
    rightFirst: { x: "50%", scale: 0.7, zIndex: 4 },
    rightSecond: { x: "80%", scale: 0.5, zIndex: 3 },
    rightThird: { x: "100%", scale: 0.4, zIndex: 2 },
  };

  const handleNext = () => {
    setCurrentIndex((index) =>
      index === images.length - 1 ? (index = 0) : index + 1
    );
    setSlideOrder((previousIndexes) => {
      const updateOrder = previousIndexes.map((previousIndex) =>
        previousIndex === images.length - 1
          ? (previousIndex = 0)
          : previousIndex + 1
      );
      return updateOrder;
    });
  };

  const handlePrevious = () => {
    setCurrentIndex((index) =>
      index - 1 < 0 ? (index = images.length - 1) : index - 1
    );
    setSlideOrder((previousIndexes) => {
      const updateOrder = previousIndexes.map((previousIndex) =>
        previousIndex === 0
          ? (previousIndex = images.length - 1)
          : previousIndex - 1
      );
      console.log(previousIndexes, updateOrder);
      return updateOrder;
    });
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setSlideOrder(() => {
      let imagesLength = images.length;

      const updateOrder = [
        index,
        Math.floor((index + (imagesLength - 6)) % 7),
        Math.floor((index + (imagesLength - 5)) % 7),
        Math.floor((index + (imagesLength - 4)) % 7),
        Math.floor((index + (imagesLength - 3)) % 7),
        Math.floor((index + (imagesLength - 2)) % 7),
        Math.floor((index + (imagesLength - 1)) % 7),
      ];
      return updateOrder;
    });
  };

  return (
    <div className="w-100 h-80 sm:h-[480px] sm:w-[30em] flex justify-center items-center mt-5">
      <AnimatePresence>
        {images.map((item, index) => (
          <motion.img
            key={index}
            className="flex justify-center items-center w-[22em] sm:w-[30em] object-fill p-2"
            src={item}
            alt={item}
            initial="center"
            animate={slidePositions[slideOrder[index]]}
            variants={imageVariants}
            transition={{ duration: 0.8 }}
            style={{ position: "absolute" }}
          />
        ))}
      </AnimatePresence>

      <div className="flex absolute translate-y-36 sm:-translate-y-[-210px] text-[#C9C9C9] p-4">
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
