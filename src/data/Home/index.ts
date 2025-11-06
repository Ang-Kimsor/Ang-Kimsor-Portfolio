// Icon
import {
  faFacebookF,
  faGithub,
  faLinkedin,
  faTelegramPlane,
  faYoutube,
  type IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
// Type
type HomeSocial = {
  path: string;
  icon: IconDefinition;
  color: string;
};
// Data
export const HomeSocialData: HomeSocial[] = [
  {
    path: "https://github.com/Ang-Kimsor",
    icon: faGithub,
    color: "black",
  },
  {
    path: "https://www.linkedin.com/in/ang-kimsor-0237282b9/",
    icon: faLinkedin,
    color: "#0077b5",
  },
  {
    path: "https://www.facebook.com/share/1AX6tsWEdc/?mibextid=wwXIfr",
    icon: faFacebookF,
    color: "#1877F2",
  },
  {
    path: "https://t.me/Thirtieth_October",
    icon: faTelegramPlane,
    color: "#0088CC",
  },
  {
    path: "",
    icon: faYoutube,
    color: "red",
  },
];
