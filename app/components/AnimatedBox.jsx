import React, { useRef, useState } from "react";

const AnimatedBox = ({ children, className }) => {
  const itemRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState("");
  const handleMouseMove = (e) => {
    if (!itemRef.current) return;
    const { left, width, top, height } =
      itemRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;
    const titlX = (relativeX - 0.5) * 15;
    const titlY = (relativeY - 0.5) * -15;
    const newTransform = `perspective(700px) rotateX(${titlX}deg) rotateY(${titlY}deg) scale3d(0.95, 0.95, 0.95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      ref={itemRef}
      className={className}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export default AnimatedBox;
