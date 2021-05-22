import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import PageLayout from "../components/section/PageLayout";
import Animations from "../animation";

const About = ({ changeRequestOpened, changeCurrentSection }) => {
   const description =
      "We are a mix of design, technology and marketing. Our projects are a combination of creativity, trends and traditions. Our mission is to accompany you on your way to conquering the peaks of business.";

   const subheadings = [
      "Gathering Information: Purpose, Main Goals, and Target Audience",
      "Planning: Sitemap and Wireframe Creation",
      "Design: Page Layouts, Review, and Approval Cycle",
      "Content Writing and Assembly",
      "Coding",
      "Testing, Review and Launch",
      "Maintenance: Opinion Monitoring and Regular Updating",
   ];

   const controls = useAnimation();
   const [ref, inView] = useInView();

   useEffect(() => {
      if (inView) {
         controls.start("endingXY");
         changeCurrentSection("about-page");
      } else {
         controls.start("initialX");
      }
   }, [controls, inView]);

   return (
      <section id="about-page" className="page-view">
         <div className="main-container">
            <PageLayout
               firstHeader="Something"
               secondHeader="About Us"
               description={description}
               btnText="Start Project"
               changeRequestOpened={changeRequestOpened}
               image={"about"}
            />
            <motion.div
               className="text-content-container"
               ref={ref}
               variants={Animations.movement}
               initial="initialX"
               custom={-20}
               animate={controls}
               transition={{ duration: 0.75, delay: 0.5 }}
            >
               <h1>
                  This is a filler text, you don't have to read this. If you can
                  though, I'd be impressed ;&#93;{" "}
               </h1>
               <div className="paragraph-container">
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Vestibulum sed efficitur orci. Morbi metus eros, vehicula
                     eget faucibus et, ullamcorper vitae risus. Curabitur
                     interdum dictum sem, eget euismod augue pretium maximus.
                     Fusce ultrices, velit sit amet tempus porta, ipsum purus
                     laoreet tellus, a tincidunt tellus eros sit amet nulla.
                     Nunc euismod ex a efficitur tincidunt. Nulla accumsan quam
                     nec tellus porttitor, non suscipit lectus feugiat. Donec eu
                     mauris magna.
                  </p>
                  <h3 className="list-title">Website Development Life Cycle</h3>
                  <ol>
                     {subheadings.map((subheading, index) => {
                        return (
                           <li key={index}>
                              <h3>{subheading}</h3>
                              <p>
                                 Pellentesque mollis ultricies purus, sit amet
                                 ultricies dui. Aenean fermentum ultricies nulla
                                 sit amet rutrum. Aenean eros turpis, tempor et
                                 purus gravida, consequat cursus nibh. Aenean
                                 gravida neque arcu. Cras laoreet ligula vitae
                                 venenatis vehicula. Curabitur tincidunt, neque
                                 ut placerat bibendum, ipsum neque pretium
                                 metus, et scelerisque massa quam a arcu. Nam
                                 nulla elit, placerat sed turpis at, suscipit
                                 lobortis magna. Phasellus scelerisque, erat vel
                                 tristique malesuada, arcu eros bibendum nibh,
                                 vitae ornare lorem dui et ex.
                              </p>
                           </li>
                        );
                     })}
                  </ol>
               </div>
            </motion.div>
         </div>
      </section>
   );
};

export default About;
