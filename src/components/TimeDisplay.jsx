import React from "react";
import { useState, useEffect } from "react";

const TimeDisplay = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div className=" text-[#C9C9C9] text-base text-center font-semibold">
      {date.toLocaleTimeString([], { timeStyle: "short" })}
    </div>
  );
};
export default TimeDisplay;
