// React
import { type FC } from "react";
// Data
import { SkillsData } from "../data/Skills";
// Motion
import { motion } from "framer-motion";
const Skills: FC = () => {
  return (
    <motion.main
      className="flex flex-col items-center gap-8 px-5 py-10 font-raleway lg:px-10 "
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
      }}
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
        Skills
      </motion.h1>
      {SkillsData.map(({ title, skills }) => (
        <motion.section
          className="w-full"
          variants={{
            hidden: { opacity: 0, y: -10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeInOut" },
            },
          }}
          key={title}
        >
          <h2 className="mb-6 text-2xl font-bold text-black transition-colors md:text-3xl dark:text-white">
            {title}
          </h2>
          <motion.div
            className="flex flex-wrap gap-7"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {skills.map(({ name, logo }) => (
              <motion.span
                key={name}
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeInOut" },
                  },
                }}
                className="group cursor-pointer"
              >
                <img
                  src={logo}
                  className="object-contain md:size-20 size-16"
                  alt={name}
                />
                <p className="mt-2 font-bold text-[10px] md:text-[12px] text-center dark:text-white/80 font-exo text-gray-800/80 group-hover:text-gray-800 dark:group-hover:text-white">
                  {name}
                </p>
              </motion.span>
            ))}
          </motion.div>
        </motion.section>
      ))}
    </motion.main>
  );
};

export default Skills;
