import { motion } from "framer-motion";

function AboutMe() {
  return (
    <section
      id="about"
      className="
        relative
        py-20
        px-0 md:px-2
        text-gray-200
        overflow-hidden
      "
    >
      {/* Content */}
      <div className="relative max-w-4xl md:max-w-6xl md:px-2 lg:max-w-4xl mx-auto">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          About Me
        </h2>

        {/* Underline */}
        <div className="w-16 h-1 bg-white mx-auto mt-3 mb-10"></div>

        {/* Text Content */}
        <div className="space-y-6 text-left leading-relaxed text-sm md:text-xl">

          <motion.p 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="text-sm md:text-xl font-semibold">
            I build modern, conversion-focused <span className="font-bold text-white">eCommerce</span> websites that are designed to do more than just look good, they are built to drive results.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}>
            With experience in <span className="font-bold text-white">frontend </span>development and <span className="font-bold text-white">Shopify</span> customization, I create fast, responsive, and user-friendly interfaces that make it easy for customers to browse, trust, and buy. Every decision I make, from layout to interaction, is focused on improving user experience and increasing conversions.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}>
            I understand that a successful online store is not just about design, it is about how users move through the experience. From product discovery to checkout, I design systems that guide customers naturally and reduce friction at every step.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}>
            Whether it is a Shopify store or a custom-built website, my goal is always the same, to help businesses grow by turning visitors into customers and customers into repeat buyers.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}>
            If you are looking to build or improve your online store, I am open to working with brands that care about quality, performance, and real results.
          </motion.p>

        </div>

      </div>
    </section>
  );
}

export default AboutMe;