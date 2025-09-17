import { motion } from "framer-motion";
import { Monitor, Target, BarChart3, MapPin, Cloud } from "lucide-react";

const features = [
  {
    icon: <Monitor className="w-8 h-8 text-white" />,
    title: "Digital Screen Network",
    desc: "Network of 500+ premium digital screens across Bangalore & Amaravathi for maximum visibility.",
    border: "from-blue-400 to-cyan-400",
    iconBg: "from-blue-500 to-cyan-500",
    hover: "hover:shadow-blue-400/50",
  },
  {
    icon: <Target className="w-8 h-8 text-white" />,
    title: "Targeted Advertising",
    desc: "Deliver messages precisely with location, demographic and time-based targeting.",
    border: "from-purple-400 to-indigo-400",
    iconBg: "from-purple-500 to-indigo-500",
    hover: "hover:shadow-purple-400/50",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-white" />,
    title: "Performance Analytics",
    desc: "Comprehensive reporting and ROI tracking with detailed metrics.",
    border: "from-green-400 to-teal-400",
    iconBg: "from-green-500 to-teal-500",
    hover: "hover:shadow-green-400/50",
  },
  {
    icon: <MapPin className="w-8 h-8 text-white" />,
    title: "Premium Locations",
    desc: "Screens placed in high-traffic areas like malls, corporate hubs & commercial complexes.",
    border: "from-orange-400 to-red-400",
    iconBg: "from-orange-500 to-red-500",
    hover: "hover:shadow-orange-400/50",
  },
  {
    icon: <Cloud className="w-8 h-8 text-white" />,
    title: "Scalable Platform",
    desc: "Cloud-based infrastructure built for growth with enterprise-grade security.",
    border: "from-indigo-400 to-purple-400",
    iconBg: "from-indigo-500 to-purple-500",
    hover: "hover:shadow-indigo-400/50",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="services"
      className="relative py-32 px-6 max-w-[120rem] mx-auto overflow-hidden"
    >
      {/* floating gradient blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
      </div>

      {/* header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20 relative z-10"
      >
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 px-6 py-3 rounded-full border border-blue-500/20 mb-6">
          <Monitor className="h-5 w-5 text-blue-600" />
          <span className="text-sm font-semibold text-blue-600">
            Smart Contextual Advertising
          </span>
        </div>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
          Platform{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
            Features
          </span>
        </h2>
        <p className="mt-6 text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
          Essential capabilities for effective digital campaigns—analytics,
          location targeting & scalable infrastructure for future growth.
        </p>
      </motion.div>

      {/* feature cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="group cursor-pointer"
          >
            <div
              className={`
                relative overflow-hidden rounded-2xl p-[1px]
                bg-gradient-to-br ${f.border}
                shadow-sm transition-transform duration-500
                ${f.hover}
              `}
            >
              {/* glass layer */}
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 h-full flex flex-col transition duration-300">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${f.iconBg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {f.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                  {f.title}
                </h3>
                <p className="text-lg text-gray-700/80 leading-relaxed mb-6">
                  {f.desc}
                </p>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
                  <span className="text-sm font-medium text-gray-900">
                    View Details
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      {/*Note: Temporarly commented */}
      {/* <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 text-center relative z-10"
      >
        <div className="bg-white/70 backdrop-blur-xl border border-blue-200 p-10 rounded-2xl shadow-md inline-block">
          <h3 className="text-3xl font-bold text-gray-900 mb-3">
            Ready to Join Our Network?
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Be among the first to advertise on our planned premium digital
            screen network.
          </p>
          <button className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold px-10 py-4 rounded-lg text-lg shadow-lg transition-colors">
            Request Demo
          </button>
        </div>
      </motion.div> */}
    </section>
  );
}
