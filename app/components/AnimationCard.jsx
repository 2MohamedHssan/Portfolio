import React from "react";

function AnimationCard({ Animation, animationName }) {
  return (
    <div
      className={`cursor-pointer hover:scale-[0.98] hover:opacity-70 duration-500 text-center w-fit gap-2`}
    >
      <div>{Animation}</div>
      <h1 className="text-center text-gray-300 mt-2">{animationName}</h1>
    </div>
  );
}

export default AnimationCard;
