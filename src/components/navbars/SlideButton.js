import { motion } from "framer-motion";
import { useState } from "react";

const SlideButton = ({ text, direction = "right", weight = "default" }) => {
   const [onHover, setOnHover] = useState(false);

   const changeOnHover = (e) => {
      if (e.type === "mouseenter") {
         setOnHover(true);
      } else {
         setOnHover(false);
      }
   };

   return (
      <button
         id={`${text}-btn`}
         className="slide-btn"
         onMouseEnter={changeOnHover}
         onMouseLeave={changeOnHover}
      >
         <motion.div
            className={`text-container ${direction}`}
            initial={{ x: direction === "right" ? 0 : -25 }}
            animate={
               onHover
                  ? { x: direction === "right" ? -25 : 0 }
                  : { x: direction === "right" ? 0 : -25 }
            }
            transition={{ duration: 1, type: "spring", bounce: 0.5 }}
         >
            <motion.h3 className={`${weight} ${direction} primary-text`}>
               {text}
            </motion.h3>
            <h3 className={`secondary-color ${weight} ${direction}`}>{text}</h3>
         </motion.div>
      </button>
   );
};

export default SlideButton;
