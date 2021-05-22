import { motion } from "framer-motion";
import { useState } from "react";

import YellowButton from "./YellowButton";

const InputForm = () => {
   const [formInputs, setFormInputs] = useState({
      name: "",
      email: "",
      theme: "",
      message: "",
   });

   const updateForm = (e) => {
      setFormInputs({
         ...formInputs,
         [e.target.id]: e.target.value,
      });
   };

   const submitForm = (e) => {
      setFormInputs({
         name: "",
         email: "",
         theme: "",
         message: "",
      });
      e.preventDefault();
   };

   return (
      <form id="contact-form" onSubmit={submitForm}>
         <label htmlFor="name">
            <motion.span
               animate={
                  formInputs.name.length > 0 ? { opacity: 1 } : { opacity: 0 }
               }
            >
               Name
            </motion.span>
            <input
               id="name"
               type="text"
               placeholder="Name*"
               name="name"
               required
               onChange={updateForm}
               value={formInputs.name}
            />
         </label>
         <label htmlFor="email">
            <motion.span
               animate={
                  formInputs.email.length > 0 ? { opacity: 1 } : { opacity: 0 }
               }
            >
               Email
            </motion.span>
            <input
               id="email"
               type="email"
               placeholder="Email*"
               name="email"
               required
               onChange={updateForm}
               value={formInputs.email}
            />
         </label>
         <label htmlFor="theme">
            <motion.span
               animate={
                  formInputs.theme.length > 0 ? { opacity: 1 } : { opacity: 0 }
               }
            >
               Message Theme
            </motion.span>
            <input
               id="theme"
               type="text"
               placeholder="Message theme"
               onChange={updateForm}
               value={formInputs.theme}
            />
         </label>
         <label htmlFor="message">
            <motion.span
               animate={
                  formInputs.message.length > 0
                     ? { opacity: 1 }
                     : { opacity: 0 }
               }
            >
               Message
            </motion.span>
            <textarea
               id="message"
               rows="2"
               placeholder="How can we help you?"
               onChange={updateForm}
               value={formInputs.message}
            />
         </label>
         <YellowButton text="Send" />
      </form>
   );
};

export default InputForm;
