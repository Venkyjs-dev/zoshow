import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { screensData } from "../data/screenData";

export default function ScreensSection() {
  const scrollRef = useRef(null);
  const controls = useAnimation();

  // Auto-scroll logic (horizontal carousel)
  useEffect(() => {
    let raf;
    const scroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 0.5; // slow continuous move
      }
      raf = requestAnimationFrame(scroll);
    };
    scroll();
    return () => cancelAnimationFrame(raf);
  }, []);

  const pauseScroll = () => cancelAnimationFrame(scrollRef.current?._raf);

  return (
    <section className="relative py-24 px-6 lg:px-12 max-w-[120rem] mx-auto">
      {/* Decorative background for subtle texture */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="/assets/bg-left.jpg"
          alt=""
          className="absolute top-10 left-10 w-64 h-48 object-cover opacity-10 rotate-[-2deg]"
        />
        <img
          src="/assets/bg-right.jpg"
          alt=""
          className="absolute bottom-10 right-10 w-64 h-48 object-cover opacity-10 rotate-[1deg]"
        />
      </div>

      {/* Heading */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Planned Screen Locations
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Our digital screens will be strategically placed in premium locations
          across Bangalore and Amaravathi, reaching your audience where they
          live, work, and play.
        </p>
      </div>

      {/* Carousel container */}
      <div
        ref={scrollRef}
        onMouseEnter={pauseScroll}
        onMouseLeave={() => {
          // resume on leave
          const resume = () => {
            if (scrollRef.current) {
              scrollRef.current.scrollLeft += 0.5;
              scrollRef.current._raf = requestAnimationFrame(resume);
            }
          };
          scrollRef.current._raf = requestAnimationFrame(resume);
        }}
        className="
          relative z-10 flex gap-8 overflow-x-auto pb-6
          scrollbar-hide snap-x snap-mandatory
        ">
        {screensData.map((item, idx) => (
          <motion.div
            key={item.title}
            whileHover={{
              y: -8,
              scale: 1.02,
              boxShadow: "0 16px 40px rgba(0,0,0,0.25)",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="
              flex-shrink-0 w-80 snap-start
            ">
            <div
              className="
                relative rounded-3xl overflow-hidden
                bg-slate-900 text-white
                border border-slate-700
                shadow-lg
                hover:border-cyan-400 hover:shadow-cyan-500/40
                transition-all duration-300
              ">
              {/* Dim overlay for image readability */}
              <div className="absolute inset-0 bg-black/30" />

              {/* Tag */}
              <div className="absolute top-4 left-4 bg-cyan-600 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                COMING SOON
              </div>

              {/* Image */}
              <div className="relative h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  {item.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6 z-10">
                <h3 className="text-xl font-semibold mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-sm">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
