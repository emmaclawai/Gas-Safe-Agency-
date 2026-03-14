import Image from "next/image";

interface TeamCardProps {
  name: string;
  title: string;
  bio: string;
  specialties: string[];
  image: string;
  isAI?: boolean;
}

export default function TeamCard({ name, title, bio, specialties, image, isAI = false }: TeamCardProps) {
  return (
    <div className="group relative bg-[#111118] rounded-2xl border border-[#1E1E2E] overflow-hidden card-hover">
      {/* AI Badge */}
      {isAI && (
        <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-[#8B5CF6] text-white text-xs font-bold rounded-full">
          AI
        </div>
      )}

      <div className="aspect-square relative overflow-hidden bg-gradient-to-b from-[#1E1E2E] to-[#111118]">
        <div className="absolute inset-0 flex items-center justify-center text-gray-600">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[#1E1E2E] border-2 border-[#2a2a3e] flex items-center justify-center">
              <span className="text-3xl">{name.charAt(0)}</span>
            </div>
            <p className="text-xs text-gray-500">{image}</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold font-['Space_Grotesk'] mb-1">{name}</h3>
        <p className="text-[#00D4FF] text-sm font-medium mb-4">{title}</p>
        
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">{bio}</p>

        <div className="flex flex-wrap gap-2">
          {specialties.map((specialty) => (
            <span
              key={specialty}
              className="px-3 py-1 bg-[#1E1E2E] text-gray-300 text-xs rounded-full border border-[#2a2a3e]"
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
