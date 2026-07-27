// src/components/Contact.jsx
import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  MessageSquare,
  CheckCircle2,
  Loader2,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hafizahmadshirzad@gmail.com",
    href: "mailto:hafizahmadshirzad@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Afghanistan",
    href: "#",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+93 706 429 910",
    href: "tel:+93706429910",
  },
];

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/Haifz-Ahmad-Shirzad",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/hafiz-ahmad-shirzad-297868335",
  },
];
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   setTimeout(() => {
  //     setIsSubmitting(false);
  //     setIsSubmitted(true);
  //     setFormData({ name: "", email: "", subject: "", message: "" });
  //     setTimeout(() => setIsSubmitted(false), 5000);
  //   }, 2000);
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      toast.loading("Sending...");
      setIsSubmitted(true);
      toast.success("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error(error);

      alert("Failed to send message.");
      toast.error("Failed to send message.");
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="relative px-4 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div data-aos="fade-up" className="mb-16 text-center">
          <span className="text-[#00ff88] text-sm font-medium tracking-widest uppercase">
            Contact
          </span>
          <h2 className="mt-3 mb-4 text-4xl font-bold md:text-5xl font-display">
            <span className="text-white">Get In </span>
            <span className="text-gradient">Touch</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            Have a project idea or want to discuss software development
            opportunities? Feel free to contact me.
          </p>
        </div>

        <div className="grid max-w-5xl gap-8 mx-auto lg:grid-cols-3">
          {/* Contact Info Cards */}
          <div
            data-aos="fade-right"
            data-aos-duration="800"
            className="space-y-4"
          >
            {contactInfo.map((info, i) => (
              <a
                key={i}
                href={info.href}
                className="block p-5 transition-all duration-300 rounded-2xl glass-card glass-card-hover"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00ff88]/10 flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-[#00ff88]" />
                  </div>
                  <div>
                    <p className="text-xs tracking-wider text-gray-500 uppercase">
                      {info.label}
                    </p>
                    <p className="font-medium text-white">{info.value}</p>
                  </div>
                </div>
              </a>
            ))}

            {/* Social Card */}
            <div className="p-5 rounded-2xl glass-card">
              <p className="mb-3 text-xs tracking-wider text-gray-500 uppercase">
                Follow Me
              </p>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg glass-card text-sm text-gray-400 hover:text-[#00ff88] hover:border-[#00ff88]/30 transition-all"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            data-aos="fade-left"
            data-aos-duration="800"
            className="lg:col-span-2"
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 md:p-8 rounded-3xl glass-card"
            >
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#00ff88]/10 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-[#00ff88]" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    Message Sent!
                  </h3>
                  <p className="text-gray-400">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid gap-4 mb-4 sm:grid-cols-2">
                    <div>
                      <label className="block mb-2 text-sm text-gray-400">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff88]/40 focus:ring-1 focus:ring-[#00ff88]/20 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm text-gray-400">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff88]/40 focus:ring-1 focus:ring-[#00ff88]/20 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-sm text-gray-400">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff88]/40 focus:ring-1 focus:ring-[#00ff88]/20 transition-all"
                      placeholder="Project inquiry"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block mb-2 text-sm text-gray-400">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff88]/40 focus:ring-1 focus:ring-[#00ff88]/20 transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-[#0a0a0f] font-semibold hover:shadow-xl hover:shadow-[#00ff88]/30 transition-all duration-300 hover:scale-[1.02] active:scale-98 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
