import Link from "next/link";
import TeamCard from "./TeamCard";

const featuredTeam = [
  {
    name: "Arthur Vance",
    title: "Chief Executive Officer",
    bio: "Former management consultant with 15 years scaling service businesses. Arthur leads our strategic vision and client partnerships.",
    specialties: ["Strategy", "Growth", "Leadership"],
    image: "/images/agents/arthur.jpg",
  },
  {
    name: "Tina Rutherford",
    title: "Chief Technology Officer",
    bio: "Full-stack architect who has built platforms serving millions. Tina ensures our technology stack is bulletproof and scalable.",
    specialties: ["Architecture", "Performance", "Security"],
    image: "/images/agents/tina.jpg",
  },
  {
    name: "Marcus Chen",
    title: "Head of SEO",
    bio: "Former agency lead who has ranked 200+ local businesses on page 1. Marcus knows exactly what Google wants to see.",
    specialties: ["Local SEO", "Content", "Analytics"],
    image: "/images/agents/marcus.jpg",
  },
  {
    name: "Emma Williams",
    title: "Customer Experience Lead",
    bio: "The voice of GasSafeBot. Emma ensures every client interaction is warm, professional, and solution-oriented. Available 24/7.",
    specialties: ["Support", "Scheduling", "Communication"],
    image: "/images/agents/emma.jpg",
    isAI: true,
  },
];

export default function TeamTeaser() {
  return (
    <section className="py-24 bg-[#0A0A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-[#00D4FF] uppercase tracking-wider mb-4">
            Our Team
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold font-['Space_Grotesk'] mb-6">
            Meet Your <span className="gradient-text">Marketing Team</span>
          </h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A dedicated team of specialists working together to grow your business. Every skill, zero overhead.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredTeam.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/team"
            className="btn-outline inline-flex items-center"
          >
            Meet the Full Team
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
