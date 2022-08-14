import React from "react";
import ProductDetailed from "../components/ProductDetailed.js/ProductDetailed";
import { motion } from "framer-motion";

const SingleAuction = () => {
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
      <ProductDetailed />{" "}
    </motion.div>
  );
};

export default SingleAuction;
