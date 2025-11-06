import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Footer: React.FC = () => {
  return (
    <motion.footer
      className="flex items-center justify-center w-full py-6 text-gray-800 transition-colors border-t-2 dark:text-white/50 border-black/20 dark:border-white/20"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <p className="text-[10px] font-semibold md:text-base font-exo me-2">
        &copy; {new Date().getFullYear()} Ang Kimsor. All Rights Reserved.
      </p>
      <Link
        className="font-semibold hover:underline md:text-base text-[10px] font-exo dark:hover:text-white hover:text-gray-800"
        to={"/contact"}
      >
        Contact Me
      </Link>
    </motion.footer>
  );
};

export default Footer;
