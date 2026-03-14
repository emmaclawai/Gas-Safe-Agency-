import Link from "next/link";

const services = [
  {
    title: "Website design \u0026 build",
    features: [
      "Conversion-first site architecture and copywriting",
      "Responsive Next.js build optimised for speed",
    ],
  },
  {
    title: "Local SEO foundations",
    features: [
      "Technical audit and on-page optimisation",
      "Google Business Profile clean-up and growth plan",
      "Review engine and citation management",
      "Dashboards that highlight the numbers that matter",
    ],
  },
  {
    title: "Always-on optimisation",
    features: [
      "Landing page and funnel experiments",
      "Regular performance reviews with action steps",
    ],
  },
  {
    title: "Content \u0026 campaign support",
    features: [
      "Launch calendars and campaign playbooks",
      "Social and email assets ready to publish",
      "Paid boosts to keep visibility consistent",
    ],
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0A0A0F] to-[#111118]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-sm font-semibold text-[#00D4FF] uppercase tracking-wider mb-4">
            Services
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk']">
            A focused team covering the essentials.
          </h3>
          <p className="text-gray-400 mt-4 max-w-2xl">
            Pick a single engagement or combine them for momentum. Either way you get clear deliverables and the same senior team driving execution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div 
              key={service.title} 
              className="p-8 rounded-2xl bg-[#0A0A0F] border border-[#1E1E2E] hover:border-[#00D4FF]/30 transition-colors"
            >
              <h4 className="text-xl font-bold mb-6">{service.title}</h4>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start text-gray-400">
                    <span className="w-2 h-2 mt-2 mr-3 rounded-full bg-[#00D4FF] flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}