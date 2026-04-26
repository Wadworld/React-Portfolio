function FooterLinks() {
//   return (
//     <div className="flex flex-row justify-center gap-3 text-slate-200 text-lg">
//       <a href="#about" className="hover:text-white transition hover:underline">
//         About
//       </a>
//       <a href="#service" className="hover:text-white hover:underline transition">
//         Services
//       </a>
//       <a href="#experience" className="hover:text-white transition hover:underline">
//         Experience
//       </a>
//       <a href="#projects" className="hover:text-white transition hover:underline">
//         Projects
//       </a>
//       <a href="#contact" className="hover:text-white transition hover:underline">
//         Contact
//       </a>
//     </div>
//   );

    const links = ["about", "services", "experience", "projects", "contact"];

  return (
    <div className="flex flex-row justify-center gap-3 md:gap-6 text-slate-300">
      {links.map((link) => (
        <a
          key={link}
          href={`#${link}`}
          className="hover:text-white text-2sm font-semibold hover:underline transition"
        >
          {link.charAt(0).toUpperCase() + link.slice(1)}
        </a>
      ))}
    </div>
  );
}

export default FooterLinks;