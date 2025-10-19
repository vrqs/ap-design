"use client";

import React, {
  useState,
  useEffect,
  useRef,
} from "react";

interface ProjectsSliderProps {
  projects: string[];
}

const ProjectsSlider = ({ projects }: ProjectsSliderProps) => {
  const [currentProject, setCurrentProject] = useState<number>(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [viewportWidth, setViewportWidth] = useState<number>(0);
  const sliderRef = useRef(null);
  const slideW = 912;
  const slideGap = 16;

  const getTransform = () => {    
    const viewportCenter = viewportWidth / 2;
    const slideCenter = slideW / 2;
    const offset = viewportCenter - slideCenter;
    const slideOffset = currentProject * (slideW + slideGap);
    
    return offset - slideOffset;
  };

  // Sets initial ViewPort width and updates on resize
  useEffect(() => {
    const updateWidth = () => setViewportWidth(window.innerWidth);
    updateWidth();

    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });
  
  const goToSlide = (slide: number) => {
    setCurrentProject(slide);
  }
 
  // useEffect(() => {
  //   goToSlide(0);
  // });

  return (
    <div className="projects-gallery-wrapper">
      <div
        className="projects-gallery"
        ref={sliderRef}
        style={{
          transform: `translateX(${getTransform()}px)`,
          transition: isTransitioning ? "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
          willChange: "transform",
        }}
      >
        {projects.map((project, index) =>
          <div className="project-slide" key={index}>
            {/* <Image src="/project-1.png" alt="" width={912} height={550} /> */}
          </div>
        )}      
      </div>
    </div>
  )
}

export default ProjectsSlider;