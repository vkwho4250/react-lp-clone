import { useState, useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import ProjectPanel from "../components/section/ProjectPanel";

const Projects = ({ changeCurrentSection }) => {
   const projects = [
      {
         client: "ABC Group",
         description: "Corporate Site for ABC",
         letter: "A",
         img: "abc-project.png",
      },
      {
         client: "DEF Design",
         description: "Designer Site for DGF",
         letter: "D",
         img: "def-project.png",
      },
      {
         client: "GHI Tracking",
         description: "Tracking and Delivery Website",
         letter: "G",
         img: "ghi-project.png",
      },
      {
         client: "JKL Inc.",
         description: "Data Visualization Software and Services",
         letter: "J",
         img: "jkl-project.png",
      },
      {
         client: "MNO Eatery",
         description: "Online Ordering Website for Restaurant ",
         letter: "M",
         img: "mno-project.png",
      },
   ];

   const [hoverPanel, setHoverPanel] = useState("");

   function whichPanel(e) {
      if (e.type === "mouseleave") {
         setHoverPanel("");
         console.log("hover");
      } else {
         setHoverPanel(e.currentTarget.id);
      }
   }

   const controls = useAnimation();
   const [ref, inView] = useInView();

   useEffect(() => {
      if (inView) {
         controls.start("endingXY");
         changeCurrentSection("projects-page");
      } else {
         controls.start("initialY");
      }
   }, [controls, inView]);

   return (
      <section id="projects-page" className="page-view dark">
         <div className="main-container" ref={ref}>
            <div className="panel-display">
               {projects.map((project, index) => {
                  return (
                     <ProjectPanel
                        key={index}
                        index={index}
                        project={project}
                        whichPanel={whichPanel}
                        hoverPanel={hoverPanel}
                        controls={controls}
                     />
                  );
               })}
            </div>
         </div>
      </section>
   );
};

export default Projects;
