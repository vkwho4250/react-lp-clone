import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import PageLayout from "../components/section/PageLayout";
import ListItem from "../components/section/ListItem";
import Animations from "../animation";

const Practice = ({ changeRequestOpened, changeCurrentSection }) => {
   const description =
      "We create premium web design, thoughtful and user-friendly interfaces that solve business problems";

   const leftList = ["UI Design", "UX Analytics", "Prototyping"];
   const rightList = ["Web Developement", "3D Modeling", "Design Thinking"];

   const controls = useAnimation();
   const [ref, inView] = useInView();

   useEffect(() => {
      if (inView) {
         controls.start("endingXY");
         changeCurrentSection("practice-page");
      } else {
         controls.start("initialX");
      }
   }, [controls, inView]);

   return (
      <section id="practice-page" className="page-view">
         <div className="main-container practice">
            <PageLayout
               firstHeader="What"
               secondHeader="We Do"
               description={description}
               btnText="Start Project"
               changeRequestOpened={changeRequestOpened}
               image="practice"
            />
            <motion.div
               className="page-right"
               ref={ref}
               variants={Animations.movement}
               initial="initialX"
               custom={-20}
               animate={controls}
               transition={{ duration: 0.75, delay: 0.5 }}
            >
               <div className="list-container">
                  <ul className="left-column">
                     {leftList.map((service, index) => {
                        return (
                           <ListItem key={index} index={index} item={service} />
                        );
                     })}
                  </ul>
                  <ul className="right-column">
                     {rightList.map((service, index) => {
                        return (
                           <ListItem
                              key={index}
                              index={index + leftList.length}
                              item={service}
                           />
                        );
                     })}
                  </ul>
               </div>
            </motion.div>
         </div>
      </section>
   );
};

export default Practice;
