import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

function Button({ title }) {
  return (
    <motion.div
      className="btn p-0 "
      initial={{
        color: "white",
        backgroundColor: "ButtonText",
        borderRadius: "3px",
        boxShadow: "0 0 0 2px white",
      }}
      whileHover={{
        color: "ButtonText",
        backgroundColor: "white",
      }}
      style={{
        transition: "all .0000001s",
      }}
    >
      <Link
        style={{ color: "inherit" }}
        to="/how-it-works"
        className="btn fw-bold"
      >
        {title}
      </Link>
    </motion.div>
  );
}

export default Button;
