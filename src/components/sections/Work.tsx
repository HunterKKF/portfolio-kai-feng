import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { useState, useEffect } from "react";
import img1 from "@assets/1_1774937614070.jpg";
import img2 from "@assets/2_1774937479621.jpg";
import img3 from "@assets/3_1774937479621.jpg";
import img4 from "@assets/4_1774937479621.jpg";
import img5 from "@assets/5_1774937479621.jpg";
import robot1 from "@assets/maxresdefault_1774940093564.jpg";
import robot2 from "@assets/The_black_myth_of_China's_video_games：_how_Wukong_became_a_glo_1774940093564.jpg";
import robot3 from "@assets/The_black_myth_of_China's_video_games：_how_Wukong_became_a_glo_1774940093565.jpg";
import robot4 from "@assets/The_black_myth_of_China's_video_games：_how_Wukong_became_a_glo_1774940362395.jpg";
import robot5 from "@assets/The_black_myth_of_China's_video_games：_how_Wukong_became_a_glo_1774940370338.jpg";
import wukong1 from "@assets/maxresdefault_(1)_1774941443179.jpg";
import wukong2 from "@assets/The_black_myth_of_China's_video_games：_how_Wukong_became_a_glo_1774941443180.jpg";
import wukong3 from "@assets/The_black_myth_of_China's_video_games：_how_Wukong_became_a_glo_1774941457518.jpg";
import wukong4 from "@assets/The_black_myth_of_China's_video_games：_how_Wukong_became_a_glo_1774941499651.jpg";
import wukong5 from "@assets/The_black_myth_of_China's_video_games：_how_Wukong_became_a_glo_1774941499652.jpg";
import tiktok1cover from "@assets/TikSave.io_7558252139533978901-hd.mp4.00_00_00_23.Still001_1774942961850.jpg";
import tiktok2cover from "@assets/TikSave.io_7256307318810299649-hd.mp4.00_00_00_00.Still001_1774942982711.jpg";
import tiktok3cover from "@assets/TikSave.io_7278929190617976071-hd.mp4.00_00_04_10.Still001_1774943034031.jpg";

const sneakerImages = [img1, img2, img3, img4, img5];
const robotImages = [robot1, robot2, robot3, robot4, robot5];
const wukongImages = [wukong1, wukong2, wukong3, wukong4, wukong5];

const projects = [
  {
    title: "Instant credibility",
    category: "Would you spend $200,000 on a pair of sneakers you can't even wear? Here's why some people do.",
    description: "This award-winning multimedia feature explores how sneakers evolved from functional sportswear into high-value cultural and digital commodities — shaped not just by design, but by branding and storytelling.",
    award: { text: "Winner — 29th Quill Award (2023), Innovation in Journalism", link: "https://www.melbournepressclub.com/article/29th-quills-innovation-in-journalism-sponsored-by-ryman-healthcare" },
    images: sneakerImages,
    slideshow: true,
    link: "https://www.abc.net.au/news/2023-09-15/sneaker-shoes-industry-youth-nft-nike-adidas-culture/102648946"
  },
  {
    title: "Humanoid robots: China's race to build the future",
    category: "China is using generative artificial intelligence to develop humanoid robots, as it competes with the US to become the world leader in what's being dubbed a new space race.",
    description: "In this video, I started with cutting-edge technological developments, then explored connections relevant to Australian audiences. I also interviewed industry professionals and experts in Australia to tell viewers a story about the future.",
    images: robotImages,
    slideshow: true,
    link: "https://www.youtube.com/watch?v=FHMoH5B0eYg&t=70s"
  },
  {
    title: "The black myth of China's video games: how Wukong became a global hit",
    category: "Chinese video game Black Myth: Wukong has gone viral in the gaming community around the world, bringing a classic Chinese tale Journey to the West to audiences worldwide. With its incredible visuals, the game is establishing China as a gaming powerhouse.",
    description: "In this video, I explored how a Chinese game brought the classic tale to global audiences. Through storytelling and analysis, I highlighted the intersection of entertainment, technology, and soft power for an international audience.",
    images: wukongImages,
    slideshow: true,
    link: "https://www.youtube.com/watch?v=X7EnS0QPYbk"
  },
  {
    title: "Short-form Social Videos",
    category: "Crafting short-form vertical content that connects, entertains, and drives engagement.",
    description: "",
    images: [],
    slideshow: false,
    link: "#",
    tiktok: [
      { url: "https://vt.tiktok.com/ZSHFSqPuJ/", cover: tiktok1cover },
      { url: "https://vt.tiktok.com/ZSHFSrSRE/", cover: tiktok2cover },
      { url: "https://vt.tiktok.com/ZSHFShr7o/", cover: tiktok3cover }
    ]
  }
];

