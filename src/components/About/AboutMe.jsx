function AboutMe() {
  return (
    <section
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

          <p className="text-lg">
            I'm a passionate frontend developer with expertise in web
            development, as well as <span className="font-bold text-white">shopify theme customization</span>. I specialize in creating accessible,
            human-centered digital experiences that make a real impact.
          </p>

          <p>
            My journey as a <span className="font-bold text-white">frontend developer</span> started with a simple idea, every user deserves a smooth experience, no matter the device in their hands. Today, I build modern, mobile responsive websites that feel natural to use and visually engaging from the first scroll. I focus on clean code, performance, and thoughtful layouts that turn visitors into users and users into loyal customers.
          </p>

          <p>
            I discovered early on that a great online store is more than just good design, it is about trust and flow. That belief drives how I design Shopify stores that guide customers effortlessly from discovery to checkout. By blending brand identity with conversion focused layouts, I help businesses tell their story, showcase their products, and confidently sell online.


          </p>

          <p>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's build something amazing together!
          </p>

        </div>

      </div>
    </section>
  );
}

export default AboutMe;