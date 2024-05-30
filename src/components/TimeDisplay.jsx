import React from "react";

const TimeDisplay = () => {
  const date = new Date();
  const showTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  return <div className="text-[#C9C9C9] text-sm">{showTime}</div>;
};

export default TimeDisplay;
