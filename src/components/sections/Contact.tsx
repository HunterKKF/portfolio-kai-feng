import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, AlertCircle, Loader } from "lucide-react";
import kaiLogo from "@assets/Kai_Logo_1775102628251.png";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/mredqzrk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      setName(""); setEmail(""); setMessage("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t-2 border-foreground/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-6 mb-8">
            <div
              className="shrink-0 w-20 h-44 md:w-28 md:h-64"
              style={{
                backgroundColor: "#1a1a4e",
                WebkitMaskImage: `url(${kaiLogo})`,
                WebkitMaskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskImage: `url(${kaiLogo})`,
                maskSize: "contain",
                maskRepeat: "no-repeat",
                maskPosition: "center",
              }}
            />
            <h2 className="text-6xl md:text-8xl font-heading font-black tracking-tighter uppercase">
              Let's<br/>Talk.
            </h2>
          </div>
          <p className="text-2xl font-medium text-foreground/80 mb-12 max-w-md">
            Got an idea or just want to connect? I'm always up for new stories and projects.
          </p>
          
          <a 
            href="mailto:kylefung91@outlook.com" 
            className="inline-flex items-center gap-4 text-3xl md:text-4xl font-heading font-bold hover:opacity-60 transition-opacity group"
          >
            kylefung91@outlook.com
            <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-foreground/5 p-8 md:p-12 border-2 border-foreground"
        >
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-foreground/70">Name</label>
              <input 
                type="text" 
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent border-b-2 border-foreground/30 py-3 text-xl font-medium focus:outline-none focus:border-foreground transition-colors placeholder:text-foreground/30"
                placeholder="John Doe"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-foreground/70">Email</label>
              <input 
                type="email" 
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b-2 border-foreground/30 py-3 text-xl font-medium focus:outline-none focus:border-foreground transition-colors placeholder:text-foreground/30"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest text-foreground/70">Message</label>
              <textarea 
                id="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-transparent border-b-2 border-foreground/30 py-3 text-xl font-medium focus:outline-none focus:border-foreground transition-colors resize-none placeholder:text-foreground/30"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="w-full py-4 bg-foreground text-background font-bold uppercase tracking-widest hover:bg-foreground/90 transition-colors disabled:opacity-60 flex items-center justify-center gap-3"
            >
              {status === "sending" && <Loader className="w-4 h-4 animate-spin" />}
              {status === "sent" && <CheckCircle className="w-4 h-4" />}
              {status === "error" && <AlertCircle className="w-4 h-4" />}
              {status === "idle" && "Send Message"}
              {status === "sending" && "Sending…"}
              {status === "sent" && "Message Sent!"}
              {status === "error" && "Failed — Try Again"}
            </button>
            {status === "error" && (
              <p className="text-sm text-red-500 text-center -mt-4">Something went wrong. Please email directly at kylefung91@outlook.com</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
