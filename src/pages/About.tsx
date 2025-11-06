// React
import { type FC, Suspense, lazy } from "react";
// Component
const AboutMeList = lazy(() => import("../components/AboutMe/AboutMeList"));
// Data
import { AboutMeListData } from "./../data/AboutMe";
// Motion
import { motion } from "framer-motion";
// Skeleton
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const About: FC = () => {
  return (
    <main className="flex flex-col items-center gap-10 px-5 py-10 lg:px-10">
      {/* Header */}
      <motion.h1
        className="px-16 py-2 text-[25px] uppercase tracking-widest font-bold text-black dark:text-white font-montserrat border-4 border-black dark:border-white"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        About Me
      </motion.h1>

      {/* Content Grid */}
      <section className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
        {AboutMeListData.map(({ title, icon, value, color }) => (
          <Suspense
            key={title}
            fallback={
              <div
                className={`rounded-lg ${
                  typeof value === "object" && "col-span-full"
                } ${title === "Personal Information" && "col-span-full"}`}
              >
                <Skeleton
                  width={"100%"}
                  height={"80px"}
                  baseColor="#00000030"
                  highlightColor="#00000035"
                />
              </div>
            }
          >
            <motion.div
              className={`flex items-start gap-4 p-4 transition border border-black/20 dark:bg-gray-800 rounded-lg shadow hover:shadow-lg cursor-pointer ${
                typeof value === "object" && "col-span-full"
              } ${title === "Personal Information" && "col-span-full"}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <AboutMeList
                title={title}
                icon={icon}
                value={value}
                color={color}
              />
            </motion.div>
          </Suspense>
        ))}
      </section>
    </main>
  );
};

export default About;
