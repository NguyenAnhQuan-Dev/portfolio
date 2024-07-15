import {
  FaCss3Alt,
  FaGitAlt,
  FaSass,
  FaVuejs,
  FaGithub,
  FaPython,
  FaHtml5,
} from "react-icons/fa";
import {
  SiMicrosoftsqlserver,
  SiMongodb,
  SiWebstorm,
  SiPostman,
  SiTailwindcss,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { DiMysql } from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandVscode } from "react-icons/tb";

const data = [
  {
    id: 1,
    nameSkill: "Basic",
    dataOfSkill: [
      {
        id: 1,
        name: "HTML",
        icon: <FaHtml5 />,
      },
      {
        id: 2,
        name: "CSS",
        icon: <FaCss3Alt />,
      },
    ],
  },
  {
    id: 2,
    nameSkill: "Programing Languages",
    dataOfSkill: [
      {
        id: 1,
        name: "JavaScript",
        icon: <IoLogoJavascript />,
      },
      {
        id: 2,
        name: "Python",
        icon: <FaPython />,
      },
    ],
  },
  {
    id: 3,
    nameSkill: "Data Base",
    dataOfSkill: [
      {
        id: 1,
        name: "MySql",
        icon: <DiMysql />,
      },
      {
        id: 2,
        name: "MongoDb",
        icon: <SiMongodb />,
      },
      {
        id: 3,
        name: "Sql Server",
        icon: <SiMicrosoftsqlserver />,
      },
    ],
  },
  {
    id: 4,
    nameSkill: "Version Control",
    dataOfSkill: [
      {
        id: 1,
        name: "Git",
        icon: <FaGitAlt />,
      },
      {
        id: 2,
        name: "Github",
        icon: <FaGithub />,
      },
    ],
  },
  {
    id: 5,
    nameSkill: "Framwork And Libary",
    dataOfSkill: [
      {
        id: 1,
        name: "ReactJs",
        icon: <RiReactjsLine />,
      },
      {
        id: 2,
        name: "VueJs",
        icon: <FaVuejs />,
      },
      {
        id: 3,
        name: "TailwindCSS",
        icon: <SiTailwindcss />,
      },
      {
        id: 4,
        name: "Sass",
        icon: <FaSass />,
      },
    ],
  },
  {
    id: 6,
    nameSkill: "Tools",
    dataOfSkill: [
      {
        id: 1,
        name: "Vscode",
        icon: <TbBrandVscode />,
      },
      {
        id: 2,
        name: "Postman",
        icon: <SiPostman />,
      },
      {
        id: 3,
        name: "WebStorm",
        icon: <SiWebstorm />,
      },
    ],
  },
];

export default data;
