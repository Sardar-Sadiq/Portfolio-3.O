import React, { useEffect, useState } from "react";
import "./Myproject.css"; // Add the CSS styles here

const Myproject = () => {
  const text = "My Projects"; // The text to display
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % text.length); // Move to the next pixel
    }, 300); // Adjust the speed (in ms)
    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [text.length]);

  return (
    <h1 className="doto-round">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={activeIndex === index ? "active" : ""}
          style={{ visibility: char === " " ? "hidden" : "visible" }} // Hide spans for spaces
        >
          {char}
        </span>
      ))}
    </h1>
  );
};

export default Myproject;
