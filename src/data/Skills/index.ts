// Logo
import bootstrap from "./../../assets/Skills/bootstrap.png";
import c from "./../../assets/Skills/c.png";
import cpp from "./../../assets/Skills/cpp.png";
import css from "./../../assets/Skills/css.png";
import git from "./../../assets/Skills/git.png";
import github from "./../../assets/Skills/github.png";
import html from "./../../assets/Skills/html.png";
import java from "./../../assets/Skills/java.png";
import js from "./../../assets/Skills/js.png";
import mysql from "./../../assets/Skills/mysql.png";
import netlify from "./../../assets/Skills/netlify.png";
import php from "./../../assets/Skills/php.png";
import python from "./../../assets/Skills/python.png";
import reactjs from "./../../assets/Skills/reactjs.png";
import sass from "./../../assets/Skills/sass.png";
import tailwindcss from "./../../assets/Skills/tailwindcss.png";
import typescript from "./../../assets/Skills/typescript.png";
// import nextjs from "./../../assets/Skills/nextjs.png";
import restapi from "./../../assets/Skills/restapi.png";
import laravel from "./../../assets/Skills/laravel.png";
import nodejs from "./../../assets/Skills/nodejs.png";
import expressjs from "./../../assets/Skills/expressjs.svg";
import vercel from "./../../assets/Skills/vercel.png";
import vs from "./../../assets/Skills/vs.png";
import vuejs from "./../../assets/Skills/vuejs.png";
import mongodb from "./../../assets/Skills/mongodb.png";

// Type
type SkillItemType = {
  name: string;
  logo: string;
};
type SkillsType = {
  title: string;
  skills: SkillItemType[];
};
// Data
export const SkillsData: SkillsType[] = [
  {
    title: "Programming Langauges",
    skills: [
      { name: "C", logo: c },
      { name: "C++", logo: cpp },
      { name: "Java", logo: java },
      { name: "Python", logo: python },
    ],
  },
  {
    title: "Frontend Technologies",
    skills: [
      { name: "HTML", logo: html },
      { name: "CSS", logo: css },
      { name: "JavaScript", logo: js },
      { name: "SASS", logo: sass },
      { name: "Bootstrap", logo: bootstrap },
      { name: "TailwindCSS", logo: tailwindcss },
      { name: "ReactJS", logo: reactjs },
      { name: "VueJS", logo: vuejs },
      { name: "Typescript", logo: typescript },
    ],
  },
  {
    title: "Backend Technologies",
    skills: [
      { name: "PHP", logo: php },
      { name: "MySQL", logo: mysql },
      { name: "RestAPI", logo: restapi },
    ],
  },
  {
    title: "Tools & Hosting",
    skills: [
      { name: "Git", logo: git },
      { name: "GitHub", logo: github },
      { name: "Netlify", logo: netlify },
      { name: "Vercel", logo: vercel },
      { name: "VS Code", logo: vs },
    ],
  },
  {
    title: "Learning  ",
    skills: [
      // { name: "NextJS", logo: nextjs },
      { name: "Laravel", logo: laravel },
      { name: "NodeJS", logo: nodejs },
      { name: "ExpressJS", logo: expressjs },
      { name: "MongoDB", logo: mongodb },
    ],
  },
];