function Slideshow({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden bg-foreground/5 border-2 border-foreground relative group-hover:border-foreground/80 transition-colors">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="w-full h-full object-cover object-center absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </AnimatePresence>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? "bg-white scale-125" : "bg-white/50"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

type TikTokItem = { url: string; cover: string | null };

function TikTokGrid({ links }: { links: TikTokItem[] }) {
  return (
    <div className="grid grid-cols-3 gap-4 md:gap-6">
      {links.map((item, i) => (
        <a
          key={i}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative aspect-[9/16] border-2 border-foreground overflow-hidden group/card flex flex-col items-center justify-center hover:border-foreground/60 transition-colors"
        >
          {/* Cover image or dark fallback */}
          {item.cover ? (
            <img
              src={item.cover}
              alt={`TikTok video ${i + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-[#010101]">
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                  backgroundSize: "40px 40px"
                }}
              />
            </div>
          )}

          {/* Dark overlay on hover */}
          <div className="absolute inset-0 bg-black/30 group-hover/card:bg-black/50 transition-colors duration-300" />

          {/* Play button */}
          <div className="relative z-10 flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center group-hover/card:scale-110 transition-transform duration-300">
              <Play className="w-6 h-6 fill-white text-white ml-1" />
            </div>
            <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.73a4.85 4.85 0 0 1-1.01-.04z"/>
              </svg>
              <span className="text-white text-xs font-bold tracking-wide">Watch</span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export function Work() {
  return (
    <section id="work" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <motion.h2
          className="text-5xl md:text-7xl font-heading font-black tracking-tighter uppercase"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Selected<br/>Works.
        </motion.h2>

        <motion.p
          className="text-xl font-medium text-foreground/70 max-w-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Stories, videos, digital experiences and more.
        </motion.p>
      </div>

      <div className="space-y-32">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group relative block"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {'tiktok' in project && project.tiktok ? (
              <TikTokGrid links={project.tiktok as TikTokItem[]} />
            ) : project.slideshow ? (
              <Slideshow images={project.images} />
            ) : (
              <div className="w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden bg-foreground/5 border-2 border-foreground relative group-hover:border-foreground/80 transition-colors">
                <img
                  src={project.images[0] ?? ''}
                  alt={project.title}
                  className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1] grayscale-[20%] group-hover:grayscale-0"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1600&auto=format&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
              </div>
            )}

            <div className="mt-8 flex justify-between items-start gap-4">
              <div className="max-w-3xl">
                <h3 className="text-3xl md:text-4xl font-heading font-bold mb-3">
                  {project.title}
                </h3>
                <p className="text-lg font-medium text-foreground/80 mb-3 leading-relaxed">
                  {project.category}
                </p>
                {project.description && (
                  <div className="text-base text-foreground/60 font-medium leading-relaxed space-y-2">
                    {project.description.split("\n\n").map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                )}
                {'award' in project && project.award && (
                  <a
                    href={(project.award as { text: string; link: string }).link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-sm font-bold text-foreground/70 hover:text-foreground transition-colors underline underline-offset-4"
                  >
                    🏆 {(project.award as { text: string; link: string }).text}
                  </a>
                )}
              </div>

              <a
                href={project.link}
                target={project.link !== "#" ? "_blank" : undefined}
                rel={project.link !== "#" ? "noopener noreferrer" : undefined}
                className="w-16 h-16 rounded-full border-2 border-foreground flex items-center justify-center shrink-0 group-hover:bg-foreground group-hover:text-background transition-all duration-300"
                aria-label={`View ${project.title}`}
              >
                <ArrowUpRight className="w-8 h-8" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
