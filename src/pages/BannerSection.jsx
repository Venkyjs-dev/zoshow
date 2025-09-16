import {
  Monitor,
  Calendar,
  ArrowRight,
  Play,
  Shield,
  Award,
  Timer,
} from "lucide-react";

export default function BannerSection({ id }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#0a0f1e] via-slate-900 to-blue-900 text-white overflow-hidden py-16 pt-24">
      {/* blurred background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      {/* main content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-8">
        {/* small badge */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <Monitor className="h-5 w-5 text-cyan-300" />
            <span className="text-sm font-medium">
              Digital Out-of-Home Platform
            </span>
          </div>
        </div>

        {/* heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Digital Out-of-Home{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
            Advertising
          </span>{" "}
          Platform
        </h1>

        {/* description */}
        <p className="text-lg md:text-xl opacity-90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Transform your advertising strategy with our innovative digital
          out-of-home platform. We're building a network of strategically placed
          digital screens in Bangalore and Amaravathi to deliver targeted
          advertising solutions with comprehensive analytics.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 font-semibold px-10 py-5 rounded-lg text-lg shadow-lg transition-colors">
            <Calendar className="h-5 w-5" />
            Schedule Demo
            <ArrowRight className="h-5 w-5" />
          </button>

          <button className="inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white hover:bg-white/10 hover:border-white font-semibold px-10 py-5 rounded-lg text-lg backdrop-blur-sm transition-colors">
            <Play className="h-5 w-5" />
            View Platform
          </button>
        </div>

        {/* highlights */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-80">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-green-400" />
            <span className="text-sm">Secure Platform</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-blue-400" />
            <span className="text-sm">Premium Locations Planned</span>
          </div>
          <div className="flex items-center gap-2">
            <Timer className="h-5 w-5 text-cyan-400" />
            <span className="text-sm">Future Analytics</span>
          </div>
        </div>
      </div>

      {/* decorative bottom image */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-20">
        <img
          src="https://static.wixstatic.com/media/3fcaa5_067c1462de91414f8d2e72c909e09626~mv2.jpg"
          alt="ZoShow digital advertising display in premium location"
          className="w-full h-full object-cover rounded-tl-2xl"
        />
      </div>
    </section>
  );
}
