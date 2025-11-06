import React from "react";
import { Link, useRouteError } from "react-router-dom";
import { motion } from "framer-motion";
const Error: React.FC = () => {
  const error: any = useRouteError();

  return (
    <motion.section
      className="flex flex-col items-center justify-center h-[calc(100vh-150px)] text-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-6xl font-extrabold text-red-600 mb-4"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {error?.status || 404}
      </motion.h1>

      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
        {error?.statusText || "Page Not Found"}
      </h2>

      <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
        {error?.message ||
          "Sorry, the page you're looking for doesn't exist or an unexpected error occurred."}
      </p>

      <div className="flex gap-5">
        <Link
          to="/"
          className="px-6 py-3 font-semibold text-white transition bg-gray-800 cursor-pointer rounded-lg font-exo"
        >
          Go Back Home
        </Link>
        <Link
          to="/contact"
          className="px-6 py-3 font-semibold text-white transition bg-gray-800 cursor-pointer rounded-lg font-exo"
        >
          Contact Me
        </Link>
      </div>
    </motion.section>
  );
};

export default Error;
