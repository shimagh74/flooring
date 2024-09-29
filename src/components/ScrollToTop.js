// src/components/ScrollToTop.jsx
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle the visibility of the scroll button
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <div
          className="fixed bottom-8 left-8 bg-white text-accent border-accent border-[1px]   p-3 rounded-full shadow-lg cursor-pointer"
          onClick={scrollToTop}
        >
          <FaArrowUp className="w-6 h-6" />
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
