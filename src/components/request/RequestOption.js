import { motion } from "framer-motion";
import { useState } from "react";

const RequestOption = ({ item }) => {
   const [checked, setChecked] = useState(false);

   const checkedBox = {
      rotate: -45,
      y: 4,
      height: 10,
      borderTop: "none",
      borderRight: "none",
      borderBottom: "3px solid #ebd301",
      borderLeft: "3px solid #ebd301",
   };
   const uncheckedBox = {
      rotate: 0,
      y: 0,
      height: 20,
   };

   const changeChecked = () => setChecked(!checked);

   return (
      <div name={item} className="option-item" onClick={changeChecked}>
         <motion.div
            className="checkbox"
            animate={checked ? checkedBox : uncheckedBox}
            transition={{ duration: 0.4 }}
         ></motion.div>
         <p>{item}</p>
      </div>
   );
};

export default RequestOption;
