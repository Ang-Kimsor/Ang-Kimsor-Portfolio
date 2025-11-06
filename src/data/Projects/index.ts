// Image
import Project_1_Playstation from "./../../assets/Projects/Project_1_PlayStation.png";
import Project_2_LEGO from "./../../assets/Projects/Project_2_LEGO.png";
import Project_3_Porsche from "./../../assets/Projects/Project_3_Porsche.png";
import Project_4_ExploreTrails from "./../../assets/Projects/Project_4_ExploreTrails.png";
import Project_5_CafeShop from "./../../assets/Projects/Project_5_CafeShop.png";
import Project_6_JapanSouq from "./../../assets/Projects/Project_6_JapanSouq.png";
import Project_7_Armaf from "./../../assets/Projects/Project_7_Armaf.png";
import Project_8_PteasDecor from "./../../assets/Projects/Project_8_PteasDecor.png";
// Type
export type ProjectType = {
  title: string;
  img: string;
  list: string[];
  github: string;
  live: string;
  technologies: string[];
  category: string;
};
// Data
export const CategoryData: string[] = ["all", "frontend", "backend", "ui/ux"];
export const ProjectData: ProjectType[] = [
  {
    title: "PlayStation",
    img: Project_1_Playstation,
    list: [
      "PlayStation homepage clone built using pure HTML, CSS, and JavaScript",
      "Accurately replicates the layout and design of the official PlayStation website",
      "Responsive design optimized for various devices and screen sizes",
      "Custom slider functionality created with vanilla JavaScript",
      "Focused on clean code, pixel-perfect UI, and frontend layout skills",
    ],
    github: "https://github.com/Ang-Kimsor/PlayStationClone",
    live: "https://play-station-clone-gray.vercel.app/",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
  },
  {
    title: "LEGO Toy",
    img: Project_2_LEGO,
    list: [
      "Lego website homepage clone built using HTML, CSS, JavaScript, and TailwindCSS",
      "Replicates the layout and design of the official Lego homepage",
      "Fully responsive design for desktop, tablet, and mobile screens",
      "Smooth and interactive sliders implemented using SwiperJS",
      "Focus on pixel-perfect UI cloning and responsive layout structuring",
    ],
    github: "https://github.com/Ang-Kimsor/LEGO",
    live: "https://lego-wheat.vercel.app/",
    technologies: ["HTML", "CSS", "JavaScript", "TailwindCSS", "SwiperJS"],
    category: "frontend",
  },
  {
    title: "Porsche",
    img: Project_3_Porsche,
    list: [
      "Porsche clone built using HTML, CSS, JavaScript, and Bootstrap",
      "Collaborated in a team of 3 members to plan, design, and develop the site",
      "Fully customizable sections for easy updates and personalization",
      "Cross-browser compatible and optimized for desktop and mobile devices",
    ],
    github: "https://github.com/Ang-Kimsor/PorscheShop",
    live: "https://porsche-shop.vercel.app/",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    category: "frontend",
  },
  {
    title: "Explore Trails",
    img: Project_4_ExploreTrails,
    list: [
      "This project is built using HTML and CSS with a fully responsive on desktop, tablet, and mobile devices.",
      "A modern vocational website in Cambodia, created to provide career guidance, training information, and resources for students and professionals.",
      "It is designed with simplicity and usability in mind, making it easy for anyone to find relevant information.",
    ],
    github: "https://github.com/Ang-Kimsor/Explore-Trails",
    live: "https://exploretrails.vercel.app/",
    technologies: ["HTML", "CSS"],
    category: "frontend",
  },
  {
    title: "Cafe Shop",
    img: Project_5_CafeShop,
    list: [
      "Interactive café menu website built with React.js and TailwindCSS",
      "Apply the project with AOS animation.",
      "Allows users to browse food and drink items by category",
      "Responsive layout with modern UI",
      "Integrated React Slick slider for featured menu items or promotions",
    ],
    github: "https://github.com/Ang-Kimsor/CafeShop",
    live: "https://cafe-shop-liard.vercel.app/",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "AOS",
      "TailwindCSS",
      "ReactJS",
      "React Router",
      "ReactSlick",
    ],
    category: "frontend",
  },
  {
    title: "JapanSouq",
    img: Project_6_JapanSouq,
    list: [
      "Full-featured e-commerce Single Page Application (SPA) built with React.js",
      "Apply lazy loading and skeleton with framer motion animation.",
      "Add to Cart, Wishlist, Checkout, and Online Payment functionality included",
      "User Dashboard with order history, profile settings, and login/logout support",
      "Product filtering, sorting, and image preview for a seamless shopping experience",
      "Responsive design optimized for both desktop and mobile devices",
    ],
    github: "https://github.com/Ang-Kimsor/GroceryStore",
    live: "https://grocery-store-ochre-psi.vercel.app/",
    technologies: [
      "HTML",
      "CSS",
      "TailwindCSS",
      "JavaScript",
      "Vite",
      "ReactJS",
      "React Router",
      "React-Loading-Skeleton",
      "Framer-Motion",
    ],
    category: "frontend",
  },
  {
    title: "Armaf",
    img: Project_7_Armaf,
    list: [
      "Elegant and luxury-inspired UI matching Armaf's brand style.",
      "Apply lazy loading and skeleton with framer motion animation.",
      "Fully responsive design for mobile, tablet, and desktop.",
      "Reusable components for products, categories, and banners.",
      "Optimized navigation and product display for a smooth shopping experience.",
    ],
    github: "https://github.com/Ang-Kimsor/Armaf",
    live: "https://armaf.vercel.app/",
    technologies: [
      "HTML",
      "CSS",
      "TailwindCSS",
      "JavaScript",
      "Vite",
      "ReactJS",
      "React Router",
      "React-Loading-Skeleton",
      "Framer-Motion",
    ],
    category: "frontend",
  },
  {
    title: "PteasDecor",
    img: Project_8_PteasDecor,
    list: [
      "It focuses on showcasing beautiful home decoration products with a user-friendly ReactJS interface.",
      "It saves you time by providing a well-organized folder structure and reusable components.",
      "It embraces best practices like component-based architecture and responsive design.",
      "Collaborated in a pair of 2 members to plan, design, and develop the site",
    ],
    github: "https://github.com/Ang-Kimsor/PteasDecor",
    live: "https://pteasdecor.vercel.app/",
    technologies: [
      "HTML",
      "CSS",
      "TailwindCSS",
      "JavaScript",
      "Vite",
      "ReactJS",
      "React Router",
      "React Redux",
      "React-Loading-Skeleton",
      "Framer-Motion",
      "Loadable Component",
    ],
    category: "frontend",
  },
];
