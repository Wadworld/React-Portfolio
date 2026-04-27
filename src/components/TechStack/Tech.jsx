import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaShopify, FaGitAlt, FaGithub, FaFigma }from "react-icons/fa";
import { SiTailwindcss, SiTypescript, } from "react-icons/si";
import { IoSearch } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { SiCanva } from "react-icons/si";

const techs = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Shopify", icon: <FaShopify />,},
    { name: "SEO Opt.", icon: <IoSearch />,},
    {name: "Email Market.", icon: <MdEmail />,},
    {name: "Canva", icon: <SiCanva />,},
    {name: "Figma", icon: <FaFigma />,},
];

 function Tech() {
  return (
    <section className="py-16 px-0 overflow-hidden">

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
        My Programming Languages and Frameworks
      </h2>

      <div className="space-y-8">

        {/* Top Row */}
        <Marquee items={techs} direction="left" />

        {/* Bottom Row */}
        <Marquee items={techs} direction="right" />

      </div>

    </section>
  );
}

// /* Marquee Component */
// function Marquee({ items, direction = "left" }) {
//   const isLeft = direction === "left";

//   return (
//     <div className="relative overflow-hidden">

//       <motion.div
//         className="flex gap-5 w-max"
//         animate={{
//           x: isLeft ? ["0%", "-100%"] : ["-100%", "0%"],
//         }}
//         transition={{
//           repeat: Infinity,
//           duration: 200,   // 👈 Slower & smoother
//           ease: "linear",
//         }}
//       >

//         {/* Triple copy for seamless loop */}
//         {[...items, ...items, ...items, ...items, ...items].map((tech, index) => (
//           <div
//             key={index}
//             className="
//               min-w-[100px]
//               bg-gray-800
//               border border-black
//               rounded-3xl md:rounded-xl
//               py-4 md:py-5 px-4
//               flex flex-col
//               items-center
//               justify-center
//               gap-3
//               shrink-0
//               text-center
//               text-white
//             "
//           >
//             {/* Icon */}
//             <div className="text-4xl">
//               {tech.icon}
//             </div>

//             {/* Name */}
//             <p className="text-sm font-medium">
//               {tech.name}
//             </p>
//           </div>
//         ))}

//       </motion.div>

//     </div>
//   );
// }

function Marquee({ items, direction = "left" }) {
  const isLeft = direction === "left";

  const duplicated = [...items, ...items]; // only 2 copies

  return (
    <div className="overflow-hidden">

      <motion.div
        className="flex gap-5 w-max"
        animate={{
          x: isLeft ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 25, // much better speed
          ease: "linear",
        }}
      >
        {duplicated.map((tech, index) => (
          <div
            key={index}
            className="min-w-[100px] bg-gray-800 border border-black rounded-3xl md:rounded-3xl py-4 md:py-5 flex flex-col items-center justify-center gap-3 shrink-0 text-center text-white"
          >
            <div className="text-3xl">{tech.icon}</div>
            <p className="text-sm font-medium">{tech.name}</p>
          </div>
        ))}
      </motion.div>

    </div>
  );
}
export default Tech