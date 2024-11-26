import React, { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    // Set the default custom cursor globally
    document.body.style.cursor = "url('src/assets/cursor .cur'), auto";

    return () => {
      // Reset the cursor to the default when the component unmounts
      document.body.style.cursor = "auto";
    };
  }, []);

  return null; // No visual elements are needed for this component
};

export default CustomCursor;
