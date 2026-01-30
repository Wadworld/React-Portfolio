import campus from "../../assets/img/eyetiff_beauty_store_300x.jpg";
import fitness from "../../assets/img/fitness.jpg";
import movies from "../../assets/img/sheriff.webp";
import propdex from "../../assets/img/urbanwear.webp";
import trust from "../../assets/img/wadoir2.jpg";
import bankr from "../../assets/img/Jmtee_beauty_store_logo.webp";
import ProjectCard from "./ProjectCard";

function FeaturedProjects() {
  const projects = [
    {
      title: "Campus Space",
      description:
        "Social and business platform for Nigerian university students",
      image: fitness,
      tags: ["Next.js", "Node.js", "MongoDB"],
      link: "#",
      featured: true,
    },
    {
      title: "Sui Marketplace",
      description:
        "Decentralized marketplace on Sui blockchain for digital assets",
      image: campus,
      tags: ["Next.js", "Sui Move", "TypeScript"],
      link: "#",
      featured: true,
    },
    {
      title: "MoviesFlix",
      description:
        "Unlimited movies, TV shows streaming platform",
      image: movies,
      tags: ["Next.js", "React", "TypeScript"],
      link: "#",
      featured: true,
    },
    {
      title: "PropDex",
      description:
        "Tokenized real estate platform on Solana blockchain",
      image: propdex,
      tags: ["Next.js", "Solana", "TypeScript"],
      link: "#",
      featured: true,
    },
    {
      title: "Trust Deliver",
      description:
        "Delivery booking platform for logistics and shipping",
      image: trust,
      tags: ["Next.js", "React", "TypeScript"],
      link: "#",
      featured: true,
    },
    {
      title: "Bankr",
      description:
        "Banking app landing page for fintech platform",
      image: bankr,
      tags: ["Next.js", "React", "TypeScript"],
      link: "#",
      featured: true,
    },
  ];

  return (
    <section className="relative py-24 px-0 text-gray-200 overflow-hidden">

     
      <div className="relative max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Featured Projects
          </h2>
        <div className="w-20 h-1 bg-white mx-auto mt-4"></div>
          <p className="text-gray-400 mt-3 md:text-xl">
            A collection of projects I've built with passion and attention to detail
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}

        </div>

      </div>
    </section>
  );
}
export default FeaturedProjects
