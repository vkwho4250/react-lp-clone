import { motion } from "framer-motion";

const MenuBtn = ({ changeMenuOpened }) => {
   const menuText = ["M", "E", "N", "U"];

   return (
      <button onClick={changeMenuOpened} id="menu-btn">
         <div>
            {menuText.map((letter, index) => {
               return (
                  <motion.h1
                     key={index}
                     animate={{
                        x: [40, 40, 0, 0, -40, -40],
                        y: [0, 0, 0, 0, 0, 0],
                     }}
                     transition={{
                        duration: 8,
                        times: [0, 0.1, 0.2, 0.6, 0.7, 1],
                        repeat: Infinity,
                        delay: 0.2 * index,
                     }}
                  >
                     {letter}
                  </motion.h1>
               );
            })}
         </div>
         <div className="yellow-menu">
            {menuText.map((letter, index) => {
               return (
                  <motion.h1
                     key={index}
                     animate={{
                        x: [40, 40, 0, 0, -40, -40],
                        y: [0, 0, 0, 0, 0, 0],
                     }}
                     transition={{
                        duration: 8,
                        times: [0, 0.1, 0.2, 0.6, 0.7, 1],
                        repeat: Infinity,
                        delay: 4 + 0.2 * index,
                     }}
                  >
                     {letter}
                  </motion.h1>
               );
            })}
         </div>
      </button>
   );
};

export default MenuBtn;
