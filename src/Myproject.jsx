// import React, { useEffect, useState } from "react";
// import "./Myproject.css";

// const Myproject = () => {
//   const text = "MY PROJECTS"; 
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % text.length);
//     }, 300);
//     return () => clearInterval(interval);
//   }, [text.length]);

//   return (
//     <h1 className="doto-round">
//       {text.split("").map((char, index) => (
//         <span
//           key={index}
//           className={activeIndex === index ? "active" : ""}
//           style={{ visibility: char === " " ? "hidden" : "visible" }} 
//         >
//           {char}
//         </span>
//       ))}
//     </h1>
//   );
// };

// export default Myproject;




//whole animation text
import React from "react";
import "./Myproject.css";

const Myproject = () => {
  const text = "MY PROJECTS"; 

  return (
    <h1 className="doto-round">
      {text.split("").map((char, index) => (
        <span key={index} style={{ visibility: char === " " ? "hidden" : "visible" }}>
          {char}
        </span>
      ))}
    </h1>
  );
};

export default Myproject;
