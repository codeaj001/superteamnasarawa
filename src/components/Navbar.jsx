import { motion } from "framer-motion";
import { Send, ChevronRight, X } from "lucide-react";

const Navbar = ({ isLoaded }) => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={isLoaded ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-[100] pointer-events-auto"
    >
      <nav className="glass-card flex items-center justify-between px-8 py-3 rounded-full border border-white/5 shadow-2xl">
        {/* Left: Brand */}
        <div className="flex items-center gap-3">
          <a href="/" className="w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity pointer-events-auto">
            <img
              src="https://ng.superteam.fun/_next/image?url=%2Flogo.png&w=128&q=75"
              alt="Superteam Logo"
              className="w-full h-full object-contain brightness-130"
            />
          </a>
          {/* <div className="flex flex-col">
            <span className="text-white font-serif text-lg leading-none tracking-tight">SUPERTEAM</span>
            <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] -mt-1">NASARAWA</span>
          </div> */}
        </div>

        {/* Right: Links & Actions */}
        <div className="flex items-center gap-8">
          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {["Home"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[11px] font-medium text-gray-300 hover:text-primary transition-colors tracking-wide"
              >
                {item}
              </a>
            ))}
            {/* <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
            </a> */}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3 border-l border-white/10 pl-8">
            {/* <a href="#" className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-all border border-primary/20 group">
              <X className="w-3.5 h-3.5 text-primary group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-all border border-primary/20 group">
              <Send className="w-3.5 h-3.5 text-primary group-hover:scale-110 transition-transform" />
            </a> */}
          </div>

          {/* CTA Button */}
          <a
            href="https://discord.gg/88qqEbhQ8"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary-light text-black px-6 py-2.5 rounded-full flex items-center gap-2 transition-all transform hover:scale-105 active:scale-95 group shadow-lg shadow-primary/20 pointer-events-auto"
          >
            <span className="text-[11px] font-bold uppercase tracking-widest">Join us</span>
            <div className="bg-black/10 rounded-full p-0.5">
              <ChevronRight className="w-3.5 h-3.5 text-black" />
            </div>
          </a>
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
