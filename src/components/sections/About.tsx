import { motion } from "framer-motion";

const timeline = [
  {
    years: "2017 — Present",
    role: "Content Producer / Journalist",
    company: "Australian Broadcasting Corporation (ABC)",
    description: "Produced multimedia stories across digital, video and social, translating complex topics into engaging, audience-focused content\nCreated high-performing short-form videos for TikTok and Instagram\nLed end-to-end video production: concept, scripting, filming and editing\nDesigned reusable video templates adopted across the team, improving consistency and efficiency\nDelivered internal training on video production and social-first storytelling\nCollaborated with cross-functional teams to develop and deliver content at scale",
    link: "https://www.abc.net.au/news/kai-feng/12770604"
  }
];

export function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative">
      {/* Background large text */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none select-none flex items-center justify-center -z-10 opacity-5">
        <h2 className="text-[25vw] font-heading font-black tracking-tighter leading-none text-foreground whitespace-nowrap">
          about.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        <motion.div 
          className="lg:col-span-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="text-4xl md:text-5xl font-heading font-bold mb-8">
            The Story
          </h3>
          <div className="text-lg text-foreground/80 space-y-6 font-medium">
            <p>
              I'm a creative content producer and journalist with 8+ years of experience at the ABC, where I've worked across digital, video and social platforms.
            </p>
            <p>
              I enjoy turning complex topics — from technology and policy to culture — into stories that people actually want to watch, read and share. Along the way, I've developed a strong interest in content strategy, short-form video, and building simple, repeatable formats that help teams create better content at scale.
            </p>
          </div>
        </motion.div>

        <div className="lg:col-span-7 lg:pl-12">
          <div className="relative border-l-2 border-foreground/20 pl-8 space-y-16">
            {timeline.map((item, index) => (
              <motion.div 
                key={index}
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Bullet */}
                <div className="absolute -left-[41px] top-1.5 w-5 h-5 bg-background border-4 border-foreground rounded-full" />
                
                <div className="text-sm font-bold tracking-widest text-foreground/50 mb-2 uppercase">
                  {item.years}
                </div>
                <h4 className="text-2xl font-heading font-bold mb-1">
                  {item.role}
                </h4>
                <div className="text-lg font-semibold text-foreground mb-4">
                  {item.company}
                </div>
                <ul className="space-y-2">
                  {item.description.split("\n").map((point, i) => (
                    <li key={i} className="flex gap-3 text-foreground/70 font-medium leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground/40 shrink-0"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 px-6 py-2.5 border-2 border-foreground font-bold text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors duration-200"
                  >
                    Read More ↗
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
