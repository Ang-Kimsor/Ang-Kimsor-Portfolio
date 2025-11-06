// React
import { type FC } from "react";
import { Link } from "react-router-dom";
// Image
import Profile from "./../assets/profile.jpg";
// Typewrite
import { Typewriter } from "react-simple-typewriter";
// Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Data
import { HomeSocialData } from "./../data/Home";
// Motion
import { motion } from "framer-motion";
const Home: FC = () => {
  return (
    <main className="px-5 py-10 lg:px-10 ">
      <motion.section
        className="flex flex-wrap w-full font-bold lg:flex-nowrap"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.aside
          className=" xl:w-[30%] lg:w-[40%] w-full flex items-center justify-center"
          variants={{
            hidden: { opacity: 0, y: -10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeInOut" },
            },
          }}
        >
          <img
            src={Profile}
            className="lg:w-full lg:h-auto md:w-[400px] md:h-[400px] w-[300px] rounded-full"
            alt="Profile"
          />
        </motion.aside>
        <motion.article
          className=" xl:w-[70%] lg:w-[60%] w-full text-xl flex flex-col justify-center lg:px-10 px-5 lg:text-start text-center lg:mt-0 mt-5"
          variants={{
            hidden: { opacity: 0, y: -10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeInOut" },
            },
          }}
        >
          <h1 className="lg:text-[50px] text-[30px] text-[#404040] dark:text-white/80">
            Hi, I am
          </h1>
          <p className="lg:text-[100px] text-[50px] text-black dark:text-white">
            Ang Kimsor
          </p>
          <span className="lg:text-[45px] text-[25px] text-black dark:text-white">
            <Typewriter
              words={["Freelancer", "Website Developer", "React Developer"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            className="flex justify-center gap-5 mt-5 text-3xl lg:justify-start"
          >
            {HomeSocialData.map(({ path, icon, color }) => (
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
            ))}
          </motion.div>
        </motion.article>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative px-5 py-12 mt-10 text-gray-800 transition-colors duration-300 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:text-white lg:px-10"
      >
        <h2 className="mb-4 text-3xl font-bold font-exo">Hi, I'm Ang Kimsor</h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300 font-exo">
          I'm a third-year Computer Science student who loves building websites
          and turning ideas into real digital experiences. I enjoy working with
          HTML, CSS, JavaScript, ReactJS, and PHP, and I'm always learning new
          things to improve my skills.
        </p>
        <Link
          to="/about"
          className="font-exo uppercase font-semibold inline-block px-4 py-2 text-gray-800 transition-all border border-gray-800 rounded hover:bg-gray-800 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-800"
        >
          Read More
        </Link>
      </motion.section>
    </main>
  );
};

export default Home;
