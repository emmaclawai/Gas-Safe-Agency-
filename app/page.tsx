import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Answers Every Call, 24/7",
    description: "Natural human voice. No more missed calls while you're up a ladder or with a customer. Emma handles it all.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Books Straight Into Your Calendar",
    description: "Google Calendar integration. Emma checks your availability and books jobs directly into your diary — no double-booking, no back-and-forth.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Captures Every Job Detail",
    description: "Name, address, job type, boiler make/model, fault codes — Emma gathers all the info you need before you even call back.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: "Handles Gas Emergencies Properly",
    description: "Emma asks about gas smells and CO alarms. If it's an emergency, she directs callers to National Gas on 0800 111 999 — keeping you and your customers safe.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Full Call Summary Every Time",
    description: "Get a complete transcript + structured details sent to you immediately after every call. Know exactly what happened before you return the call.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <Hero />

      {/* ROI Section */}
      <section className="py-24 bg-gradient-to-b from-[#0A0A0F] to-[#111118]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#8B5CF6]/20 mb-8">
            <svg className="w-8 h-8 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] mb-8">
            The Cost of Missed Calls
          </h2>
          
          <div className="p-8 md:p-12 rounded-2xl bg-[#0A0A0F] border border-[#1E1E2E]">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Miss just <span className="text-[#00D4FF] font-bold">5 calls a week</span> and at <span className="text-[#00D4FF] font-bold">£200–£600</span> per gas job, you could be losing <span className="text-[#8B5CF6] font-bold">£4,000–£10,000</span> in work every single month.
            </p>
            <div className="mt-8 pt-8 border-t border-[#1E1E2E]">
              <p className="text-lg text-gray-400">
                <span className="text-white font-semibold">Emma pays for herself on day one.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#00D4FF] uppercase tracking-wider mb-4">
              Features
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk']">
              Your AI Receptionist, Trained for Gas Work
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Emma isn't a generic answering service. She's built specifically for Gas Safe engineers and understands the unique demands of your trade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div 
                key={feature.title}
                className="p-6 rounded-2xl bg-[#111118] border border-[#1E1E2E] hover:border-[#00D4FF]/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center text-[#00D4FF] mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gradient-to-b from-[#111118] to-[#0A0A0F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#00D4FF] uppercase tracking-wider mb-4">
              Pricing
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk']">
              Simple, Transparent Pricing
            </h2>
          </div>

          <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-[#00D4FF]/10 to-[#8B5CF6]/10 border border-[#00D4FF]/20 text-center">
            <p className="text-2xl md:text-3xl font-bold mb-4">
              Costs less than a part-time receptionist
            </p>
            <p className="text-gray-400 text-lg mb-8">
              No contracts during beta. Cancel anytime.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 rounded-full bg-[#0A0A0F] border border-[#1E1E2E] text-gray-300">
                No setup fees
              </span>
              <span className="px-4 py-2 rounded-full bg-[#0A0A0F] border border-[#1E1E2E] text-gray-300">
                No long-term contract
              </span>
              <span className="px-4 py-2 rounded-full bg-[#0A0A0F] border border-[#1E1E2E] text-gray-300">
                Beta pricing locked in
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#00D4FF] uppercase tracking-wider mb-4">
              Get Started
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] mb-4">
              Ready to Never Miss a Call Again?
            </h2>
            <p className="text-gray-400">
              Join the beta and get Emma working for your business. Limited spots available.
            </p>
          </div>

          <ContactForm />
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
              © {new Date().getFullYear()} GasSafeBot — hello@gassafebot.co.uk
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
