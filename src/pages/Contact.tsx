// React
import { type FC, Suspense, lazy } from "react";
import { Link } from "react-router-dom";
// Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Data
import { HomeSocialData } from "../data/Home";
import { ContactMeListData } from "../data/ContactMe";
const ContactMeList = lazy(
  () => import("../components/ContactMe/ContactMeList")
);
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Contact: FC = () => {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
      }}
      className="flex flex-col items-center gap-10 px-5 py-10 font-raleway lg:px-10"
    >
      {/* Header */}
      <motion.h1
        variants={{
          hidden: { opacity: 0, y: -10 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
          },
        }}
        className="px-16 py-2 text-[25px] uppercase tracking-widest font-bold text-black dark:text-white font-montserrat border-4 border-black dark:border-white"
      >
        Contact Me
      </motion.h1>

      {/* Contact Info */}
      <motion.section
        variants={{
          hidden: { opacity: 0, y: -10 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
          },
        }}
        className="grid w-full grid-cols-1 gap-6 md:grid-cols-3"
      >
        {ContactMeListData.map(({ title, icon, value, url, color }) => (
          <Suspense
            key={title}
            fallback={
              <div className="rounded-lg">
                <Skeleton
                  width={"100%"}
                  height={"70px"}
                  baseColor="#00000030"
                  highlightColor="#00000035"
                />
              </div>
            }
          >
            <motion.div
              className="p-4 transition border border-black/20 dark:bg-gray-800 rounded-lg shadow hover:shadow-lg cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <ContactMeList
                title={title}
                icon={icon}
                value={value}
                color={color}
                url={url}
              />
            </motion.div>
          </Suspense>
        ))}
      </motion.section>

      {/* Icon Social */}
      <motion.section
        variants={{
          hidden: { opacity: 0, y: -10 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
          },
        }}
      >
        <motion.div
          className="flex justify-center gap-5 text-3xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {HomeSocialData.slice(0, HomeSocialData.length - 1).map(
            ({ path, icon, color }) => (
              <Link to={path} key={path}>
                <motion.span
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { duration: 0.5, ease: "easeInOut" },
                    },
                  }}
                  className="flex items-center justify-center text-xl rounded-full shadow-md size-12 dark:bg-gray-800 hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  <FontAwesomeIcon style={{ color: color }} icon={icon} />
                </motion.span>
              </Link>
            )
          )}
        </motion.div>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        variants={{
          hidden: { opacity: 0, y: -10 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
          },
        }}
        className="w-full flex flex-col items-center gap-10"
      >
        <h1 className="px-16 py-2 w-fit text-[25px] uppercase tracking-widest font-bold text-black dark:text-white font-montserrat border-4 border-black dark:border-white">
          Email Me
        </h1>
        <form className="flex flex-col w-full gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 dark:bg-gray-800 dark:border-gray-600 dark:text-white font-exo"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 dark:bg-gray-800 dark:border-gray-600 dark:text-white font-exo"
          />
          <textarea
            placeholder="Your Message"
            className="h-32 p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-gray-900 dark:bg-gray-800 dark:border-gray-600 dark:text-white font-exo"
          />
          <button
            type="submit"
            className="px-6 py-3 font-semibold text-white transition bg-gray-800 cursor-pointer rounded-lg font-exo"
          >
            Send Message
          </button>
        </form>
      </motion.section>
    </motion.main>
  );
};

export default Contact;
