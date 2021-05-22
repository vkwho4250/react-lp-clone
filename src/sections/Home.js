import { ReactComponent as Triangle } from "../assets/triangle.svg";
import Badge from "../components/section/Badge";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Home = ({ changeCurrentSection }) => {
   const panels = [...Array(5).keys()];

   const [ref, inView] = useInView();

   useEffect(() => {
      if (inView) {
         changeCurrentSection("home-page");
      }
   }, [inView]);

   return (
      <section id="home-page" className="page-view">
         <div className="panel-container" ref={ref}>
            <div className="side-badges">
               <Badge text="Honors" color="#9BD4D7" />
               <Badge text="Mobile Award" color="#EE762D" />
            </div>
            <Triangle className="triangle" />
            <div className="mouse-scroll">
               <div className="scroll"></div>
            </div>

            <div className="title-container silhouette">
               <h1 className="title-clone">CLONING</h1>
               <h1 className="title-agency">AGENCY</h1>
            </div>
            <div className="title-container">
               <h1 className="title-clone">CLONING</h1>
               <h1 className="title-agency">AGENCY</h1>
               <div className="subheading">
                  <h4>
                     Not for commercial use. This is a webpage clone used purely
                     for practice.
                  </h4>
                  <h4>
                     Reference Site:{" "}
                     <a
                        href="https://evoxlab.com/#home"
                        target="_blank"
                        rel="noreferrer"
                     >
                        EXOVLAB
                     </a>
                  </h4>
               </div>
            </div>

            <div className="panel-display home">
               {panels.map((key) => {
                  return (
                     <div
                        key={key}
                        className={`lift-panel panel-${key} ${
                           key !== 4 ? "border " : ""
                        }`}
                     ></div>
                  );
               })}
            </div>
         </div>
      </section>
   );
};

export default Home;
