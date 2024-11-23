import React, { useEffect, useState } from "react";

const FireEffectFooter = () => {
  const [fireString, setFireString] = useState("");

  // Width remains the same, height reduced to half
  const width = 205;
  const height = 14; // Reduced from 28 to 14

  const fireChars = " ,;+ltgti!lI?/\\|)(1}{][rcvzjftJUOQocxfXhqwWB8&%$#@";
  const maxCharIndex = fireChars.length;

  const firePixelsArray = Array(width * height + 1).fill(0);

  const generateFire = () => {
    let fireString = "";

    for (let i = 0; i < width; i++) {
      let randomCol = Math.floor(Math.random() * width);
      let index = randomCol + width * (height - 1);
      firePixelsArray[index] = Math.floor(Math.random() * maxCharIndex);
    }

    for (let i = 0; i < width; i++) {
      let randomCol = Math.floor(Math.random() * width);
      let index = randomCol + width * (height - 1);
      firePixelsArray[index] = 0;
    }

    for (let i = 0; i < width * (height - 1); i++) {
      let averageValue =
        (firePixelsArray[i] +
          firePixelsArray[i + 1] +
          firePixelsArray[i + width] +
          firePixelsArray[i + width + 1]) / 4;

      firePixelsArray[i] = Math.floor(averageValue);

      fireString += fireChars[firePixelsArray[i]];
      if (i % width === 0) fireString += `\n`;
    }

    setFireString(fireString);
    setTimeout(generateFire, 30);
  };

  useEffect(() => {
    generateFire();
  }, []);

  return (
    <div
      className="fire-effect-container"
      style={{
        width: "auto",
        height: "auto",
        position: "relative",
      }}
    >
      <pre
        id="fire"
        style={{
          color: "#FFFFFF", // Fire text color
          margin: 0,
          padding: 0,
          fontSize: "14px", // Adjusted font size to scale with reduced height
          lineHeight: 1.4, // Adjusted line height for better spacing
          position: "absolute",
          bottom: 0,
          borderRadius: "3rem",
        }}
      >
        {fireString}
      </pre>

      {/* Add CSS for responsive visibility */}
      <style>
        {`
          @media (max-width: 768px) {
            .fire-effect-container {
              display: none; /* Hide component on smaller screens */
            }
          }
        `}
      </style>
    </div>
  );
};

export default FireEffectFooter;
