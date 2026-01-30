import { Send } from "lucide-react";

function ContactForm() {
  return (
    <section className="relative py-12 px-0 overflow-hidden">
      {/* dotted background */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="relative max-w-4xl mx-auto text-white">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <div className="w-22 h-1 bg-white mx-auto mb-5" />
          <p className="text-white/60 text-lg">
            Have a project in mind? Let’s discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-slate-900/80 backdrop-blur border border-white/30 rounded-2xl p-6 sm:p-8 shadow-lg">
          <form className="text-left space-y-5">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-white/60">Name *</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-1 w-full rounded-lg bg-white/10 border border-white/30 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              </div>

              <div>
                <label className="text-xs text-white/60">Email *</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="mt-1 w-full rounded-lg bg-white/10 border border-white/30 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-white/60">Phone Number *</label>
                <input
                  type="tel"
                  placeholder="Your phone number"
                  className="mt-1 w-full rounded-lg bg-white/10 border border-white/30 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              </div>

              <div>
                <label className="text-xs text-white/60">Subject *</label>
                <input
                  type="text"
                  placeholder="What’s this about?"
                  className="mt-1 w-full rounded-lg bg-white/10 border border-white/30 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="text-xs text-white/60">Message *</label>
              <textarea
                rows={7}
                placeholder="Tell me about your project..."
                className="mt-1 w-full rounded-lg bg-white/10 border border-white/30 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 resize-none"
              />
            </div>

            {/* Button */}
            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="flex items-center gap-2 bg-white text-black text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-white/90 transition"
              >
                Send Message
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
export default ContactForm