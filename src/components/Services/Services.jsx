import { Monitor } from "lucide-react";
import { FaShopify } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <section className="relative py-5 px-0 text-gray-200 overflow-hidden">

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
            title="Website Development"
            subtitle="Frontend "
            description="I create fast, modern, and fully responsive websites that deliver a smooth experience across all devices, focusing on usability, performance, and clean design."
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
            subtitle="React Native & Flutter"
            description="I build targeted Email and SMS marketing campaigns that drive engagement, nurture customer relationships, and increase sales through timely, relevant messaging."
            tags={["Sign-Up Form", "Cross-sell","Up-sell", "Abandoned Cart", "Promotions"]}
          />

          {/* Card 3 */}
          <ServiceCard
            icon={<FaShopify size={40} />}
            title="Shopify Store Design"
            subtitle="Blockchain & Smart Contracts"
            description="I design and customize high converting Shopify stores that reflect brand identity while providing a seamless and intuitive shopping experience."
            tags={[
              "Theme Customization",
              "App Integration",
              "Theme Redesign",
              "Product Listing",
            ]}
          />

        </div>

      </div>
    </section>
  );
}


export default Services