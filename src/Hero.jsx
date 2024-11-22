import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    // GSAP Scroll Animation
    gsap.utils.toArray("section").forEach((section, index) => {
      const wrapper = section.querySelector(".wrapper");
      const [x, xEnd] =
        index % 2
          ? ["100%", (wrapper.scrollWidth - section.offsetWidth) * -1]
          : [wrapper.scrollWidth * -1, 0];

      gsap.fromTo(
        wrapper,
        { x },
        {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            scrub: 1,
          },
        }
      );
    });
  }, []);

  return (
    <div className="relative overflow-hidden bg-black text-white">
      {/* Main Content */}
      <div className="demo-wrapper overflow-x-hidden">
        {/* First Demo Text */}
        <section className="demo-text py-12">
          <div className="wrapper text-5xl md:text-6xl font-extrabold text-center text-white">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
          </div>
        </section>

        {/* Demo Gallery Section */}
        {[...Array(4)].map((_, index) => (
          <section
            key={index}
            className="demo-gallery pb-8 bg-black text-white"
          >
            <ul className="wrapper flex flex-wrap justify-center">
              {[...Array(Math.floor(Math.random() * 2) + 3)].map(
                (_, imgIndex) => (
                  <li
                    key={imgIndex}
                    className="flex-shrink-0 w-[clamp(500px,60vw,800px)] p-4"
                  >
                    <img
                      src={`https://source.unsplash.com/random/1240x874?sig=${Math.floor(
                        Math.random() * 206
                      )}`}
                      alt="Random Unsplash"
                      className="w-full h-auto bg-gray-800"
                    />
                  </li>
                )
              )}
            </ul>
          </section>
        ))}

        {/* Second Demo Text */}
        <section className="demo-text py-12">
          <div className="wrapper text-5xl md:text-6xl font-extrabold text-center text-white">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
