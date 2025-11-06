// React
import { type FC, Suspense, lazy, useMemo, useState } from "react";
// Component
const ProjectCard = lazy(() => import("./../components/Projects/ProjectCard"));
// Data
import { CategoryData, ProjectData } from "../data/Projects";
// Motion
import { motion } from "framer-motion";
// Skeleton
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Projects: FC = () => {
  const [category, setCategory] = useState<string>(CategoryData[0]);
  const [loading, setLoading] = useState<boolean>(true);
  const filterProject = useMemo(() => {
    let filtered = ProjectData;
    setLoading(true);
    if (category !== "all")
      filtered = ProjectData.filter((project) => project.category === category);
    if (filtered.length > 0) setTimeout(() => setLoading(false), 2000);
    else setLoading(false);
    return filtered;
  }, [category]);

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
      }}
      className="flex flex-col items-center gap-8 px-5 py-10 font-raleway lg:px-10 "
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
        Projects
      </motion.h1>
      <motion.section
        variants={{
          hidden: { opacity: 0, y: -10 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
          },
        }}
        className=" flex w-full gap-5 justify-center"
      >
        {CategoryData.map((item, index) => (
          <p
            key={index}
            className={`${
              item === category
                ? "underline dark:text-white text-gray-900"
                : " dark:text-white/80 text-gray-500"
            } cursor-pointer  uppercase font-semibold tracking-wider font-exo  hover:dark:text-white  hover:text-gray-900 hover:underline`}
            onClick={() => (!loading ? setCategory(item) : null)}
          >
            {item}
          </p>
        ))}
      </motion.section>

      {/* Project Card */}
      {filterProject.length === 0 ? (
        <section className="w-full h-[50vh] flex flex-col items-center justify-center text-center">
          <motion.p
            className="dark:text-gray-300 text-gray-800 font-exo text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            No projects found for your category (
            <span className="uppercase">{category}</span>).
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onClick={() => setCategory(CategoryData[0])}
            className="mt-4 px-5 py-2 text-white bg-gray-800/80 hover:bg-gray-800 font-exo cursor-pointer rounded-lg transition-all duration-200"
          >
            Reset Filters
          </motion.button>
        </section>
      ) : (
        <section className="grid w-full gap-5 lg:grid-cols-3 md:grid-cols-2">
          {filterProject
            .slice()
            .reverse()
            .map(
              ({ title, img, list, github, live, technologies, category }) => (
                <Suspense
                  key={title}
                  fallback={
                    <article className="rounded-lg lg:h-[400px] h-[500px]">
                      <Skeleton
                        width={"100%"}
                        height={"100%"}
                        baseColor="#00000030"
                        highlightColor="#00000035"
                      />
                    </article>
                  }
                >
                  {loading ? (
                    <article className="rounded-lg lg:h-[400px] h-[500px]">
                      <Skeleton
                        width={"100%"}
                        height={"100%"}
                        baseColor="#00000030"
                        highlightColor="#00000035"
                      />
                    </article>
                  ) : (
                    <motion.article
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className=" overflow-hidden h-fit cursor-pointer bg-white rounded-lg shadow-lg dark:bg-gray-900 hover:scale-[103%] ease-linear transition-all duration-300 dark:border dark:border-white/20"
                    >
                      <ProjectCard
                        title={title}
                        img={img}
                        list={list}
                        github={github}
                        live={live}
                        technologies={technologies}
                        category={category}
                      />
                    </motion.article>
                  )}
                </Suspense>
              )
            )}
        </section>
      )}
    </motion.main>
  );
};

export default Projects;
