import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function MarketSection() {
  const stats = [
    { year: 2022, value: "₹400 Cr", width: "w-1/3" },
    { year: 2023, value: "₹600 Cr", width: "w-1/2" },
    { year: 2024, value: "₹800 Cr", width: "w-2/3" },
    { year: 2025, value: "₹1,200 Cr", width: "w-full" },
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-[#EDECF6]">
      <div className="max-w-[120rem] mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* ---- Left text content ---- */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-8">
            Massive Market Opportunity
          </h2>
          <p className="text-lg md:text-xl text-[#0F172A]/80 mb-8">
            The Digital Out-of-Home (DOOH) advertising market in India is
            experiencing explosive growth, projected to reach ₹1,200 crores by
            2025.
          </p>
          <ul className="space-y-4">
            {[
              "35% annual growth rate in DOOH advertising",
              "First AI-powered platform in premium locations",
              "Untapped potential in major metropolitan areas",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-teal-500" />
                <span className="text-lg text-[#0F172A]/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ---- Right growth chart ---- */}
        <div className="relative">
          <div className="border border-black/10 bg-white p-8 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-semibold text-center text-[#0F172A] mb-6">
              DOOH Market Growth in India
            </h3>
            <div className="space-y-6">
              {stats.map((s, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <span className="text-[#0F172A]/80">{s.year}</span>
                  <div className="relative flex-1 mx-4 h-3 rounded-full bg-[#DAD9E8] overflow-hidden">
                    {/* filled bar */}
                    <div
                      className={`h-3 rounded-full bg-gradient-to-r from-indigo-500 to-teal-500 ${s.width}`}>
                      {/* moving shine */}
                      <motion.div
                        className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-white/20 via-white/60 to-white/20"
                        animate={{ x: ["-100%", "150%"] }}
                        transition={{
                          repeat: Infinity,
                          duration: 2.5,
                          ease: "linear",
                        }}
                      />
                    </div>
                  </div>
                  <span className="font-semibold text-[#0F172A]">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
