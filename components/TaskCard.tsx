'use client';

import { motion } from 'framer-motion';
import {
  Calendar,
  ArrowRight,
  ArrowLeft,
  Flag,
} from 'lucide-react';
import { Task } from '@/types';
import { agentColors } from '@/data/mock-data';

interface TaskCardProps {
  task: Task;
  onMoveLeft: () => void;
  onMoveRight: () => void;
  canMoveLeft: boolean;
  canMoveRight: boolean;
}

const priorityConfig = {
  urgent: { color: '#EF4444', label: 'Urgent' },
  high: { color: '#F59E0B', label: 'High' },
  medium: { color: '#00D4FF', label: 'Medium' },
  low: { color: '#6B7280', label: 'Low' },
};

export default function TaskCard({
  task,
  onMoveLeft,
  onMoveRight,
  canMoveLeft,
  canMoveRight,
}: TaskCardProps) {
  const priority = priorityConfig[task.priority];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="p-4 rounded-lg bg-[#0A0A0F] border border-[#1E1E2E] hover:border-[#00D4FF]/30 transition-colors group"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <Flag
            className="w-3 h-3"
            style={{ color: priority.color }}
          />
          <span
            className="text-xs font-medium"
            style={{ color: priority.color }}
          >
            {priority.label}
          </span>
        </div>

        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          {canMoveLeft && (
            <button
              onClick={onMoveLeft}
              className="p-1 rounded hover:bg-[#1E1E2E] text-gray-400 hover:text-white"
            >
              <ArrowLeft className="w-3 h-3" />
            </button>
          )}
          {canMoveRight && (
            <button
              onClick={onMoveRight}
              className="p-1 rounded hover:bg-[#1E1E2E] text-gray-400 hover:text-white"
            >
              <ArrowRight className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>

      <h4 className="font-medium text-sm mb-3 line-clamp-2">{task.title}</h4>

      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold"
            style={{
              backgroundColor: `${agentColors[task.agent]}20`,
              color: agentColors[task.agent],
            }}
          >
            {task.agentName
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </div>
          <span className="text-gray-500 truncate max-w-[80px]">
            {task.agentName.split(' ')[0]}
          </span>
        </div>

        <div className="flex items-center gap-1 text-gray-500">
          <Calendar className="w-3 h-3" />
          <span>{new Date(task.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
        </div>
      </div>

      <div className="mt-3">
        <span className="text-[10px] px-2 py-1 rounded bg-[#1E1E2E] text-gray-400">
          {task.project}
        </span>
      </div>
    </motion.div>
  );
}