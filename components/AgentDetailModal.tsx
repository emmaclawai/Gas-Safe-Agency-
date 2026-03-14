'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, TrendingUp, Award, CheckCircle, Briefcase, Zap } from 'lucide-react';
import { Agent } from '@/types';
import { agentColors } from '@/data/mock-data';

interface AgentDetailModalProps {
  agent: Agent | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function AgentDetailModal({
  agent,
  isOpen,
  onClose,
}: AgentDetailModalProps) {
  if (!agent) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50"
          >
            <div className="holographic rounded-2xl overflow-hidden"
            style={{ borderColor: agentColors[agent.id] }}
            >
              <div
                className="relative p-6"
                style={{
                  background: `linear-gradient(135deg, ${agentColors[agent.id]}10 0%, transparent 100%)`,
                }}
              >
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>

                <div className="flex items-center gap-4">
                  <div
                    className="w-20 h-20 rounded-full border-2 flex items-center justify-center text-2xl font-bold"
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
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold">{agent.name}</h2>
                    <p className="text-gray-400">{agent.role}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          agent.status === 'online'
                            ? 'bg-emerald-400'
                            : agent.status === 'busy'
                            ? 'bg-amber-400'
                            : 'bg-gray-500'
                        }`}
                      />
                      <span className="text-sm text-gray-400 capitalize">
                        {agent.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div className="p-4 rounded-lg bg-[#0A0A0F] border border-[#1E1E2E]">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-400">Current Task</span>
                  </div>
                  <p className="text-white">{agent.currentTask}</p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-[#0A0A0F] border border-[#1E1E2E] text-center">
                    <Zap
                      className="w-5 h-5 mx-auto mb-2"
                      style={{ color: agentColors[agent.id] }}
                    />
                    <p className="text-2xl font-bold">{agent.efficiency}%</p>
                    <p className="text-xs text-gray-500">Efficiency</p>
                  </div>

                  <div className="p-4 rounded-lg bg-[#0A0A0F] border border-[#1E1E2E] text-center">
                    <CheckCircle
                      className="w-5 h-5 mx-auto mb-2"
                      style={{ color: agentColors[agent.id] }}
                    />
                    <p className="text-2xl font-bold">{agent.tasksCompleted}</p>
                    <p className="text-xs text-gray-500">Tasks Done</p>
                  </div>

                  <div className="p-4 rounded-lg bg-[#0A0A0F] border border-[#1E1E2E] text-center">
                    <Award
                      className="w-5 h-5 mx-auto mb-2"
                      style={{ color: agentColors[agent.id] }}
                    />
                    <p className="text-2xl font-bold">{agent.specialty}</p>
                    <p className="text-xs text-gray-500">Specialty</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Performance</span>
                    <span
                      className="text-sm font-bold"
                      style={{ color: agentColors[agent.id] }}
                    >
                      {agent.efficiency}%
                    </span>
                  </div>
                  <div className="h-2 bg-[#1E1E2E] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${agent.efficiency}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: agentColors[agent.id] }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}