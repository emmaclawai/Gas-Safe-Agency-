export default function Hero() {
  return (
    <section className="pt-32 pb-16 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-[128px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-[#00D4FF] uppercase tracking-wider mb-6">
            Built for Gas Safe Engineers
          </p>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-['Space_Grotesk'] leading-tight mb-8">
            Build to{" "}
            <span className="gradient-text">Dominate.</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-2xl">
            We design, build, and optimise websites that help Gas Safe engineers turn browsers into booked jobs.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <svg className="w-5 h-5 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              </svg>
              <span>Local SEO built in</span>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <svg className="w-5 h-5 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              </svg>
              <span>Quality builds</span>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <svg className="w-5 h-5 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              </svg>
              <span>Transparent updates</span>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <svg className="w-5 h-5 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              </svg>
              <span>UK specialists</span>
            </div>
          </div>

          <a 
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] text-[#0A0A0F] font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Start your project
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}