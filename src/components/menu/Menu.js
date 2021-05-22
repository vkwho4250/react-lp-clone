import { motion } from "framer-motion";

import RightSidebar from "../navbars/RightSidebar";
import LeftSidebar from "../navbars/LeftSidebar";
import CloseBtn from "../global/CloseBtn";
import MenuPageNav from "./MenuPageNav";

const Menu = ({
   changeItemHovered,
   itemHovered,
   changeMenuOpened,
   changeRequestOpened,
   menuOpened,
   changeCurrentSection,
}) => {
   const pages = [
      {
         link: "practice",
         text: "What We Do",
      },
      {
         link: "awards",
         text: "Awards",
      },
      {
         link: "projects",
         text: "Projects",
      },
      {
         link: "services",
         text: "Services",
      },
      {
         link: "about",
         text: "Who we are",
      },
      {
         link: "contact",
         text: "Contact Us",
      },
   ];

   return (
      <motion.div
         animate={menuOpened ? { x: 2500, y: 0 } : { x: 0, y: 0 }}
         transition={{ duration: 1.5, type: "spring", bounce: 0.1 }}
         id="menu"
      >
         <RightSidebar
            changeItemHovered={changeItemHovered}
            itemHovered={itemHovered}
            changeRequestOpened={changeRequestOpened}
         />
         <LeftSidebar
            changeItemHovered={changeItemHovered}
            itemHovered={itemHovered}
         />
         <CloseBtn purpose={changeMenuOpened} />
         <ul className="page-right">
            {pages.map((page, index) => {
               return (
                  <li key={index}>
                     <MenuPageNav
                        page={page}
                        index={index}
                        changeItemHovered={changeItemHovered}
                        itemHovered={itemHovered}
                        changeMenuOpened={changeMenuOpened}
                        changeCurrentSection={changeCurrentSection}
                     />
                  </li>
               );
            })}
         </ul>
      </motion.div>
   );
};

export default Menu;
