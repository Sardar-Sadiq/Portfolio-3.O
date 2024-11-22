import React, { useEffect, useState } from "react";
import "./Myproject.css";

const Myproject = () => {
  const text = "MY PROJECTS"; // The text to display
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % text.length); // Loop over text characters
    }, 300); // Adjust the speed of the glow
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




//whole animation text
// import React from "react";
// import "./Myproject.css";

// const Myproject = () => {
//   const text = "MY PROJECTS"; 

//   return (
//     <h1 className="doto-round">
//       {text.split("").map((char, index) => (
//         <span key={index} style={{ visibility: char === " " ? "hidden" : "visible" }}>
//           {char}
//         </span>
//       ))}
//     </h1>
//   );
// };

// export default Myproject;
