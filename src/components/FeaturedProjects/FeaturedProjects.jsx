import projects from "./ProjectData";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";


function FeaturedProjects() {
  const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
};

  return (
    <section id="projects" className="relative py-24 px-0 text-gray-200 overflow-hidden">

     
      <div className="relative max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Featured Projects
          </h2>
        <div className="w-20 h-1 bg-white mx-auto mt-4"></div>
          <p className="text-gray-400 mt-3 md:text-xl">
            Projects where I design and build Shopify stores and marketing systems that turn visitors into paying customers.
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <ProjectCard key={index} project={project} />
            </motion.div>
          ))}

        </motion.div>

      </div>
    </section>
  );
}


export default FeaturedProjects
