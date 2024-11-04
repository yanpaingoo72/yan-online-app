import React, { useState } from "react";

const FaqBox = ({ faq: { question, answer } }) => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <div onClick={handleToggle}>
      <div className="flex justify-between items-center select-none active:scale-90  border border-black p-3">
        <h1 className={`text-xl ${open === false ? "" : "font-bold"}`}>
          {question}
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-6 duration-1000 ${open === false ? "" : "rotate-180"}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
      </div>
      <p
        className={`bg-gray-300 p-3 text-center text-stone-600 duration-1000 ${
          open === false ? "hidden" : ""
        }`}
      >
        {answer}
      </p>
    </div>
  );
};

export default FaqBox;
