export default function Hero() {
  return (
    <section className="pt-32 pb-16 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-[128px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse mr-2"></span>
            <span className="text-sm font-medium text-[#00D4FF]">24/7 AI Receptionist for Gas Engineers</span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-['Space_Grotesk'] leading-tight mb-8">
            Never Miss A{" "}
            <span className="gradient-text">Gas Job</span>{" "}
            Again
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-400 mb-6 max-w-3xl mx-auto">
            Meet <span className="text-[#00D4FF] font-semibold">Emma</span> — your AI receptionist who answers every call, books jobs straight into your diary, and handles gas emergencies 24/7.
          </p>

          {/* Service Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              "Boiler Services",
              "Gas Emergencies", 
              "Boiler Repairs",
              "New Installations",
              "Gas Safety Certs",
              "Central Heating",
              "Landlord CP12s"
            ].map((tag) => (
              <span 
                key={tag}
                className="px-4 py-2 rounded-full bg-[#111118] border border-[#1E1E2E] text-sm text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] text-[#0A0A0F] font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Get Early Access
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="#features"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#1E1E2E] text-white font-semibold rounded-lg hover:border-[#00D4FF] transition-colors"
            >
              See How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
