import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import profilePhoto from "@assets/The_black_myth_of_China's_video_games：_how_Wukong_became_a_glo_1774936074902.jpg";
import adobePr from "@assets/Adobe_Premiere_Pro_CC_icon.svg_1774944248476.png";
import adobePs from "@assets/Adobe_Photoshop_CC_icon.svg_1774944248476.png";
import adobeAe from "@assets/Adobe_After_Effects_CC_icon.svg_1774944248475.png";
import adobeAu from "@assets/Adobe_Audition_CC_icon_(2020).svg_1774944248476.png";

const float = (delay: number, range = 7) => ({
  animate: { y: [0, -range, 0] },
  transition: { repeat: Infinity, duration: 3.2 + delay * 0.35, delay, ease: "easeInOut" },
});

/* Paper wrapper: gives the collage / scrapbook feel */
function Paper({
  children,
  bg = "#FFFEF0",
  rotate = 0,
  tape = false,
  tapeColor = "rgba(255,255,180,0.75)",
  shadow = "3px 5px 0px rgba(26,26,78,0.18)",
  px = 8,
  py = 8,
}: {
  children: React.ReactNode;
  bg?: string;
  rotate?: number;
  tape?: boolean;
  tapeColor?: string;
  shadow?: string;
  px?: number;
  py?: number;
}) {
  return (
    <div className="relative" style={{ transform: `rotate(${rotate}deg)` }}>
      {/* Tape strip */}
      {tape && (
        <div
          style={{
            position: "absolute",
            top: -10,
            left: "50%",
            transform: "translateX(-50%)",
            width: 28,
            height: 12,
            background: tapeColor,
            borderRadius: 2,
            border: "1px solid rgba(200,200,100,0.4)",
            zIndex: 10,
          }}
        />
      )}
      <div
        style={{
          background: bg,
          boxShadow: shadow,
          borderRadius: "3px 9px 6px 7px / 7px 4px 9px 3px",
          border: "1.5px solid rgba(26,26,78,0.45)",
          padding: `${py}px ${px}px`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

/* Shared drop-shadow filter for paper sticker lift */
const paperFilter = "drop-shadow(2px 5px 3px rgba(26,26,78,0.22))";

function IlloCamera({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  const f = float(delay);
  return (
    <motion.div animate={f.animate} transition={f.transition} className={`absolute z-[1] ${className}`}>
      <svg width="78" height="72" viewBox="0 0 78 72" fill="none" style={{ filter: paperFilter, transform: "rotate(-7deg)" }}>
        {/* Torn paper background */}
        <path d="M7 6 L18 2 L30 5 L44 1 L57 4 L68 1 L75 7 L73 18 L76 30 L74 44 L76 56 L72 66 L60 70 L47 67 L33 70 L20 68 L9 71 L2 64 L5 52 L2 38 L4 24 L2 12 Z"
          fill="#FFFDE8" stroke="#2a2a1a" strokeWidth="1.2" strokeLinejoin="round"/>
        {/* Camera body — sketch outline style */}
        <rect x="16" y="26" width="46" height="30" rx="5" fill="none" stroke="#1a1a2e" strokeWidth="2.2"/>
        {/* Viewfinder bump */}
        <rect x="26" y="19" width="14" height="9" rx="3" fill="none" stroke="#1a1a2e" strokeWidth="2"/>
        {/* Lens outer circle */}
        <circle cx="39" cy="41" r="11" fill="none" stroke="#1a1a2e" strokeWidth="2.2"/>
        {/* Lens inner */}
        <circle cx="39" cy="41" r="6" fill="none" stroke="#1a1a2e" strokeWidth="1.8"/>
        {/* Lens glint */}
        <circle cx="35" cy="37" r="2" fill="#1a1a2e" opacity="0.25"/>
        {/* Flash */}
        <rect x="50" y="29" width="6" height="4" rx="1.5" fill="none" stroke="#1a1a2e" strokeWidth="1.8"/>
        {/* Flash lines */}
        <line x1="22" y1="36" x2="22" y2="44" stroke="#1a1a2e" strokeWidth="1.5"/>
        {/* Shutter button */}
        <circle cx="57" cy="22" r="4" fill="none" stroke="#1a1a2e" strokeWidth="1.5"/>
      </svg>
    </motion.div>
  );
}

function IlloMic({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  const f = float(delay);
  return (
    <motion.div animate={f.animate} transition={f.transition} className={`absolute z-[1] ${className}`}>
      <svg width="72" height="78" viewBox="0 0 72 78" fill="none" style={{ filter: paperFilter, transform: "rotate(6deg)" }}>
        {/* Star-burst / irregular paper shape */}
        <path d="M36 2 L44 8 L54 4 L58 14 L68 16 L66 27 L74 34 L68 42 L72 52 L62 57 L62 68 L51 69 L44 76 L36 71 L28 76 L21 69 L10 68 L10 57 L0 52 L4 42 L-2 34 L6 27 L4 16 L14 14 L18 4 L28 8 Z"
          fill="#F5EDD6" stroke="#2a2010" strokeWidth="1.2" strokeLinejoin="round"/>
        {/* Vintage mic body */}
        <rect x="28" y="16" width="16" height="24" rx="8" fill="none" stroke="#1a1a2e" strokeWidth="2"/>
        {/* Grille lines */}
        <line x1="28" y1="22" x2="44" y2="22" stroke="#1a1a2e" strokeWidth="1.5"/>
        <line x1="28" y1="27" x2="44" y2="27" stroke="#1a1a2e" strokeWidth="1.5"/>
        <line x1="28" y1="32" x2="44" y2="32" stroke="#1a1a2e" strokeWidth="1.5"/>
        {/* Stand arc */}
        <path d="M22 38 Q22 52 36 52 Q50 52 50 38" stroke="#1a1a2e" strokeWidth="2" fill="none" strokeLinecap="round"/>
        {/* Pole */}
        <line x1="36" y1="52" x2="36" y2="60" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round"/>
        {/* Base */}
        <line x1="26" y1="60" x2="46" y2="60" stroke="#1a1a2e" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Sound lines */}
        <path d="M18 24 Q14 28 18 34" stroke="#1a1a2e" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5"/>
        <path d="M54 24 Q58 28 54 34" stroke="#1a1a2e" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5"/>
      </svg>
    </motion.div>
  );
}

function IlloMonitor({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  const f = float(delay);
  return (
    <motion.div animate={f.animate} transition={f.transition} className={`absolute z-[1] ${className}`}>
      <svg width="80" height="70" viewBox="0 0 80 70" fill="none" style={{ filter: paperFilter, transform: "rotate(-5deg)" }}>
        {/* Torn paper background */}
        <path d="M5 5 L18 1 L32 4 L47 0 L62 3 L73 1 L78 8 L76 20 L79 34 L77 48 L79 60 L74 68 L60 70 L45 67 L30 69 L16 68 L5 70 L1 62 L3 50 L0 36 L3 22 L1 10 Z"
          fill="#EBF3FF" stroke="#101828" strokeWidth="1.2" strokeLinejoin="round"/>
        {/* Monitor frame */}
        <rect x="10" y="10" width="60" height="40" rx="4" fill="none" stroke="#1a1a2e" strokeWidth="2"/>
        {/* Screen area */}
        <rect x="14" y="14" width="52" height="32" rx="2" fill="#C8DEFF" stroke="#1a1a2e" strokeWidth="1.2"/>
        {/* Text lines on screen */}
        <rect x="20" y="20" width="22" height="3" rx="1.5" fill="#1a1a2e" opacity="0.4"/>
        <rect x="20" y="27" width="34" height="2.5" rx="1.2" fill="#1a1a2e" opacity="0.3"/>
        <rect x="20" y="33" width="28" height="2.5" rx="1.2" fill="#1a1a2e" opacity="0.3"/>
        <rect x="20" y="39" width="18" height="2.5" rx="1.2" fill="#1a1a2e" opacity="0.25"/>
        {/* Stand */}
        <line x1="40" y1="50" x2="40" y2="60" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round"/>
        <line x1="30" y1="60" x2="50" y2="60" stroke="#1a1a2e" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    </motion.div>
  );
}

function AdobeIcon({
  src, alt, rotate = 0, className = "", delay = 0,
}: {
  src: string; alt: string; rotate?: number; className?: string; delay?: number;
}) {
  const f = float(delay);
  return (
    <motion.div animate={f.animate} transition={f.transition} className={`absolute z-[1] ${className}`}>
      <div style={{ transform: `rotate(${rotate}deg)`, filter: "drop-shadow(2px 4px 4px rgba(26,26,78,0.25))" }}>
        <img src={src} alt={alt} width={54} height={54} style={{ borderRadius: 12, display: "block" }} />
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[100dvh] pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-center relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          className="lg:col-span-8 z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xl md:text-2xl font-medium mb-6 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-foreground inline-block"></span>
            Hello, I'm Kai
          </p>
          <h1 className="text-[7vw] sm:text-[6vw] lg:text-[5vw] leading-[0.95] font-heading font-black tracking-tighter uppercase mb-6 text-foreground">
            Creative<br />Content<br />Producer
          </h1>
          <p className="text-xl md:text-2xl font-medium text-foreground/80 max-w-xl mb-12">
            I craft stories and multimedia content that are clear, engaging, and built to resonate.
          </p>

          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-foreground text-foreground font-bold tracking-wide uppercase hover:bg-foreground hover:text-background transition-colors"
          >
            More
            <ArrowDownRight className="w-5 h-5" />
          </motion.a>
        </motion.div>

        <motion.div
          className="lg:col-span-4 relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative w-80 h-80 md:w-[26rem] md:h-[26rem]">
            {/* Dashed ring */}
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-foreground rounded-full border-dashed opacity-30 animate-spin-slow" style={{ animationDuration: "20s" }}></div>
            <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-foreground rounded-full opacity-10"></div>

            {/* Illustrated paper badges */}
            <IlloCamera className="-top-3 left-2" delay={0} />
            <IlloMic className="-top-3 right-2" delay={0.6} />
            <IlloMonitor className="-bottom-3 left-4" delay={1.2} />

            {/* Adobe icon badges */}
            <AdobeIcon src={adobePr} alt="Adobe Premiere Pro" rotate={-6} className="top-[22%] -right-12" delay={0.3} />
            <AdobeIcon src={adobeAu} alt="Adobe Audition" rotate={5} className="top-[52%] -right-12" delay={0.7} />
            <AdobeIcon src={adobePs} alt="Adobe Photoshop" rotate={-4} className="-bottom-3 right-4" delay={0.9} />
            <AdobeIcon src={adobeAe} alt="Adobe After Effects" rotate={7} className="top-[38%] -left-12" delay={1.5} />

            {/* Profile photo — z-10 so it sits in front of the floating badges */}
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-foreground relative z-10 bg-foreground/5 p-2">
              <img
                src={profilePhoto}
                alt="Kai"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-6 md:left-12 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs uppercase font-bold tracking-widest rotate-90 origin-left translate-y-8 translate-x-3 text-foreground/50">Scroll</span>
        <div className="w-[2px] h-16 bg-foreground/20 relative overflow-hidden">
          <motion.div
            className="w-full h-1/2 bg-foreground absolute top-0"
            animate={{ y: [0, 64] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
