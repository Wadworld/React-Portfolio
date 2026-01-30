import { CiStar } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";

function ProjectCard({ project }) {
  return (
    <div
      className="
      bg-slate-900/80
        border border-white/10
        rounded-2xl
        overflow-hidden
        flex
        flex-col
        transition
        hover:-translate-y-3
        hover:border-white/25
        hover:shadow-xl
        duration-500
        ease-in-out
        h-full
      "
    >
      {/* Image */}
      <div className="relative">

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />

        {/* Featured Badge */}
        {project.featured && (
          <span className="absolute top-3 right-3 bg-yellow-500 text-black text-xs font-semibold px-3 py-1 rounded-full">
            
            Featured
          </span>
        )}

      </div>

      {/* Content */}
      <div className="p-6 text-left flex flex-col flex-grow">

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2 md:text-2xl">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-md mb-4 md:text-lg ">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="
                text-xs
                md:font-semibold
                bg-slate-800
                border border-white/10
                px-3 py-1
                rounded-full
                text-gray-300
              "
            >
              {tag}
            </span>
          ))}
        </div>
        <hr className="mb-4 text-gray-700"/>

        {/* Button */}
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="
            mt-auto
            block
            text-center
            bg-white
            text-slate-900
            font-semibold
            text-sm
            py-2
            md:py-3
            md:font-bold
            rounded-lg
            hover:bg-gray-200
            transition
          "
        >
          View Project <FaArrowRight className="inline ml-2" />
        </a>

      </div>
    </div>
  );
}
export default ProjectCard;