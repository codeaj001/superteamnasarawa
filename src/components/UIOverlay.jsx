import { Scroll, Html } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import { Send, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useEffect } from "react";

const UIOverlay = ({ isLoaded }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const galleryEvents = [
    {
      id: 1,
      title: "Co-working Session",
      // date: "Oct 24, 2025",
      cover: "/assets/events/coworking.jpeg",
      images: [
        "/assets/events/coworking.jpeg",
        "/assets/events/event_2_1777328529586.png",
      ]
    },
    {
      id: 2,
      title: "Nasarawa Dev Hangout",
      // date: "Nov 12, 2025",
      cover: "/assets/events/devhangout.jpeg",
      images: [
        "/assets/events/devhangout.jpeg",
        "/assets/events/event_1_1777328500819.png"
      ]
    }
  ];

  const builders = [
    { name: "JoJo", role: "Digital Writer", img: "https://pbs.twimg.com/profile_images/2003343493075173376/SAjZp-Ef_400x400.jpg", x: "https://x.com/de_fi_jo" },
    { name: "Dave", role: "Mobile Engineer", img: "https://pbs.twimg.com/profile_images/1965521661433692160/Wzl_ujHl_400x400.jpg", x: "https://x.com/itsdavetech" },
    { name: "Code AJ", role: "Solana Dev", img: "https://pbs.twimg.com/profile_images/2006745698205581312/ooDldMkx_400x400.jpg", x: "https://x.com/codeajdotsol" },
    { name: "C.E", role: "Software Engineer", img: "https://pbs.twimg.com/profile_images/1866718773295628288/9bmtGfSS_400x400.png", x: "https://x.com/blaqrio" },
    { name: "Khee", role: "Fullstack Dev", img: "https://pbs.twimg.com/profile_images/2017213496774062080/k9Nuw6RO_400x400.jpg", x: "https://x.com/KudiratObo30415" },
    { name: "Kryptoknight", role: "Trader", img: "https://pbs.twimg.com/profile_images/1954808182175342592/04SmjJoX_400x400.jpg", x: "https://x.com/enoch__ikughur" },
    { name: "AQ", role: "Fullstack Engineer", img: "https://pbs.twimg.com/profile_images/1818555972832370688/ArF6sn1K_400x400.jpg", x: "Https://x.com/osamaabduljnr" },
    { name: "Diva Visuals", role: "Graphic Designer", img: "https://pbs.twimg.com/profile_images/1987040906722086912/i_txQrPh_400x400.jpg", x: "https://x.com/diva_visuals" },
    { name: "Amazingmercy", role: "Backend Dev", img: "https://pbs.twimg.com/profile_images/1652329675476066306/wA2_3WLc_400x400.jpg", x: "https://x.com/Amazing_mercy" },
    { name: "Creatoh", role: "Creative Designer", img: "https://pbs.twimg.com/profile_images/2026639976306188288/gCgKvJqL_400x400.jpg", x: "https://x.com/Web3Creatoh" },
    { name: "Armzod The Premium Dust", role: "Trader", img: "https://pbs.twimg.com/profile_images/2036540930723889152/OFz6D6ew_400x400.jpg", x: "https://x.com/thepremiumdust" },
    { name: "Miracle Amarachy", role: "Frontend Developer", img: "https://pbs.twimg.com/profile_images/1652240128067223552/J4AXk47V_400x400.jpg", x: "https://x.com/dev_amichy" },
    { name: "Abim", role: "Content Writer", img: "https://pbs.twimg.com/profile_images/2006817015927889920/uz7eNPwI_400x400.jpg", x: "https://x.com/AbimG4G" }
  ];

  useEffect(() => {
    if (!isLoaded || isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % builders.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isLoaded, isPaused, builders.length]);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % builders.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + builders.length) % builders.length);

  return (
    <>
      {/* Scrollytelling Content */}
      <Scroll html>
        <section className="w-screen h-screen flex flex-col justify-center px-6 md:px-12 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="max-w-2xl"
          >
            <h2 className="font-serif text-6xl sm:text-7xl md:text-8xl mb-4 leading-[0.9] tracking-tight">Superteam <br /><span className="text-primary neon-text italic">Nasarawa</span></h2>
            <p className="text-gray-400 text-base md:text-lg max-w-md font-sans">
              Welcome to the Nasarawa Hub. A holographic glimpse into the community decentralizing opportunities across Nigeria.
            </p>
          </motion.div>
        </section>

        <section className="w-screen h-screen flex flex-col justify-end items-end p-24 text-right pointer-events-none">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass-card p-12 max-w-lg border-primary/20"
          >
            <span className="text-primary text-[10px] uppercase tracking-widest block mb-4">Milestone 01</span>
            <h2 className="font-serif text-5xl mb-6">Regional Powerhouses</h2>
            <p className="text-gray-400 leading-relaxed">
              From Keffi to Lafia, we are building a network of creators, developers, and operators who are shaping the Solana ecosystem from the heart of Nigeria.
            </p>
          </motion.div>
        </section>

        <section className="min-h-screen w-screen flex flex-col justify-center items-center pointer-events-none py-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <h2 className="font-serif text-6xl mb-12 italic uppercase tracking-tighter">The Minds <span className="text-primary neon-text">Behind</span></h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl px-8">
              {[
                {
                  name: "Talktoeddie",
                  role: "State Lead",
                  img: "https://pbs.twimg.com/profile_images/1885277833569714176/X0oargNC_400x400.jpg",
                  twitter: "https://x.com/talk_toeddie",
                },
                {
                  name: "Antoni Neutron",
                  role: "Devrel",
                  img: "https://pbs.twimg.com/profile_images/1929145643001434112/vRzT4SB9_400x400.jpg",
                  twitter: "https://x.com/neutronUNO",
                },
                {
                  name: "Callmeabu",
                  role: "Designers Lead",
                  img: "https://pbs.twimg.com/profile_images/2036869324640825344/90ELghus_400x400.jpg",
                  twitter: "https://x.com/Callmeabu",
                },
                {
                  name: "Digital Monarch",
                  role: "Content Lead",
                  img: "https://pbs.twimg.com/profile_images/2012222991535390720/guT0cIwN_400x400.jpg",
                  twitter: "https://x.com/Digitalmonarch",
                }
              ].map((member, i) => (
                <div key={i} className="glass-card p-6 w-full text-center border-white/5 hover:border-primary/30 transition-all group pointer-events-auto">
                  {/* Image Container */}
                  <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden border-2 border-primary/20 p-1 group-hover:border-primary/50 transition-all">
                    <div className="w-full h-full rounded-full bg-primary/10 overflow-hidden">
                      <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                    </div>
                  </div>

                  {/* Name & Role */}
                  <h3 className="font-serif text-lg mb-1 leading-tight">{member.name}</h3>
                  <p className="text-[9px] uppercase tracking-widest text-primary mb-4">{member.role}</p>

                  {/* Social Handles (Clickable) */}
                  <div className="flex justify-center gap-3 mt-2 pt-4 border-t border-white/5">
                    <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-full bg-white/5 hover:bg-primary/20 text-gray-400 hover:text-primary transition-all">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
                    </a>
                    <a href="#" className="p-1.5 rounded-full bg-white/5 hover:bg-primary/20 text-gray-400 hover:text-primary transition-all">
                      <Send className="w-3 h-3" />
                    </a>
                    <a href="#" className="p-1.5 rounded-full bg-white/5 hover:bg-primary/20 text-gray-400 hover:text-primary transition-all">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="min-h-screen w-screen flex flex-col justify-start items-center pointer-events-none overflow-hidden pt-40 pb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center w-full"
          >
            <h2 className="font-serif text-5xl mb-16 tracking-tight">Meet the <span className="text-primary italic neon-text uppercase">Builders</span></h2>

            <div
              className="relative h-[450px] w-full flex items-center justify-center perspective-[1200px]"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-10 z-[100] p-4 rounded-full glass-card hover:bg-primary/20 text-white/50 hover:text-primary transition-all pointer-events-auto border-white/10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-10 z-[100] p-4 rounded-full glass-card hover:bg-primary/20 text-white/50 hover:text-primary transition-all pointer-events-auto border-white/10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {builders.map((builder, i) => {
                const offset = (i - activeIndex + builders.length) % builders.length;
                const normalizedOffset = offset > builders.length / 2 ? offset - builders.length : offset;
                const isActive = normalizedOffset === 0;

                return (
                  <motion.div
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    animate={{
                      opacity: Math.max(0, 1 - Math.abs(normalizedOffset) * 0.4),
                      x: normalizedOffset * 320,
                      z: -Math.abs(normalizedOffset) * 150,
                      rotateY: normalizedOffset * -25,
                      scale: isActive ? 1.1 : 0.85
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className={`absolute glass-card p-8 w-64 border-primary/20 pointer-events-auto cursor-pointer ${isActive ? 'shadow-primary/20 shadow-2xl z-10 border-primary/40' : 'z-0 grayscale opacity-50'}`}
                  >
                    <div className="w-32 h-32 rounded-xl mx-auto mb-6 overflow-hidden border border-primary/30">
                      <img src={builder.img} alt={builder.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="font-serif text-2xl mb-1">{builder.name}</h3>
                    <p className="text-[9px] uppercase tracking-[0.3em] text-primary mb-6">{builder.role}</p>

                    <div className="flex justify-center gap-3 pt-4 border-t border-white/5">
                      <a
                        href={builder.x.startsWith('http') ? builder.x : `https://x.com/${builder.x}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-black transition-all"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
                      </a>
                      <a href="#" className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white transition-all">
                        <Send className="w-3" />
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <p className="mt-16 text-[10px] text-white/30 uppercase tracking-[0.5em]">The Core Nasarawa Community</p>
          </motion.div>
        </section>

        <section className="min-h-screen w-screen flex flex-col justify-center items-center pointer-events-none py-40">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center w-full max-w-6xl px-12"
          >
            <h2 className="font-serif text-5xl mb-4 tracking-tight">Ecosystem <span className="text-primary italic neon-text uppercase">Products</span></h2>
            <p className="text-gray-400 text-sm mb-20 uppercase tracking-[0.2em]">Crafted by Nasarawa Builders</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  title: "Symbal",
                  author: "Antoni",
                  img: "https://pbs.twimg.com/profile_banners/1753183502575558656/1753292294/1500x500",
                  x: "https://x.com/symbal_fun",
                  web: "https://symbal.fun/",
                  desc: "Discover endless games generated instantly from simple text prompts. Play what others have imagined, or bring your own ideas to life."
                },
                {
                  title: "EduLearn",
                  author: "Dave",
                  img: "https://pbs.twimg.com/profile_banners/1899785363322793984/1762948337/600x200",
                  x: "https://x.com/edulearndotfun",
                  web: "https://www.edulearn.fun/",
                  desc: "Chat with an AI tutor, take quizzes, earn XP and NFTs, EduLearn makes every study session rewarding."
                },
                {
                  title: "TitaLabs",
                  author: "Antoni",
                  img: "/titaflow.png",
                  x: "https://x.com/TitaFlow_",
                  web: "https://www.titalabs.xyz/",
                  desc: "At Tita Labs Ltd, we specialize in computer programming, consultancy, and related activities. Our mission is to transform ideas into robust, scalable software solutions that drive business growth."
                },
                // {
                //   title: "Flexus",
                //   author: "Code AJ",
                //   img: "/flexus.png",
                //   x: "https://x.com/flexushq",
                //   web: "https://www.flexus.live/",
                //   desc: "Ai Privacy-first Headless wallet on Telegram and Whatsapp."
                // }
              ].map((product, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="glass-card group p-2 border-white/5 hover:border-primary/40 transition-all pointer-events-auto overflow-hidden text-left"
                >
                  <div className="relative h-64 overflow-hidden rounded-xl">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />

                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      <div>
                        <h3 className="font-serif text-2xl text-white group-hover:text-primary transition-colors">{product.title}</h3>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest">Built by {product.author}</p>
                      </div>
                      <div className="flex gap-2">
                        <a href={product.x} className="p-2.5 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-primary hover:text-black transition-all">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
                        </a>
                        <a href={product.web} className="p-2.5 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-primary hover:text-black transition-all">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-500 text-sm leading-relaxed">{product.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="min-h-screen w-screen flex flex-col justify-center items-center pointer-events-none py-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center w-full max-w-6xl px-12"
          >
            <h2 className="font-serif text-5xl mb-4 tracking-tight">Community <span className="text-primary italic neon-text uppercase">Gallery</span></h2>
            <p className="text-gray-400 text-sm mb-16 uppercase tracking-[0.2em]">Moments from Nasarawa</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {galleryEvents.map((event) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedEvent(event)}
                  className="glass-card group cursor-pointer border-white/5 hover:border-primary/40 transition-all pointer-events-auto overflow-hidden text-left shadow-lg shadow-black/50"
                >
                  <div className="relative h-64 overflow-hidden rounded-t-xl">
                    <img
                      src={event.cover}
                      alt={event.title}
                      className="w-full h-full object-cover grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80" />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-primary text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm">{event.date}</span>
                    </div>
                  </div>
                  <div className="p-6 text-center bg-white/5 border-t border-white/10 group-hover:bg-white/10 transition-colors">
                    <h3 className="font-serif text-2xl text-white group-hover:text-primary transition-colors">{event.title}</h3>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-2 flex items-center justify-center gap-1 group-hover:text-gray-300">
                      COMING SOON <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="w-screen min-h-screen flex flex-col justify-center px-6 md:px-12 pointer-events-none pb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-xl mx-auto md:mx-0 text-center md:text-left"
          >
            <h2 className="font-serif text-5xl md:text-7xl mb-6 md:mb-8 leading-none italic uppercase">Ready to <br />Level Up?</h2>
            <a href="https://discord.gg/88qqEbhQ8" target="_blank" rel="noopener noreferrer" className="inline-block pointer-events-auto bg-primary text-black text-sm md:text-base font-bold uppercase tracking-widest px-6 py-3 md:px-8 md:py-4 rounded-full hover:bg-primary-light transition-all transform hover:scale-105 neon-border">
              Join Superteam Nasarawa
            </a>
          </motion.div>
        </section>

        {/* Professional Footer */}
        <section className="w-screen bg-gradient-to-t from-black via-[#0a0a0a] to-transparent border-t border-white/5 pt-32 pb-12 px-6 md:px-12 pointer-events-auto">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start focus-visible:outline-none">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center border border-primary/30">
                  <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_8px_#00ffa3]"></div>
                </div>
                <span className="font-serif text-2xl tracking-wider text-white pt-1">Superteam <span className="text-primary italic">Nasarawa</span></span>
              </div>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">Decentralizing Opportunities across Nigeria.</p>
            </div>

            <div className="flex gap-4">
              {/* <a href="#" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-primary/20 text-gray-400 hover:text-primary transition-all">
                 <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
               </a>
               <a href="https://discord.gg/88qqEbhQ8" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-primary/20 text-gray-400 hover:text-primary transition-all">
                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
               </a> */}
            </div>
          </div>

          <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] text-gray-600 uppercase tracking-widest">
            <p>© {new Date().getFullYear()} Superteam Nasarawa. All rights reserved.</p>
            <p className="flex items-center gap-2">Built on <span className="text-white hover:text-primary cursor-pointer transition-colors font-bold">Solana</span></p>
          </div>
        </section>
      </Scroll>

      {/* Event Gallery Modal */}
      <Html fullscreen zIndexRange={[100, 0]}>
        <AnimatePresence>
          {selectedEvent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-8 backdrop-blur-md pointer-events-auto"
              onClick={() => setSelectedEvent(null)}
            >
              <div
                className="bg-[#0a0a0a] border border-primary/30 p-8 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(0,255,163,0.1)] relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-8 border-b border-white/10 pb-6">
                  <div>
                    <h3 className="text-4xl font-serif text-white">{selectedEvent.title}</h3>
                    <p className="text-primary text-xs uppercase tracking-widest mt-2">{selectedEvent.date}</p>
                  </div>
                  <button onClick={() => setSelectedEvent(null)} className="p-2 bg-white/5 rounded-full text-gray-400 hover:text-red-400 hover:bg-white/10 transition-all border border-transparent hover:border-red-400/30">
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedEvent.images.map((img, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="group overflow-hidden rounded-xl border border-white/5 hover:border-primary/50 transition-all"
                    >
                      <img src={img} alt={`${selectedEvent.title} ${idx + 1}`} className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Html>

      {/* Decorative Fixed Elements */}
      <Html fullscreen className="pointer-events-none z-50">
        <div className="fixed bottom-12 left-12 z-50 pointer-events-none">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest text-primary font-mono font-bold">Home of: Solid-Minerals</span>
            </div>
            <div className="text-[8px] text-white/30 uppercase tracking-[0.5em] font-mono">COORD: 8.5°N | 7.7°E</div>
          </div>
        </div>
      </Html>
    </>
  );
};

export default UIOverlay;
