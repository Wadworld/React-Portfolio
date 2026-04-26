import { useParams } from "react-router-dom";
import projects from "../components/FeaturedProjects/ProjectData";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) return <div className="py-48 flex justify-center">
      <p>Project not found</p>
    </div>;

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="max-w-5xl mx-auto pt-32 pb-16 overflow-x-hidden">

      {/* Back */}
      <Link 
        to="/#projects"
        className="text-slate-400 font-lg my-8 cursor-pointer">
        <FaArrowLeft className="inline mr-2" />  Back to Projects
      </Link>

      {/* Tags */}
      <div className="flex gap-3 my-8">
        <span className="px-4 py-2 bg-slate-800/90 border border-white/10 rounded-full text-1sm font-bold">
          {project.role}
        </span>
        <span className="bg-yellow-400 text-sm font-bold text-white px-3 py-1 rounded-full justify-center flex items-center gap-1">
          <CiStar className="inline text-lg text-yellow-600 mr-1"/>  Featured Project
        </span>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">
        {project.title}
      </h1>

      {/* Description */}
      <p className="text-slate-400 leading-relaxed text-lg font-semibold">
        {project.case}
      </p>

      {/* Meta */}
      <div className="flex flex-col gap-8 md:justify-between items-start mt-10">
        <div className="flex flex-row gap-6">
          <div>
            <p className="text-sm text-slate-500">YEAR</p>
            <p className="text-xl font-bold">{project.year}</p>
          </div>
          <div>
            <p className="text-sm text-slate-500">ROLE</p>
            <p className="text-xl font-bold ">{project.role}</p>
          </div>
        </div>

        <a
          href={project.liveUrl}
          target="_blank"
          className="px-5 py-3 bg-white text-black text-lg font-semibold rounded-lg"
        >
          View Live Site <FaArrowRight className="inline ml-2" />
        </a>

        
      </div>
      <hr className="my-8 text-gray-600"/>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        <img
            src={project.image}
            alt={project.title}
            className="w-full h-80 rounded-2xl object-cover"
          />
      </motion.div>

      {/* Features */}
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-12 border bg-slate-900/80 border-white/10 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-6">
          Key Features
        </h2>

        <ul className="space-y-6 text-slate-300">
          {project.features?.map((feature, i) => (
            <li className="font-semibold" key={i}><span className="bg-white text-slate-800/90 rounded-full px-2 py-1 font-bold text-sm mr-2">✓</span> {feature}</li>
          ))}
        </ul>
      </motion.div>

      {/* Project Info */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-12 border bg-slate-900/80 border-white/10 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-6">
          Project Info
        </h2>
        <hr className="my-6 text-gray-600"/>

        
          <div className="flex flex-col gap-4">
            <p className="text-sm text-slate-500">TECHNOLOGIES</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-sm md:font-semibold bg-slate-800 border border-white/10 px-4 py-2 rounded-xl text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>

          <hr className="my-3 text-gray-600"/>

            <div>
              <p className="text-sm text-slate-500">CATEGORY</p>
              <p className="text-xl font-bold">{project.year}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">YEAR</p>
              <p className="text-xl font-bold">{project.year}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">ROLE</p>
              <p className="text-xl font-bold ">{project.role}</p>
            </div>
          </div>
      </motion.div>

    </motion.section>
  );
}

export default ProjectDetails;