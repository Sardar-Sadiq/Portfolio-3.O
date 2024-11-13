import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./work.css";

const projects = [
  {
    id: 1,
    title: "Galactic Odyssey",
    description: "Explore the distant reaches of the galaxy in this sci-fi adventure game with stunning visuals and intricate storyline.",
    image: "https://images.unsplash.com/photo-1529220519467-1f376a6e14fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDc5M3wwfDF8c2VhcmNofDF8fGdhbGF4eXxlbnwwfHx8&ixlib=rb-1.2.1&q=80&w=400"
  },
  {
    id: 2,
    title: "Urban Explorer",
    description: "Discover hidden gems and street art in various cities through an interactive urban exploration experience.",
    image: "https://images.unsplash.com/photo-1527203562890-9d4bbf6f67d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDc5M3wwfDF8c2VhcmNofDV8fHVyYmFufGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400"
  },
  {
    id: 3,
    title: "Nature's Symphony",
    description: "A calming journey through nature, combining visual beauty and soothing sounds for a stress-free experience.",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDc5M3wwfDF8c2VhcmNofDZ8fG5hdHVyZXxlbnwwfHx8&ixlib=rb-1.2.1&q=80&w=400"
  },
  {
    id: 4,
    title: "Tech Innovators",
    description: "Follow the stories of groundbreaking innovators in technology, changing the world one invention at a time.",
    image: "https://images.unsplash.com/photo-1532074205216-d0e1fdf44de0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDc5M3wwfDF8c2VhcmNofDh8fHRlY2h8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&q=80&w=400"
  },
  {
    id: 5,
    title: "Underwater Wonders",
    description: "Dive into the mysterious underwater world and explore the unique flora and fauna of the ocean.",
    image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDc5M3wwfDF8c2VhcmNofDJ8fG9jZWFufGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400"
  },
  {
    id: 6,
    title: "Space Frontier",
    description: "Embark on a journey through space, witnessing celestial wonders and discovering new planets.",
    image: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDc5M3wwfDF8c2VhcmNofDN8fHNwYWNlfGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400"
  },
  {
    id: 7,
    title: "Historic Journeys",
    description: "Walk through history with detailed stories and visuals of significant events and figures from the past.",
    image: "https://images.unsplash.com/photo-1542345812-d98b5cd6cf98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDc5M3wwfDF8c2VhcmNofDV8fGhpc3Rvcnl8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&q=80&w=400"
  },
  {
    id: 8,
    title: "Mountain Majesty",
    description: "Experience the awe of towering mountain landscapes and rugged terrains with breathtaking views.",
    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDc5M3wwfDF8c2VhcmNofDZ8fG1vdW50YWlufGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400"
  },
  {
    id: 9,
    title: "Art of the City",
    description: "Explore vibrant urban art scenes and the creative voices behind murals, graffiti, and street installations.",
    image: "https://images.unsplash.com/photo-1517022218-f5b9f07779f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDc5M3wwfDF8c2VhcmNofDN8fHN0cmVldCUyMGFydHxlbnwwfHx8fHw%3D&ixlib=rb-1.2.1&q=80&w=400"
  }
];


const Work = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const mainContentRef = useRef(null);
  const sidebarRef = useRef(null);

  // Detect screen resize for responsive design
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animate main content on project change
  useEffect(() => {
    gsap.fromTo(
      mainContentRef.current,
      { opacity: 0, y: isMobile ? 20 : 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
  }, [selectedProject, isMobile]);

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  const handleMouseMove = (e) => {
    if (e.touches) {
      // For touch events
      const touch = e.touches[0];
      scrollSidebar(touch.clientY);
    } else {
      // For mouse events
      scrollSidebar(e.clientY);
    }
  };

  const scrollSidebar = (positionY) => {
    const sidebar = sidebarRef.current;
    const sidebarHeight = sidebar.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollPosition = (positionY / windowHeight) * (sidebar.scrollHeight - sidebarHeight);
    sidebar.scrollTop = scrollPosition;
  };

  return (
    <div className="flex flex-col md:flex-row bg-[black] text-white h-screen">
      {/* Main Content - Fixed Section */}
      <div className="flex-1 pt-[100px] px-4 md:px-8 h-screen md:h-auto md:sticky top-0">
        <div ref={mainContentRef}>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
            {selectedProject.title}
          </h1>
          <p className="text-base md:text-lg mb-6 text-center md:text-left">
            {selectedProject.description}
          </p>
          <div className="overflow-hidden rounded-lg">
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full md:w-[80vw] h-[40vh] md:h-[70vh] object-cover object-center rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Sidebar with Hover and Touch Scroll */}
      <div
  ref={sidebarRef}
  className={`w-full md:w-24 h-[20vh] md:h-screen overflow-y-scroll flex md:flex-col flex-row items-center md:items-start md:pt-[80px] space-x-3 md:space-x-0 space-y-0 md:space-y-3 scrollbar-hidden mt-4 md:mt-0 ${
    isMobile
      ? "fixed bottom-0 left-0 right-0 bg-black bg-opacity-80 overflow-x-scroll"
      : ""
  }`}
  onMouseMove={handleMouseMove}
  onTouchMove={handleMouseMove}
>
  {projects.map((project) => (
    <div
      key={project.id}
      onClick={() => handleProjectSelect(project)}
      className={`cursor-pointer transition-all duration-300 ${
        selectedProject.id === project.id
          ? "opacity-100 "
          : "opacity-70 hover:opacity-100"
      }`}
    >
      <img
        src={project.image}
        alt={project.title}
        className={`w-10 md:w-20 h-20 md:h-32 object-cover transition-opacity duration-300 ${
          selectedProject.id !== project.id ? "bg-black opacity-50" : ""
        }`}
      />
    </div>
  ))}
</div>

    </div>
  );
};

export default Work;
