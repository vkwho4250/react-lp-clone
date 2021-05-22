import { motion } from "framer-motion";
import { useState } from "react";

import Animations from "../../animation";

const PageNavBtn = ({ page, index, currentSection }) => {
   const [onHover, setOnHover] = useState(false);

   const changeOnHover = (e) => {
      if (e.type === "mouseenter") {
         setOnHover(true);
      } else {
         setOnHover(false);
      }
   };

   return (
      <a
         href={`#${page}-page`}
         id={`${page}-btn`}
         className={`page-btn ${
            currentSection === "projects-page" ||
            currentSection === "awards-page"
               ? "dark-mode"
               : ""
         }`}
         onMouseEnter={changeOnHover}
         onMouseLeave={changeOnHover}
      >
         <motion.div
            className="page-num-container"
            variants={Animations.collapse}
            animate={
               onHover || currentSection === `${page}-page` ? "open" : "close"
            }
         >
            <h4>{`0${index + 1}`}</h4>
         </motion.div>

         <motion.div
            className={`circle ${
               onHover || currentSection === `${page}-page` ? "yellow" : ""
            }`}
         ></motion.div>
         <motion.div
            className={index !== 6 ? "line" : ""}
            variants={Animations.collapse}
            animate={
               onHover || currentSection === `${page}-page` ? "open" : "close"
            }
         ></motion.div>
      </a>
   );
};

export default PageNavBtn;
