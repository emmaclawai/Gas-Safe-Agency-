'use client';

import { motion } from 'framer-motion';
import { Monitor, Cpu, Wifi, WifiOff } from 'lucide-react';
import { Agent } from '@/types';
import { agentColors } from '@/data/mock-data';

interface AgentDeskProps {
  agent: Agent;
  onClick?: () => void;
  x: number;
  y: number;
}

const statusConfig = {
  online: {
    dot: 'bg-emerald-400',
    glow: 'shadow-emerald-400/50',
    icon: Wifi,
  },
  busy: {
    dot: 'bg-amber-400',
    glow: 'shadow-amber-400/50',
    icon: Cpu,
  },
  offline: {
    dot: 'bg-gray-500',
    glow: '',
    icon: WifiOff,
  },
};

export default function AgentDesk({ agent, onClick, x, y }: AgentDeskProps) {
  const status = statusConfig[agent.status];
  const StatusIcon = status.icon;
  const isActive = agent.status !== 'offline';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
      onClick={onClick}
      className="absolute cursor-pointer group"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className={`relative w-28 h-20 rounded-lg transition-all duration-300 ${
          isActive ? 'pulse-active' : ''
        }`}
        style={{
          background: `linear-gradient(135deg, ${agentColors[agent.id]}15 0%, #111118 100%)`,
          border: `1px solid ${agentColors[agent.id]}40`,
        }}
      >
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-12 h-8 bg-[#0A0A0F] rounded border border-[#1E1E2E] flex items-center justify-center">
          <Monitor className="w-4 h-4 text-gray-600" />
          {isActive && (
            <div
              className="absolute inset-0 rounded opacity-20"
              style={{
                background: `linear-gradient(180deg, ${agentColors[agent.id]} 0%, transparent 100%)`,
              }}
            />
          )}
        </div>

        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <div
            className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-bold relative`}
            style={{
              borderColor: agentColors[agent.id],
              backgroundColor: `${agentColors[agent.id]}20`,
              color: agentColors[agent.id],
            }}
          >
            {agent.name
              .split(' ')
              .map((n) => n[0])
              .join('')}
            <div
              className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-[#0A0A0F] ${status.dot}`}
            />
          </div>
        </div>

        <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 w-32 text-center">
          <p
            className="text-xs font-medium truncate"
            style={{ color: agentColors[agent.id] }}
          >
            {agent.name}
          </p>
          <p className="text-[10px] text-gray-500 truncate">{agent.role}</p>
          {isActive && (
            <p className="text-[9px] text-gray-600 truncate mt-0.5 italic">
              {agent.currentTask}
            </p>
          )}
        </div>

        {agent.status === 'busy' && (
          <div className="absolute -top-1 -right-1">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-ping"></div>
          </div>
        )}
      </div>
    </motion.div>
  );
}