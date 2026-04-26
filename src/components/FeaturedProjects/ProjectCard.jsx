import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";

function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="block bg-slate-900/80 border border-white/10 rounded-2xl overflow-hidden flex flex-col
      transition hover:-translate-y-3 hover:border-white/25 hover:shadow-xl duration-500 h-full"
    >

      {/* Image */}
      <div className="relative">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />

        {project.featured && (
          <span className="absolute top-3 right-3 bg-yellow-300 text-sm font-semibold text-white px-2 py- rounded-full">
            <CiStar className="inline text-lg text-yellow-600" /> Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 text-left flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2 md:text-2xl">
          {project.title}
        </h3>

        <p className="text-gray-400 text-md mb-4 md:text-lg">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs md:font-semibold bg-slate-800 border border-white/10 px-3 py-1 rounded-full text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Button (now just visual, not a link) */}
        <div className="mt-auto">
          <hr className="mb-4 text-gray-600" />
          <div className="block text-center bg-white text-slate-900 font-semibold py-2 md:py-3 rounded-lg hover:bg-gray-200 transition">
            View Case Study <FaArrowRight className="inline ml-2" />
          </div>
        </div>
      </div>

    </Link>
  );
}

export default ProjectCard;


// import { CiStar } from "react-icons/ci";
// import { FaArrowRight } from "react-icons/fa6";
// import { Link } from "react-router-dom";

// function ProjectCard({ project }) {
//   return (
//     <div
//       className="bg-slate-900/80 border border-white/10 rounded-2xl overflow-hidden flex flex-col
//         transition hover:-translate-y-3 hover:border-white/25  hover:shadow-xl  duration-500  ease-in-out  h-full cursor-pointer
//       "
//     >
//       <Link to={`/projects/${project.slug}`}>
//       {/* Image */}
//       <div className="relative">

//         <img
//           src={project.image}
//           alt={project.title}
//           className="w-full h-48 object-cover"
//         />

//         {/* Featured Badge */}
//         {project.featured && (
//           <span className="absolute top-3 right-3 bg-yellow-500 text-black text-xs font-semibold px-3 py-1 rounded-full">
            
//             Featured
//           </span>
//         )}

//       </div>

//       {/* Content */}
//       <div className="p-6 text-left flex flex-col flex-grow">

//         {/* Title */}
//         <h3 className="text-xl font-bold text-white mb-2 md:text-2xl">
//           {project.title}
//         </h3>

//         {/* Description */}
//         <p className="text-gray-400 text-md mb-4 md:text-lg ">
//           {project.description}
//         </p>

//         {/* Tags */}
//         <div className="flex flex-wrap gap-2 mb-6">
//           {project.tags.map((tag, index) => (
//             <span
//               key={index}
//               className="
//                 text-xs
//                 md:font-semibold
//                 bg-slate-800
//                 border border-white/10
//                 px-3 py-1
//                 rounded-full
//                 text-gray-300
//               "
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//         <hr className="mb-4 text-gray-700"/>

//         {/* Button */}
//         <a
//           href={project.link}
//           target="_blank"
//           rel="noreferrer"
//           className="
//             mt-auto
//             block
//             text-center
//             bg-white
//             text-slate-900
//             font-semibold
//             text-sm
//             py-2
//             md:py-3
//             md:font-bold
//             rounded-lg
//             hover:bg-gray-200
//             transition
//           "
//         >
//           View Project <FaArrowRight className="inline ml-2" />
//         </a>

//       </div>
//       </Link>
//     </div>
//   );
// }
// export default ProjectCard;