import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import imagesLoaded from 'imagesloaded';
import './Hero.css';  // Import Tailwind styles and custom styles if needed

const Hero = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const images = document.querySelectorAll('img');
    
    const showDemo = () => {
      document.body.style.overflow = 'auto';
      document.scrollingElement.scrollTo(0, 0);

      document.querySelectorAll('section').forEach((section, index) => {
        const w = section.querySelector('.wrapper');
        const [x, xEnd] = index % 2 === 0 ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
        
        gsap.fromTo(w, { x }, {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            start: "top top", // Start when the top of the section hits the top of the viewport
            end: "bottom top", // End when the bottom of the section reaches the top of the viewport
            scrub: 0.5,
            pin: true,  // Pin section during animation
          },
        });
      });
    };

    imagesLoaded(images).on('always', showDemo);
  }, []);

  return (
    <div className="bg-black text-white">
      <section className="demo-text">
        <div className="wrapper text flex items-center justify-center text-4xl font-extrabold">
          Development Designing
        </div>
      </section>

      {[...Array(4)].map((_, i) => (
        <section className="demo-gallery" key={i}>
          <ul className="wrapper flex">
            {[...Array(Math.floor(Math.random() * 3) + 3)].map((_, j) => (
              <li key={j}>
                <img
                  src={`https://source.unsplash.com/random/300x300?sig=${Math.floor(Math.random() * 206)}`}
                  alt={`Random ${j}`}
                  width={300}
                  height={300}
                />
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section className="demo-text">
        <div className="wrapper text flex items-center justify-center text-4xl font-extrabold">
          Development Designing
        </div>
      </section>
    </div>
  );
};

export default Hero;
