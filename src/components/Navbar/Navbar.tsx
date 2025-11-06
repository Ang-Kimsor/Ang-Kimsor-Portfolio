// React
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, type FC } from "react";
// Logo
import logo from "./../../assets/logo.png";
// Data
import { navbardata } from "./../../data/Navbar/";
// Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
// motion
import { motion } from "framer-motion";
const Navbar: FC = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  useEffect(() => {
    const body = document.body;
    if (openMenu) body.classList.add("overflow-hidden");
    else body.classList.remove("overflow-hidden");
    return () => {
      body.classList.remove("overflow-hidden");
    };
  }, [openMenu]);
  console.log(location.pathname);

  return (
    <motion.nav
      className="sticky top-0 left-0 flex items-center justify-between w-full h-20 px-3 uppercase bg-white shadow-md md:px-10 font-montserrat shadow-neutral-300 dark:shadow-black/60 z-100 dark:bg-gray-900"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
      }}
    >
      {/* Logo + Menu Toggle */}
      <motion.div
        className="relative flex items-center justify-between w-full h-full md:w-20"
        variants={{
          hidden: { opacity: 0, y: -10 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
          },
        }}
      >
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="object-contain h-14" />
          <p className="font-bold dark:text-white md:hidden">Portfolio</p>
        </div>

        {/* Mobile Icon */}
        <div
          className="block text-xl cursor-pointer dark:text-white md:hidden"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <FontAwesomeIcon icon={openMenu ? faX : faBars} />
        </div>
      </motion.div>

      {/* Nav Links */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -10 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
          },
        }}
      >
        <motion.ul
          className={`md:h-fit bg-white dark:bg-gray-900 flex gap-12 items-center md:opacity-100 md:visible font-bold text-[15px] md:shadow-none md:relative absolute md:flex-row flex-col md:w-fit w-full left-0 md:top-0 top-20 md:py-0 font-montserrat shadow-neutral-300 dark:shadow-black/60 duration-500 ease-in-out
            ${
              openMenu
                ? "h-[380px] py-10 visible opacity-100 shadow-md transition-[opacity,height]"
                : "h-0 invisible opacity-0 transition-[height]"
            }
            `}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {navbardata.map(({ label, path }) => (
            <motion.li
              key={path}
              onClick={() => setOpenMenu(false)}
              className={`relative transition-all duration-300 cursor-pointer  hover:text-gray-800  dark:hover:text-white group ${
                path === location.pathname
                  ? "dark:text-white text-gray-800"
                  : "text-gray-800/70 dark:text-white/80"
              }`}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { duration: 0.5, ease: "easeInOut" },
                },
              }}
            >
              <Link to={path} onClick={() => setOpenMenu(false)}>
                {label}
                <span
                  className={`absolute left-0 bottom-0 w-0 h-[3px] bg-gray-900  dark:bg-white transition-all duration-300 group-hover:w-full ${
                    path === location.pathname && "w-full"
                  }`}
                ></span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
