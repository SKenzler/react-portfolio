import React from "react";

const FlipCard = ({ cards }) => {
  return (
    <div className="grid grid-cols-3">
      {cards.map((item) => (
        <div
          key={item.id}
          className="flex flex-col min-h-screen justify center items-center bg-slate-100 p-10"
        >
          <div className="group h-80 w-80 [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <img
                  src={item.image}
                  alt={item.header}
                  className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col justify-center items-center">
                  <h1 className="text-2xl font-bold p-2">{item.header}</h1>
                  <p className="text-base">{item.content}</p>
                  <button
                    type="button"
                    className="text-yellow-400 hover:text-[#C9C9C9] p-2"
                  >
                    {item.icon}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlipCard;
