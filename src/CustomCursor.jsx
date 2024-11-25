import React, { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    // Set the default custom cursor
    document.body.style.cursor = "url('src/assets/cursor .cur'), auto";

    // Function to switch to pointer cursor on hover
    const applyPointerCursor = (event) => {
      if (event.target.tagName === "A" || event.target.tagName === "BUTTON") {
        event.target.style.cursor = "url('src/assets/pointer.cur'), pointer";
      }
    };

    // Function to reset to default cursor
    const resetCursor = (event) => {
      event.target.style.cursor = "url('src/assets/cursor .cur'), auto";
    };

    // Add event listeners to handle pointer hover
    document.addEventListener("mouseover", applyPointerCursor);
    document.addEventListener("mouseout", resetCursor);

    return () => {
      // Cleanup event listeners
      document.removeEventListener("mouseover", applyPointerCursor);
      document.removeEventListener("mouseout", resetCursor);
      document.body.style.cursor = "auto"; // Reset to default cursor
    };
  }, []);

  return null; // No UI elements needed for this component
};

export default CustomCursor;
