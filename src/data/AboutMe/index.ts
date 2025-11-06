// Icon
import {
  faUser,
  faBirthdayCake,
  faGraduationCap,
  faBriefcase,
  faTrophy,
  faCode,
  faHeart,
  type IconDefinition,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
// Type
export type AboutMeListType = {
  title: string;
  icon: IconDefinition;
  value: string | string[];
  color: string;
};
// Data
export const AboutMeListData: AboutMeListType[] = [
  {
    title: "Name",
    icon: faUser,
    value: "Ang Kimsor",
    color: "oklch(62.3% 0.214 259.815)",
  },
  {
    title: "Nationality",
    icon: faGlobe,
    value: "Cambodian",
    color: "oklch(65.6% 0.241 150.308)",
  },
  {
    title: "Date of Birth",
    icon: faBirthdayCake,
    value: "30 October 2005",
    color: "oklch(65.6% 0.241 354.308)",
  },
  {
    title: "Educations",
    icon: faGraduationCap,
    value: [
      "Primary School: Sre Nhor Primary School, Phnom Penh (2011 - 2017)",
      "High School: Sovannaphumi High School Chumpouvorn I Campus, Phnom Penh (2017 - 2023)",
      "Bachelor Degree - Computer Science: Royal University of Phnom Penh, Phnom Penh (2023 - Present)",
    ],
    color: "oklch(62.7% 0.265 303.9)",
  },
  {
    title: "Skills",
    icon: faCode,
    value: ["Website Frontend Technologies", "Website Backend Technologies"],
    color: "oklch(79.5% 0.184 86.047)",
  },
  {
    title: "Frontend Experiences",
    icon: faBriefcase,
    value: [
      "Developed responsive and interactive user interfaces using HTML, CSS, JavaScript, Bootstrap, and TailwindCSS",
      "Built Single Page Applications (SPA) using ReactJS and TypeScript for modern and scalable web experiences.",
      "Implemented category filtering, sorting, and add to cart functionalities to enhance user experience",
      "Integrated checkout workflows with dynamic quantity controls and stock validation.",
      "Adopted a component-based architecture to ensure scalability, maintainability, and code reusability.",
      "Collaborated using Git and GitHub for version control and project management.",
    ],
    color: "oklch(63.7% 0.237 25.331)",
  },
  {
    title: "Backend Experiences",
    icon: faBriefcase,
    value: [
      "Designed and developed RESTful APIs for integration with frontend applications.",
      "Built content management systems (CMS) to manage and update website data efficiently.",
      "Developing product management features in projects using ReactJS and TypeScript for a unified full stack approach.",
      "Improved backend logic, data handling, and API performance.",
      "Continuously learning and exploring backend technologies to enhance full-stack development skills. ",
    ],
    color: "oklch(71.5% 0.143 215.221)",
  },
  {
    title: "Achivements",
    icon: faTrophy,
    value: [
      "Developed multiple frontend projects showcasing strong UI/UX design and responsive layouts, inspired by PlayStation, LEGO, Porsche, ExploreTrails.",
      "Built and deployed SPA web applications using ReactJS and TypeScript, such as Grocery Store, Café Menu, Home Decoration Store, and Perfume Store.",
      "Developed RESTful APIs to connect frontend and backend systems, enabling smooth data communication and dynamic content updates.",
      "Expanded skills across the full stack, learning both frontend (React, TypeScript, TailwindCSS) and backend (API development, database handling) technologies.",
    ],
    color: "oklch(69.6% 0.17 162.48)",
  },
  {
    title: "Personal Information",
    icon: faHeart,
    value: `I am a passionate developer who loves building clean and efficient web applications. 
    I enjoy learning new technologies, exploring creative projects, and contributing to 
    the developer community. My goal is to continuously grow as a full-stack developer 
    and deliver meaningful software solutions.`,
    color: "oklch(65.6% 0.241 354.308)",
  },
];
