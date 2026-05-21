import { motion } from "framer-motion";
import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Work } from "@/components/sections/Work";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen w-full selection:bg-foreground selection:text-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Contact />
      </main>
      <footer className="py-8 text-center text-sm font-medium text-foreground/60 border-t border-foreground/10">
        <p>© {new Date().getFullYear()} Kai. All rights reserved.</p>
      </footer>
    </div>
  );
}
