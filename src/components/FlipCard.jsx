import React from "react";

const FlipCard = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 min-h-screen gap-2">
      {cards.map((item) => (
        <div
          key={item.id}
          className="flex flex-col justify-center items-center p-4"
        >
          <div className="group h-80 w-64 [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <img
                  src={item.image}
                  alt={item.header}
                  className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black px-3 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col justify-center items-center">
                  <h1 className="text-lg font-semibold p-2">{item.header}</h1>
                  <p className="text-sm leading-relaxed font-light text-center text-pretty py-2">
                    {item.content}
                  </p>
                  <button
                    type="button"
                    className="text-yellow-400 hover:text-[#C9C9C9] p-4"
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
