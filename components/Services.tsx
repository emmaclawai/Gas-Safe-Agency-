import Link from "next/link";

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Premium Websites",
    description: "Stunning, conversion-optimized websites built specifically for Gas Safe engineers. Mobile-first, lightning fast, and designed to convert visitors into customers.",
    features: ["Custom Design", "Mobile Optimized", "SEO Ready", "Fast Loading"],
    href: "/contact",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "SEO Mastery",
    description: "Dominate local search results. We optimize every page, build quality backlinks, and create content that ranks. Target: Page 1 Google in 45-60 days.",
    features: ["Local SEO", "Content Strategy", "Link Building", "Analytics"],
    href: "/contact",
    featured: true,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Emma — AI Receptionist",
    description: "Never miss another call. Emma answers 24/7, books appointments, qualifies leads, and handles customer inquiries with a warm, professional touch.",
    features: ["24/7 Availability", "Instant Response", "Smart Scheduling", "Lead Qualification"],
    href: "/contact",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-[#0A0A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-[#00D4FF] uppercase tracking-wider mb-4">
            Our Services
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold font-['Space_Grotesk'] mb-6">
            Everything You Need to <span className="gradient-text">Grow</span>
          </h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From stunning websites to AI-powered customer service, we provide the complete marketing stack for Gas Safe engineers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className={`group relative p-8 rounded-2xl border transition-all duration-300 card-hover ${
                service.featured
                  ? "bg-gradient-to-b from-[#00D4FF]/10 to-transparent border-[#00D4FF]/30"
                  : "bg-[#111118] border-[#1E1E2E]"
              }`}
            >
              {service.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#00D4FF] text-[#0A0A0F] text-xs font-bold rounded-full">
                  Most Popular
                </div>
              )}

              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                service.featured ? "bg-[#00D4FF]/20 text-[#00D4FF]" : "bg-[#1E1E2E] text-gray-400 group-hover:text-[#00D4FF]"
              }`}>
                {service.icon}
              </div>

              <h4 className="text-xl font-bold font-['Space_Grotesk'] mb-3">
                {service.title}
              </h4>

              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-300">
                    <svg className="w-4 h-4 text-[#00D4FF] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center text-[#00D4FF] font-medium">
                Learn more
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
