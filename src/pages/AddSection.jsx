import {
  Lightbulb,
  ChartNoAxesColumnIncreasing,
  ChartPie,
  ChartLine,
  TrendingUp,
  Brain,
} from "lucide-react";

export default function AddSection() {
  return (
    <section className="relative overflow-hidden py-32 px-6 md:px-8 max-w-[120rem] mx-auto">
      {/* gradient background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-blue-600/30 to-purple-500/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative grid lg:grid-cols-2 gap-20 items-center z-10">
        {/* left column */}
        <div>
          {/* small badge */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 px-6 py-3 rounded-full mb-8 border border-blue-500/20">
            <Lightbulb className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">
              Industry Challenge
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
            Digital Advertising{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Opportunity
            </span>
          </h2>

          {/* feature cards */}
          <div className="space-y-8">
            {[
              {
                icon: ChartNoAxesColumnIncreasing,
                text: "Growing demand for digital advertising solutions in major cities like Bangalore and Amaravathi",
              },
              {
                icon: ChartPie,
                text: "Businesses seeking cost-effective alternatives to traditional outdoor advertising",
              },
              {
                icon: ChartLine,
                text: "Increasing preference for measurable and trackable advertising campaigns",
              },
              {
                icon: ChartNoAxesColumnIncreasing,
                text: "Rising adoption of digital screens in premium commercial locations",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group cursor-pointer transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-lg text-gray-800/80 font-medium group-hover:text-gray-900 transition-colors duration-300">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* vision card */}
            <div className="mt-12">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 p-8 rounded-2xl shadow-sm">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-sm animate-pulse">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Our Vision
                    </h3>
                    <p className="text-lg text-gray-800/80">
                      Planning to deploy{" "}
                      <span className="font-bold text-xl text-blue-600">
                        500 screens
                      </span>{" "}
                      across Bangalore and Amaravathi, laying the foundation for
                      a comprehensive digital advertising network.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right column - image & floating badges */}
        <div className="relative">
          <div className="relative group">
            <img
              src="https://static.wixstatic.com/media/3fcaa5_0e37f005f1724a77a76fa624256349f2~mv2.jpg"
              alt="ZoShow digital advertising platform interface"
              className="w-full rounded-2xl shadow-lg relative z-10 transition-shadow duration-300 group-hover:shadow-xl"
            />
            {/* floating badge top-right */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-4 shadow-lg border border-blue-400/30 animate-bounce">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span className="text-sm font-semibold text-white">
                  Live Analytics
                </span>
              </div>
            </div>
            {/* floating badge bottom-left */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 shadow-lg text-white border border-blue-400/30 animate-bounce delay-150">
              <div className="flex items-center gap-3">
                <Brain className="h-5 w-5" />
                <span className="text-sm font-semibold">AI Optimization</span>
              </div>
            </div>
          </div>
          {/* subtle rotated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl transform rotate-1 scale-105 -z-10"></div>
        </div>
      </div>
    </section>
  );
}
