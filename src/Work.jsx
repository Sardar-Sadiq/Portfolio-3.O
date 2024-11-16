import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./work.css";

const projects = [
  {
    id: 1,
    title: "Portfolio Mastery",
    description: "A sleek and responsive portfolio website for professionals to showcase their work and skills.",
    image: "https://images.unsplash.com/photo-1550642952-78f8caa0d4b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 2,
    title: "EcoTravel Guide",
    description: "An eco-friendly travel guide to help users discover sustainable destinations and green accommodations.",
    image: "https://images.unsplash.com/photo-1565685818459-66c969b9f257?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 3,
    title: "Recipe Haven",
    description: "A dynamic recipe-sharing platform for food enthusiasts to share and discover culinary delights.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 4,
    title: "Event Horizon",
    description: "An event management app with a user-friendly interface for organizing and discovering local events.",
    image: "https://images.unsplash.com/photo-1565120130296-d8f681b15b2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 5,
    title: "Fitness Pro",
    description: "A modern fitness tracker with workout plans, meal tracking, and progress analytics for users.",
    image: "https://images.unsplash.com/photo-1599058917215-396dc6d2d7b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 6,
    title: "Cryptovault",
    description: "A crypto portfolio tracker with real-time updates, analysis, and educational resources.",
    image: "https://images.unsplash.com/photo-1635790109074-8a8220a0b27e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 7,
    title: "ArtHub",
    description: "A community-driven platform for artists to showcase their work, connect, and sell their creations.",
    image: "https://images.unsplash.com/photo-1600552039621-0f6410f5c3f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 8,
    title: "EduConnect",
    description: "An e-learning platform that connects students and tutors through interactive virtual classes.",
    image: "https://images.unsplash.com/photo-1584697964190-820a57ed1f80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 9,
    title: "Travel Tails",
    description: "A blog-driven travel website featuring offbeat destinations, tips, and itineraries.",
    image: "https://images.unsplash.com/photo-1523301343968-6a6f7f7e8aaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 10,
    title: "Gamer's Nexus",
    description: "A gaming portal with reviews, forums, and the latest news about trending games and consoles.",
    image: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
];


const Work = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const mainContentRef = useRef(null);
  const sidebarRef = useRef(null);
  const projectRefs = useRef([]);

  // Handle screen resize for responsiveness
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animate main content when a project changes
  useEffect(() => {
    if (mainContentRef.current) {
      gsap.fromTo(
        mainContentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
    }
  }, [selectedProject]);

  // Animate the sidebar projects
  useEffect(() => {
    if (projectRefs.current) {
      projectRefs.current.forEach((ref, index) => {
        if (ref) {
          gsap.fromTo(
            ref,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8, delay: index * 0.2, ease: "power3.out" }
          );
        }
      });
    }
  }, [projects]);

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  const handleMouseMove = (e) => {
    const positionY = e.touches ? e.touches[0].clientY : e.clientY;
    scrollSidebar(positionY);
  };

  const scrollSidebar = (positionY) => {
    const sidebar = sidebarRef.current;
    if (sidebar) {
      const sidebarHeight = sidebar.offsetHeight;
      const windowHeight = window.innerHeight;
      const maxScroll = sidebar.scrollHeight - sidebarHeight;
      const scrollPosition = (positionY / windowHeight) * maxScroll;
      sidebar.scrollTop = Math.min(Math.max(scrollPosition, 0), maxScroll);
    }
  };
  useEffect(() => {
    if (isMobile) {
      // GSAP ScrollTrigger animations for mobile
      if (projectRefs.current) {
        projectRefs.current.forEach((ref, index) => {
          if (ref) {
            gsap.fromTo(
              ref,
              { opacity: 0, y: 50 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: index * 0.1,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: ref,
                  start: "top 90%",
                  end: "top 70%",
                  toggleActions: "play none none none",
                },
              }
            );
          }
        });
      }
    }
  }, [isMobile]);
  

  if (isMobile) {
    // Mobile layout
    return (
      <div className="bg-black text-white min-h-screen  px-4 py-8">
        <header className="text-center pb-6">
          <h1 className="text-4xl font-bold mt-10 uppercase">Our Projects</h1>
        </header>
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              className="bg-gray-900 rounded-lg p-4 transform transition duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    // Desktop layout
    return (
      <div className="flex flex-row bg-black text-white h-screen">
        {/* Left Main Content */}
        <div className="flex-1 pt-24 px-8 h-auto sticky top-0">
          <div ref={mainContentRef}>
            <h1 className="text-4xl font-bold mb-4">{selectedProject.title}</h1>
            <p className="text-lg mb-6">{selectedProject.description}</p>
            <div className="overflow-hidden rounded-lg">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-[70vh] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div
          ref={sidebarRef}
          className="w-24 h-screen overflow-y-scroll flex flex-col items-center pt-16 space-y-3 scrollbar-hidden"
          onMouseMove={handleMouseMove}
          onTouchMove={handleMouseMove}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleProjectSelect(project)}
              className={`cursor-pointer transition-all duration-300 ${
                selectedProject.id === project.id ? "opacity-100" : "opacity-70 hover:opacity-100"
              }`}
              aria-label={`Select ${project.title}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className={`w-20 h-32 object-cover transition-opacity duration-300 ${
                  selectedProject.id !== project.id ? "bg-black opacity-50" : ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Work;
