import Navbar from "@/components/Navbar";
import TeamCard from "@/components/TeamCard";
import Link from "next/link";

const teamMembers = [
  {
    name: "Arthur Vance",
    title: "Chief Executive Officer",
    bio: "Former management consultant with 15 years scaling service businesses. Arthur leads our strategic vision and client partnerships with a focus on sustainable growth.",
    specialties: ["Strategy", "Growth", "Leadership", "Operations"],
    image: "/images/agents/arthur.jpg",
  },
  {
    name: "Tina Rutherford",
    title: "Chief Technology Officer",
    bio: "Full-stack architect who has built platforms serving millions. Tina ensures our technology stack is bulletproof, scalable, and always ahead of the curve.",
    specialties: ["Architecture", "Performance", "Security", "DevOps"],
    image: "/images/agents/tina.jpg",
  },
  {
    name: "Marcus Chen",
    title: "Head of SEO",
    bio: "Former agency lead who has ranked 200+ local businesses on page 1. Marcus knows exactly what Google wants to see and how to get you there.",
    specialties: ["Local SEO", "Content Strategy", "Analytics", "Link Building"],
    image: "/images/agents/marcus.jpg",
  },
  {
    name: "Sarah Mitchell",
    title: "Creative Director",
    bio: "Award-winning designer with a portfolio spanning Fortune 500s to local trades. Sarah ensures every pixel serves a purpose and every design converts.",
    specialties: ["UI/UX", "Branding", "Visual Design", "Conversion"],
    image: "/images/agents/sarah.jpg",
  },
  {
    name: "James Holloway",
    title: "Head of Content",
    bio: "Former journalist turned content strategist. James crafts compelling stories that engage your audience and rank in search engines.",
    specialties: ["Copywriting", "Content Strategy", "Blogging", "Email"],
    image: "/images/agents/james.jpg",
  },
  {
    name: "Priya Sharma",
    title: "Paid Advertising Lead",
    bio: "Google Ads certified specialist who has managed £5M+ in ad spend. Priya maximizes ROI on every pound spent.",
    specialties: ["Google Ads", "Meta Ads", "PPC", "Analytics"],
    image: "/images/agents/priya.jpg",
  },
  {
    name: "Oliver Brooks",
    title: "Web Developer",
    bio: "Frontend specialist obsessed with performance. Oliver builds websites that load instantly and work flawlessly on every device.",
    specialties: ["React", "Next.js", "Performance", "Accessibility"],
    image: "/images/agents/oliver.jpg",
  },
  {
    name: "Emily Foster",
    title: "Client Success Manager",
    bio: "Your dedicated point of contact. Emily ensures projects run smoothly, deadlines are met, and you're always in the loop.",
    specialties: ["Project Management", "Communication", "Support", "Training"],
    image: "/images/agents/emily.jpg",
  },
  {
    name: "Daniel Wright",
    title: "Technical SEO Specialist",
    bio: "The detail-oriented expert who digs into code, schema markup, and site architecture. Daniel makes sure search engines love your site.",
    specialties: ["Technical SEO", "Schema", "Site Audits", "Core Web Vitals"],
    image: "/images/agents/daniel.jpg",
  },
  {
    name: "Emma Williams",
    title: "Customer Experience Lead",
    bio: "The voice of GasSafeBot. Emma ensures every client interaction is warm, professional, and solution-oriented. Available 24/7 to answer questions, book appointments, and provide support.",
    specialties: ["Customer Support", "Scheduling", "Communication", "Problem Solving"],
    image: "/images/agents/emma.jpg",
    isAI: true,
  },
];

const whyOurTeam = [
  {
    icon: "⚡",
    title: "24/7 Availability",
    description: "Our team works around the clock. Whether it's a late-night website update or an urgent client inquiry, we're always on.",
  },
  {
    icon: "🎯",
    title: "Consistent Quality",
    description: "Every deliverable meets our exacting standards. No shortcuts, no excuses—just exceptional work every single time.",
  },
  {
    icon: "📈",
    title: "Results-Driven",
    description: "We measure success by your success. Rankings, conversions, revenue—we focus on the metrics that matter to your business.",
  },
  {
    icon: "🔒",
    title: "Industry Expertise",
    description: "We specialize in Gas Safe engineers. We understand your business, your customers, and what it takes to win in your market.",
  },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-[128px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-[128px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-sm font-semibold text-[#00D4FF] uppercase tracking-wider mb-4">
              Our People
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold font-['Space_Grotesk'] mb-6">
              Meet the <span className="gradient-text">Team</span>
            </h1>
            <p className="text-gray-400 text-lg">
              A dedicated team of specialists working together to grow your business. 
              Every skill you need, zero overhead.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Team */}
      <section className="py-24 bg-[#111118]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] mb-6">
              Why Our <span className="gradient-text">Team</span>?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We've assembled the perfect blend of skills to help Gas Safe engineers dominate their local markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyOurTeam.map((item) => (
              <div key={item.title} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold font-['Space_Grotesk'] mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-['Space_Grotesk'] mb-6">
            Ready to Work <span className="gradient-text">Together</span>?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Let's discuss how our team can help grow your business.
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Get in Touch
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
              © {new Date().getFullYear()} GasSafeBot. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
