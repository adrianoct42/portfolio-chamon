import { BsFiletypeSql } from "react-icons/bs";
import { FaGitAlt, FaNode, FaReact } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiJest,
  SiNextdotjs,
  SiReactquery,
  SiStyledcomponents,
  SiTypescript,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "React Query", icon: <SiReactquery /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Flutter", icon: <FaFlutter /> },
  { name: "React Native", icon: <TbBrandReactNative /> },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
  { name: "Styled Components", icon: <SiStyledcomponents /> },
  { name: "Node.js", icon: <FaNode /> },
  { name: "SQL", icon: <BsFiletypeSql /> },
  { name: "Jest", icon: <SiJest /> },
  { name: "Git", icon: <FaGitAlt /> },
];
