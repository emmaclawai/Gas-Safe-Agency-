import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <Hero />

      <Services />

      {/* Selected Work Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-sm font-semibold text-[#00D4FF] uppercase tracking-wider mb-4">
              Selected Work
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk']">
              Example websites that keep leads coming in.
            </h3>
            <p className="text-gray-400 mt-4 max-w-2xl">
              Each site is built around clear messaging, fast performance, and effortless reader flows.
            </p>
          </div>

          <div className="p-12 rounded-2xl bg-[#111118] border border-[#1E1E2E] text-center">
            <p className="text-gray-400 mb-4">
              Need to see a specific sector?
            </p>
            <p className="text-lg mb-6">
              Ask for a tailored showcase. We can walk you through the structure, performance metrics, and lessons from projects closest to your industry.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center text-[#00D4FF] hover:text-[#8B5CF6] transition-colors"
            >
              Request a showcase
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-b from-[#111118] to-[#0A0A0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-sm font-semibold text-[#00D4FF] uppercase tracking-wider mb-4">
              Our Process
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk']">
              How we take websites from plan to growth.
            </h3>
            <p className="text-gray-400 mt-4 max-w-2xl">
              Simple, transparent phases. You always know what we are working on, what we need from you, and the results we are targeting.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#0A0A0F] border border-[#1E1E2E]">
              <div className="text-sm text-[#00D4FF] font-semibold mb-4">Phase 1</div>
              <h4 className="text-xl font-bold mb-4">Discover & prioritise</h4>
              <p className="text-gray-400">
                Workshops to align goals, messaging, and audience so we know exactly what to build and measure.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#0A0A0F] border border-[#1E1E2E]">
              <div className="text-sm text-[#00D4FF] font-semibold mb-4">Phase 2</div>
              <h4 className="text-xl font-bold mb-4">Design, build & launch</h4>
              <p className="text-gray-400">
                High-fidelity design, purposeful copy, and a fast build. We go live once performance and QA checks pass.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#0A0A0F] border border-[#1E1E2E]">
              <div className="text-sm text-[#00D4FF] font-semibold mb-4">Phase 3</div>
              <h4 className="text-xl font-bold mb-4">Optimise & grow</h4>
              <p className="text-gray-400">
                Monitor metrics, test new ideas, and keep expanding what works. Regular reviews keep everyone accountable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold font-['Space_Grotesk'] mb-6">
            Stay focused on delivery; we handle growth.
          </h3>
          <p className="text-gray-400 mb-8">
            We plug into your team as a partner, sharing updates in plain language, highlighting the metrics that matter, and proactively recommending next steps.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span className="px-4 py-2 rounded-full bg-[#111118] border border-[#1E1E2E]">
              Regular async updates
            </span>
            <span className="px-4 py-2 rounded-full bg-[#111118] border border-[#1E1E2E]">
              Performance reviews
            </span>
            <span className="px-4 py-2 rounded-full bg-[#111118] border border-[#1E1E2E]">
              Direct access to lead strategist
            </span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/5 to-[#8B5CF6]/5"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] mb-6">
            Ready to <span className="gradient-text">dominate</span> your local market?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Get a premium website, local SEO that ranks, and a receptionist that never misses a call.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] text-[#0A0A0F] font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Start your project
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#1E1E2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/" className="text-2xl font-bold font-['Space_Grotesk']">
              <span className="text-[#00D4FF]">GasSafe</span>
              <span className="text-[#8B5CF6]">Bot</span>
            </Link>
            <p className="text-sm text-gray-500">
              hello@gassafebot.co.uk
            </p>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} GasSafeBot
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}