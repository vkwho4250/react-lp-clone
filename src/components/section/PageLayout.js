import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import YellowButton from "../global/YellowButton";
import SlidingText from "./SlidingText";
import PulseButton from "./PulseButton";
import Animations from "../../animation";

const PageLayout = ({
   firstHeader,
   secondHeader,
   description,
   btnText,
   display = "light",
   changeRequestOpened,
   image,
}) => {
   const controls = useAnimation();
   const [ref, inView] = useInView();

   useEffect(() => {
      if (inView) {
         controls.start("endingXY");
      } else {
         controls.start("initialX");
      }
   }, [controls, inView]);

   return (
      <div className={`page-default ${display}`} ref={ref}>
         <motion.div
            variants={Animations.movement}
            initial="initialX"
            custom={-20}
            animate={controls}
            transition={{ duration: 0.75 }}
         >
            <div className="heading-text">
               <h2>{firstHeader}</h2>
               <h2>{secondHeader}</h2>
            </div>
            <SlidingText image={image} />
         </motion.div>
         <motion.h5
            className="description"
            variants={Animations.movement}
            initial="initialX"
            custom={-20}
            animate={controls}
            transition={{ duration: 0.75, delay: 0.25 }}
         >
            {description}
         </motion.h5>
         <motion.div
            className="yellow-btn-container"
            variants={Animations.movement}
            initial="initialX"
            custom={-20}
            animate={controls}
            transition={{ duration: 0.75, delay: 0.75 }}
         >
            <YellowButton
               text={btnText}
               changeRequestOpened={changeRequestOpened}
            />
         </motion.div>
         <PulseButton />
      </div>
   );
};

export default PageLayout;
