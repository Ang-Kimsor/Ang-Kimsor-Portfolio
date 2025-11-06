// React
import { type FC } from "react";
import { Link } from "react-router-dom";
// Type
import { type ProjectType } from "../../data/Projects";
const ProjectCard: FC<ProjectType> = ({
  title,
  img,
  list,
  github,
  live,
  technologies,
  category,
}) => {
  return (
    <>
      {/* Project Image */}
      <img src={img} alt={title} className="w-full" />

      {/* Content */}
      <div className="flex flex-col gap-3 p-4">
        <span className="bg-gray-800 w-fit px-3 py-1 rounded text-white text-[9px] font-semibold tracking-widest uppercase">
          {category}
        </span>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
          {title}
        </h3>

        {/* Description as list */}
        <ul className="space-y-1 text-sm text-gray-600 list-disc list-inside dark:text-gray-300">
          {list.map((item, index) => (
            <li className="font-exo" key={index}>
              {item}
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex justify-center gap-5">
          <Link
            to={live}
            className="px-5 py-2 rounded-md font-exo text-sm bg-gray-800 text-white hover:bg-gray-900 transition-all duration-200 dark:bg-white/80 hover:dark:bg-white dark:text-gray-800"
          >
            Live
          </Link>
          <Link
            to={github}
            className="px-5 py-2 rounded-md font-exo text-sm bg-gray-800 text-white hover:bg-gray-900 transition-all duration-200 dark:bg-white/80 hover:dark:bg-white dark:text-gray-800"
          >
            GitHub
          </Link>
        </div>

        {/* Tech use */}
        <div className="flex gap-2 flex-wrap justify-center border-t border-black/20 dark:border-white/20 pt-2">
          {technologies.map((item, index) => (
            <span
              key={index}
              className="bg-gray-800 text-white font-exo text-[11px] font-medium py-1 rounded-xl flex items-center justify-center px-3"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
