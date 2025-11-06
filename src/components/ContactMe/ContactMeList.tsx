// React
import { type FC } from "react";
import { Link } from "react-router-dom";
// Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Type
import { type ContactMeListType } from "../../data/ContactMe";
const ContactMeList: FC<ContactMeListType> = ({
  title,
  icon,
  value,
  color,
  url,
}) => {
  return (
    <>
      <Link to={url} className="flex items-start gap-4">
        <FontAwesomeIcon
          icon={icon}
          className="w-6 h-6 mt-1.5"
          style={{ color: color }}
        />
        <div>
          <h2 className="text-lg font-semibold text-black dark:text-white">
            {title}
          </h2>
          <p className="font-exo text-gray-700 dark:text-gray-300">{value}</p>
        </div>
      </Link>
    </>
  );
};

export default ContactMeList;
