import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import PageLayout from "../components/section/PageLayout";
import Animations from "../animation";

const Awards = ({ changeRequestOpened, changeCurrentSection }) => {
   const description =
      "Keeping abreast of the latest trends in graphic and web design is our primary concern. Confirmation of this is our rewards.";

   const controls = useAnimation();
   const [ref, inView] = useInView();

   useEffect(() => {
      if (inView) {
         controls.start("endingXY");
         changeCurrentSection("awards-page");
      } else {
         controls.start("initialX");
      }
   }, [controls, inView]);

   return (
      <section id="awards-page" className="page-view dark">
         <div className="main-container">
            <PageLayout
               firstHeader="Our"
               secondHeader="Awards"
               description={description}
               btnText="Start Project"
               display="dark"
               changeRequestOpened={changeRequestOpened}
               image="awards"
            />
            <motion.ul
               className="awards-list-container"
               ref={ref}
               variants={Animations.movement}
               initial="initialX"
               custom={-20}
               animate={controls}
               transition={{ duration: 0.75, delay: 0.5 }}
            >
               <li className="award">
                  <h1>
                     A<span>www</span>ards
                  </h1>
                  <div>
                     <p className="description">Honorable Mention x 0</p>
                     <p className="description">Mobile Site x 0</p>
                  </div>
               </li>
               <li className="award">
                  <h1>
                     CSS<span>W</span>INNER
                  </h1>
                  <p className="description">Site of the day x 0</p>
               </li>
               <li className="award">
                  <h1>
                     Web <span>Guru</span> Awards
                  </h1>
                  <p className="description">Site of the day x 0</p>
               </li>
               <li className="award">
                  <h1>Boostlizer</h1>
                  <p className="description">Site of the day x 0</p>
               </li>
               <li className="award">
                  <h1>
                     <span>CSS</span>Reel
                  </h1>
                  <p className="description">Site of the day x 0</p>
               </li>
            </motion.ul>
         </div>
      </section>
   );
};

export default Awards;
