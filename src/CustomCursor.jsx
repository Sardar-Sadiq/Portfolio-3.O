import React, { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    // Apply default custom cursor globally
    document.body.style.cursor = "url('/Cursor.png'), auto";

    // Event listener to switch to the pointer cursor on hover
    const handlePointerCursor = (event) => {
      const targetTag = event.target.tagName;
      // Check if the hovered element is interactive (e.g., <a> or <button>)
      if (targetTag === "A" || targetTag === "BUTTON") {
        event.target.style.cursor = "url('/Pointer.png'), auto";
      }
    };

    // Event listener to reset to default cursor when not on interactive elements
    const resetToDefaultCursor = (event) => {
      event.target.style.cursor = "url('/Cursor.png'), auto";
    };

    // Attach event listeners to the document
    document.addEventListener("mouseover", handlePointerCursor);
    document.addEventListener("mouseout", resetToDefaultCursor);

    // Cleanup event listeners and reset the cursor on unmount
    return () => {
      document.body.style.cursor = "auto";
      document.removeEventListener("mouseover", handlePointerCursor);
      document.removeEventListener("mouseout", resetToDefaultCursor);
    };
  }, []);

  return null; // No UI elements required
};

export default CustomCursor;
