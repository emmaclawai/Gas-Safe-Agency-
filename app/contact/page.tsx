import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-[128px]"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-[128px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-sm font-semibold text-[#00D4FF] uppercase tracking-wider mb-4">
              Get in Touch
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold font-['Space_Grotesk'] mb-6">
              Start Your <span className="gradient-text">Project</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Ready to grow your business? Send us a message and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Email Info */}
          <div className="mb-12 text-center">
            <a
              href="mailto:hello@gassafebot.co.uk"
              className="inline-flex items-center space-x-3 p-6 rounded-xl bg-[#111118] border border-[#1E1E2E] hover:border-[#00D4FF]/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center text-[#00D4FF]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-400">Email us at</p>
                <p className="text-lg font-semibold text-[#00D4FF]">hello@gassafebot.co.uk</p>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-2xl bg-[#111118] border border-[#1E1E2E]">
            <h2 className="text-2xl font-bold font-['Space_Grotesk'] mb-6">
              Send us a Message
            </h2>
            <ContactForm />
          </div>
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
              © {new Date().getFullYear()} GasSafeBot. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
