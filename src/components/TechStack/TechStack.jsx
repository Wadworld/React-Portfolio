import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaShopify, FaGitAlt, FaGithub }from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoSearch } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const techs = [
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
  },
  {
    name: "HTML",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
  },
  {
    name: "Shopify",
    icon: <FaShopify />,
  },
  {
    name: "SEO Opt.",
    icon: <IoSearch />,
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
  },
  {
    name: "Email Marketing",
    icon: <MdEmail />,
  },
];

 function TechStack() {
  return (
    <section className="py-12 px-4">

      {/* Header */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        My Programming Languages and Frameworks
      </h2>

      {/* Grid */}
      <motion.div 
        animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 max-w-2xl md:max-w-4xl mx-auto">

        {techs.map((tech, index) => (
          <div
            key={index}
            className="
              bg-gray-800
              border border-black
              rounded-3xl md:rounded-lg
              py-4 md:py-5
              flex flex-col items-center
              justify-center
              gap-3
              hover:scale-105
              transition
              duration-300
            "
          >
            {/* Icon */}
            <div className="text-3xl md:text-5xl">
              {tech.icon}
            </div>

            {/* Name */}
            <p className="text-sm md:text-base">
              {tech.name}
            </p>
          </div>
        ))}

      </motion.div>
    </section>
  );
}


export default TechStack
