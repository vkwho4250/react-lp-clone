import { useState } from "react";
import { motion } from "framer-motion";
import Animations from "../../animation";

const MenuPageNav = ({
   page,
   index,
   changeMenuOpened,
   changeCurrentSection,
}) => {
   const [onHover, setOnHover] = useState(false);

   const changeOnHover = (e) => {
      if (e.type === "mouseenter") {
         setOnHover(true);
      } else {
         setOnHover(false);
      }
   };

   const handleClick = () => {
      changeCurrentSection(`${page.link}-page`);
      changeMenuOpened();
   };

   return (
      <a href={`/#${page.link}-page`} onClick={handleClick}>
         <button
            id={`${page.link}-menu-btn`}
            className="menu-page-nav"
            onMouseEnter={changeOnHover}
            onMouseLeave={changeOnHover}
         >
            <motion.h2
               variant={Animations.movement}
               animate={
                  onHover
                     ? { x: "5%", y: 0, color: "rgb(255,255,255)" }
                     : "endingXY"
               }
               transition={{ duration: 0.2 }}
            >
               {page.text}
            </motion.h2>
            <motion.h3
               animate={
                  onHover
                     ? { x: "100%", y: 0, scale: -1 }
                     : { x: 0, y: 0, scale: -1 }
               }
            >{`0${index + 1}`}</motion.h3>
            <motion.div
               className="bottom-line"
               variant={Animations.movement}
               animate={
                  onHover
                     ? { x: "275%", y: 0, opacity: 1, width: "15%" }
                     : { x: 0, y: 0, opacity: 0, width: "20%" }
               }
            ></motion.div>
         </button>
      </a>
   );
};

export default MenuPageNav;
