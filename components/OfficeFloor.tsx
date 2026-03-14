'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import OfficeFloor from '@/components/OfficeFloor';
import AgentDetailModal from '@/components/AgentDetailModal';
import { agents, sections } from '@/data/mock-data';
import { Agent } from '@/types';
import AgentDesk from './AgentDesk';

const deskPositions: Record<
  string,
  Array<{ id: string; x: number; y: number } >
> = {
  'c-suite': [
    { id: 'arthur', x: 20, y: 40 },
    { id: 'turing', x: 50, y: 40 },
    { id: 'maven', x: 80, y: 40 },
    { id: 'penny', x: 35, y: 75 },
    { id: 'lex', x: 65, y: 75 },
  ],
  operations: [
    { id: 'ops', x: 30, y: 50 },
    { id: 'lock', x: 70, y: 50 },
  ],
  creative: [
    { id: 'builder', x: 20, y: 40 },
    { id: 'pixel', x: 50, y: 40 },
    { id: 'ink', x: 80, y: 40 },
  ],
  research: [
    { id: 'scout', x: 25, y: 50 },
    { id: 'ranker', x: 50, y: 50 },
    { id: 'viral', x: 75, y: 50 },
  ],
  voice: [
    { id: 'vox', x: 35, y: 50 },
    { id: 'emma', x: 65, y: 50 },
  ],
};

export { OfficeFloor };

export default function OfficeFloorComponent() {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);

  const activeAgents = agents.filter((a) => a.status !== 'offline').length;
  const busyAgents = agents.filter((a) => a.status === 'busy').length;

  return (
    <div className="relative w-full h-full min-h-[700px] bg-[#0A0A0F] grid-pattern rounded-xl overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-[128px]"></div>
      </div>

      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
        <div className="flex items-center gap-6">
          <div className="glass px-4 py-2 rounded-lg flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
            <span className="text-sm text-gray-400">Online:</span>
            <span className="text-sm font-bold text-emerald-400">{activeAgents}</span>
          </div>
          <div className="glass px-4 py-2 rounded-lg flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-amber-400"></div>
            <span className="text-sm text-gray-400">Busy:</span>
            <span className="text-sm font-bold text-amber-400">{busyAgents}</span>
          </div>
        </div>
        <div className="glass px-4 py-2 rounded-lg">
          <span className="text-sm text-gray-500">Last updated: </span>
          <span className="text-sm text-gray-300">{new Date().toLocaleTimeString()}</span>
        </div>
      </div>

      {sections.map((section) => {
        const sectionAgents = agents.filter((a) => a.section === section.id);
        const positions = deskPositions[section.id] || [];

        return (
          <motion.div
            key={section.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute holographic rounded-xl"
            style={{
              left: `${section.x}%`,
              top: `${section.y}%`,
              width: `${section.width}%`,
              height: `${section.height}%`,
            }}
          >
            <div className="absolute -top-3 left-4 px-3 py-1 bg-[#111118] border border-[#1E1E2E] rounded-full">
              <span className="text-xs font-medium text-gray-400">{section.name}</span>
            </div>

            {sectionAgents.map((agent) => {
              const position = positions.find((p) => p.id === agent.id);
              if (!position) return null;

              return (
                <AgentDesk
                  key={agent.id}
                  agent={agent}
                  x={position.x}
                  y={position.y}
                  onClick={() => setSelectedAgent(agent)}
                />
              );
            })}
          </motion.div>
        );
      })}

      <div className="absolute bottom-4 left-4 glass px-4 py-3 rounded-lg">
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
            <span className="text-gray-400">Online</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-amber-400"></div>
            <span className="text-gray-400">Busy</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-500"></div>
            <span className="text-gray-400">Offline</span>
          </div>
        </div>
      </div>

      <AgentDetailModal
        agent={selectedAgent}
        isOpen={!!selectedAgent}
        onClose={() => setSelectedAgent(null)}
      />
    </div>
  );
}