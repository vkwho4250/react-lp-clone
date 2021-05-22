import { motion } from "framer-motion";
import { useState } from "react";

const RequestNumber = ({ number }) => {
   const [numberHovered, setNumberHovered] = useState(false);

   const changeNumberHovered = () => setNumberHovered(!numberHovered);

   return (
      <div
         className="request-number"
         onMouseEnter={changeNumberHovered}
         onMouseLeave={changeNumberHovered}
      >
         <h5>{number}</h5>
         <motion.div
            className="line-container"
            animate={numberHovered ? { x: -230, y: 0 } : { x: 0, y: 0 }}
            transition={{ duration: 0.75, type: "spring", bounce: 0.5 }}
         >
            <div className="number-line"></div>
            <div className="number-line"></div>
         </motion.div>
      </div>
   );
};

export default RequestNumber;
