function FooterLinks() {
  return (
    <div className="flex flex-row justify-center gap-3 text-slate-200 text-lg">
      <a href="#about" className="hover:text-white transition hover:underline">
        About
      </a>
      <a href="#service" className="hover:text-white hover:underline transition">
        Services
      </a>
      <a href="#experience" className="hover:text-white transition hover:underline">
        Experience
      </a>
      <a href="#projects" className="hover:text-white transition hover:underline">
        Projects
      </a>
      <a href="#contact" className="hover:text-white transition hover:underline">
        Contact
      </a>
    </div>
  );
}

export default FooterLinks;