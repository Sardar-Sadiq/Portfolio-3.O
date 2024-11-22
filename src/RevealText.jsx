import React, { useEffect } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText"; // Correct path for SplitText
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "tailwindcss/tailwind.css";

const RevealText = () => {
  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);

    const split = new SplitText(".wrapper p", {
      type: "words",
      wordsClass: "word",
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: "#textSection",
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
        markers: true,
      },
    }).set(split.words, {
      opacity: 1,
      stagger: 0.1,
    });
  }, []);

  return (
    <section id="textSection">
      <div className="container">
        <div className="wrapper">
          <p className="white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            consectetur voluptatem quae ea similique adipisci reprehenderit vero
            voluptatum, debitis exercitationem nisi ad mollitia? Molestias veniam
            sint quisquam ea et dolorum nesciunt rem saepe id, amet vero,
            necessitatibus esse reiciendis molestiae.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RevealText;
