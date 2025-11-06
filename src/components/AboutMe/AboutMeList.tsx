// React
import { type FC } from "react";
// Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Type
import { type AboutMeListType } from "../../data/AboutMe";
const AboutMeList: FC<AboutMeListType> = ({ title, icon, value, color }) => {
  return (
    <>
      <FontAwesomeIcon
        icon={icon}
        className="w-6 h-6 mt-1.5"
        style={{ color: color }}
      />
      <div>
        <h2 className="text-lg font-semibold text-black dark:text-white">
          {title}
        </h2>
        {typeof value === "string" ? (
          <p className="font-exo text-gray-700 dark:text-gray-300">{value}</p>
        ) : (
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            {value.map((item, index) => (
              <li className="font-exo" key={index}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default AboutMeList;
