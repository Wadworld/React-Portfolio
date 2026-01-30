import { motion } from "framer-motion";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiFirebase,
  SiFigma,
  SiVuedotjs,
  SiExpress,
} from "react-icons/si";

const techs = [
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Vue", icon: <SiVuedotjs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "MongoDB", icon: <SiMongodb /> },
];

function TechStack2() {
  return (
    <section className="py-16 px-4 overflow-hidden">

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
        My Programming Languages and Frameworks
      </h2>

      <div className="space-y-8">

        {/* Row 1 (Left to Right) */}
        <Marquee
          direction="left"
          items={techs}
        />

        {/* Row 2 (Right to Left) */}
        <Marquee
          direction="right"
          items={techs}
        />

      </div>

    </section>
  );
}

/* Marquee Row Component */
function Marquee({ items, direction = "left" }) {
  return (
    <div className="relative overflow-hidden">

      <motion.div
        className="flex gap-6 w-max"
        animate={{
          x: direction === "left"
            ? ["0%", "-100%"]
            : ["-100%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
      >

        {[...items, ...items, ...items].map((tech, index) => (
          <div
            key={index}
            className="
              min-w-[140px]
              bg-gray-800
              border border-black
              rounded-xl
              py-6 px-4
              flex flex-col
              items-center
              justify-center
              gap-3
              shrink-0
              text-center
            "
          >
            {/* Icon */}
            <div className="text-4xl">
              {tech.icon}
            </div>

            {/* Name */}
            <p className="text-sm font-medium">
              {tech.name}
            </p>
          </div>
        ))}

      </motion.div>

    </div>
  );
}

export default TechStack2