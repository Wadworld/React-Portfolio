import { Send } from "lucide-react";
import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState(null);
// { type: "success" | "error", message: "" }
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus(null); // clear previous message immediately

    try {
      const res = await fetch("https://script.google.com/macros/s/AKfycbw9o6aeL5zjDyQeqQpBw-Z8oX99l3Cl1RFQFmvVaJ5gwtr5Hu38CrJnAVgjcGdWy1ky6g/exec", {
        method: "POST",
        body: JSON.stringify(formData)
      });

      await res.json();

      setStatus({
        type: "success",
        message: "Got your message, I’ll get back to you soon."
      })

      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });

    } catch (error) {
      console.error(error);
      
      setStatus({
      type: "error",
      message: "Something went wrong, please try again."
    });
    } finally {
      setLoading(false);

      // Auto hide after 5 seconds
      setTimeout(() => {
      setStatus(null);
    }, 5000);
    }
  };


  return (
    <section className="relative py-13 px-0 overflow-hidden"
              id="contact"
    >
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
          <form 
            onSubmit={handleSubmit}
            className="text-left space-y-5">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-white/90">Name *</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-1 w-full rounded-lg bg-white/20 border border-white/30 px-4 py-3 text-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/20"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="text-sm text-white/90">Email *</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="mt-1 w-full rounded-lg bg-white/20 border border-white/30 px-4 py-3 text-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/20"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-white/90">Phone Number *</label>
                <input
                  type="tel"
                  placeholder="Your phone number"
                  className="mt-1 w-full rounded-lg bg-white/20 border border-white/30 px-4 py-3 text-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/20"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="text-sm text-white/90">Subject *</label>
                <input
                  type="text"
                  placeholder="What’s this about?"
                  className="mt-1 w-full rounded-lg bg-white/20 border border-white/30 px-4 py-3 text-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/20"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="text-sm text-white/90">Message *</label>
              <textarea
                rows={7}
                placeholder="Tell me about your project..."
                className="mt-1 w-full rounded-lg bg-white/20 border border-white/30 px-4 py-3 text-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/20 resize-none"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            {/* Status Message */}
            {status && (
              <div
                className={`text-sm px-4 py-2 rounded-lg ${
                  status.type === "success"
                    ? "bg-green-500/20 text-green-400 border border-green-500/30"
                    : "bg-red-500/20 text-red-400 border border-red-500/30"
                }`}
              >
                {status.message}
              </div>
            )}

            {/* Button */}
            <div className="flex justify-end pt-2">
              <button
                type="submit"
                disabled={loading}
                className="flex items-center gap-2 bg-white text-black text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-white/90 transition"
              >
                {loading ? "Sending..." : "Send Message"}
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