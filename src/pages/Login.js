import React from "react";
import LogIn from "../components/LogIn/LogIn";
import { motion } from "framer-motion";
const Login = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
      
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      x: "-100vw",
      transition: {
       
        duration: 0.5,
      },
    },
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {" "}
      <LogIn />{" "}
    </motion.div>
  );
};

export default Login;
