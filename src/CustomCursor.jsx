import React, { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    // Apply default custom cursor globally
    document.body.style.cursor = "url('src/assets/cursor .cur'), auto";

    return () => {
      // Reset to the default cursor when the component unmounts
      document.body.style.cursor = "auto";
    };
  }, []);

  return null; // No UI elements required
};

export default CustomCursor;
