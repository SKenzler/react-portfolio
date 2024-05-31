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
    <div className="w-24 text-[#C9C9C9] text-sm px-2 mx-5">
      {date.toLocaleTimeString()}
    </div>
  );
};
export default TimeDisplay;
