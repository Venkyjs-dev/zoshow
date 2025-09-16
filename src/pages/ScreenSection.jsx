import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { screensData } from "../data/screenData";

export default function ScreensSection() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll effect
  useEffect(() => {
    let raf;
    const step = () => {
      if (!isPaused && scrollRef.current) {
        const el = scrollRef.current;
        el.scrollLeft += 0.5; // speed: adjust if you want faster/slower
        // reset to start when reaching the end
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
          el.scrollLeft = 0;
        }
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [isPaused]);

  return (
    <section className="relative py-24 px-6 lg:px-12 max-w-[120rem] mx-auto">
      {/* decorative background images */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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

      {/* heading */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Planned Screen Locations
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Our digital screens will be strategically placed in premium locations
          across Bangalore and Amaravathi, reaching your target audience where
          they live, work, and play.
        </p>
      </div>

      {/* scrolling cards */}
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative z-10 flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
      >
        {screensData.map((item) => (
          <motion.div
            key={item.title}
            whileHover={{ y: -8 }}
            className="flex-shrink-0 w-80 snap-start group"
          >
            <div
              className="relative overflow-hidden rounded-3xl border border-gray-200
                         bg-white shadow-md transition-shadow duration-300
                         group-hover:shadow-2xl group-hover:border-gray-300"
            >
              {/* semi-transparent gradient for better text/icon contrast */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/10 pointer-events-none rounded-3xl" />

              {/* ribbon */}
              <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
                COMING SOON
              </div>

              {/* image with hover zoom */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                  whileHover={{ scale: 1.08 }}
                />
                <motion.div
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {item.icon}
                </motion.div>
              </div>

              {/* content */}
              <motion.div className="p-6 transition-transform duration-300 group-hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
