import { Briefcase, Monitor, Globe } from "lucide-react";
import { FaShopify } from "react-icons/fa6";
import ExperienceCard from "./ExperienceCard";


function WorkExperience() {
  const experiences = [
    {
      role: "Frontend Website Development",
      company: "Campus Space",
      location: "Remote",
      date: "05/2023 – Present",
      icon: <Monitor size={30} />,
      side: "left",
      description: [
        "I began my journey in web development by learning how to turn ideas into responsive interfaces that work smoothly on every device. Over time, I refined my skills in layout, performance, and user experience, building websites that are both functional and visually polished.",
      ],
      tech: ["Next.js", "Figma", "Tailwind CSS", "TypeScript", "React JS"],
    },
    {
      role: "Shopify Development",
      company: "Remote / Freelance",
      date: "06/2024 – Present",
      icon: <FaShopify size={30} />,
      side: "right",
      description: [
        "My Shopify journey started with understanding how online stores influence buying decisions. Through hands on practice and real projects, I learned how to design stores that balance strong branding with clear navigation and conversion focused structure.",
      ],
      tech: ["Theme Customization", "Canva", "App Integration", "Niche Research", "SEO Optimization",  "Product Research"],
    },
    {
      role: "Email & SMS Marketing",
      company: "Remote / Freelance",
      date: "08/2025 – Present",
      icon: <Briefcase size={30} />,
      side: "left",
      description: [
        "I stepped into Email and SMS marketing to help brands maintain meaningful connections after the first visit or purchase. By learning automation, segmentation, and messaging strategy, I now create campaigns that engage audiences and support long term growth.",
      ],
      tech: ["Klaviyo", "Email Flows", "Sales Funnel"],
    },
  ];

  return (
    <section id="experience" className="relative min-h-screen text-white px-3 md:px-8 lg:px-32 py-5 overflow-hidden">
      {/* dotted background */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] " />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-3">Work Experience</h2>
          <div className="w-22 h-1 bg-white mx-auto mb-4" />
          <p className="text-white/60 text-lg">
            My professional journey and the skills I've gained overtime
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
        {/* Mobile / Tablet line */}
        <div className="absolute left-4  top-0 h-full w-1 bg-white/20 lg:hidden" />


        {/* Desktop center line */}
        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 h-full w-1 bg-white/20" />


        <div className="space-y-15">
            {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;


            return (
            <div
                key={index}
                className="relative grid grid-cols-1 lg:grid-cols-2 items-start"
            >
                {/* Mobile / Tablet layout */}
                <div className="relative pl-13 lg:hidden">
                    <div className="absolute left-0 top-4 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center">
                    {exp.icon}
                </div>
                    <ExperienceCard {...exp} />
                </div>


                {/* Desktop left */}
                <div className={`hidden lg:flex ${isLeft ? "justify-end pr-12" : "justify-end pr-12 opacity-0"}`}>
                    {isLeft && <ExperienceCard {...exp} />}
                </div>


                {/* Desktop right */}
                <div className={`hidden lg:flex ${!isLeft ? "justify-start pl-12" : "justify-start pl-12 opacity-0"}`}>
                    {!isLeft && <ExperienceCard {...exp} />}
                </div>


                {/* Desktop icon */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-6 w-15 h-15 rounded-full bg-white text-black items-center justify-center">
                    {exp.icon}
                </div>
            </div>
            );
            })}
                </div>
            </div>
        </div>
    </section>
  );
}

export default WorkExperience