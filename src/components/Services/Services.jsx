import { Monitor } from "lucide-react";
import { FaShopify } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <section id="services" className="relative py-5 px-0 text-gray-200 overflow-hidden">

      {/* Content */}
      <div className="relative max-w-7xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Services
          </h2>

          <div className="w-16 h-1 bg-white mx-auto mt-3"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">

          {/* Card 1 */}
          <ServiceCard
            icon={<Monitor size={40} />}
            title="eCommerce Website Development"
            subtitle="Frontend "
            description="I build high-converting eCommerce websites that are designed to turn visitors into customers. From clean, responsive design to optimized user journeys, every part of the site is structured to improve performance, build trust, and increase sales."
            tags={[
              "JavaScript",
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
            ]}
          />

          {/* Card 2 */}
          <ServiceCard
            icon={<MdEmail size={40} />}
            title="Email & SMS Marketing"
            subtitle="Automation & Flows"
            description="I build automated email and SMS systems that recover lost sales, nurture customers, and increase repeat purchases. From abandoned cart recovery to post-purchase flows, every message is designed to drive revenue and improve customer retention."
            tags={["Customer Retention", "Welcome Series", "Post-purchase Flows","Promotions", "Abandoned Cart Recovery", "Browse Abandonment"]}
          />

          {/* Card 3 */}
          <ServiceCard
            icon={<FaShopify size={40} />}
            title="Shopify Store Design"
            subtitle="Theme Customization & App Integration"
            description="I design and optimize Shopify stores that are built to convert. From layout structure to user experience, every element is crafted to build trust, guide customers through the buying journey, and increase overall sales."
            tags={[
              "Theme Customization",
              "App Integration",
              "Banner Design", "Store Performance",
              "Product Page Design",
              "Up-sell & Cross-sell", "SEO Optimization",
            ]}
          />

        </div>

      </div>
    </section>
  );
}


export default Services