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
    <div className="w-36 text-[#C9C9C9] text-base font-semibold px-10 mx-2">
      {date.toLocaleTimeString([], { timeStyle: "short" })}
    </div>
  );
};
export default TimeDisplay;
