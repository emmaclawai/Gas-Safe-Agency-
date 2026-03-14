'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle,
  AlertCircle,
  Rocket,
  Flag,
  Filter,
} from 'lucide-react';
import { activities, agentColors } from '@/data/mock-data';
import { ActivityItem } from '@/types';

const typeIcons = {
  task: CheckCircle,
  deployment: Rocket,
  milestone: Flag,
  error: AlertCircle,
};

const typeColors = {
  task: 'text-blue-400',
  deployment: 'text-green-400',
  milestone: 'text-purple-400',
  error: 'text-red-400',
};

const filters = ['all', 'deployment', 'milestone', 'error', 'task'] as const;

function formatTimeAgo(timestamp: string): string {
  const now = new Date();
  const then = new Date(timestamp);
  const diff = Math.floor((now.getTime() - then.getTime()) / 1000);

  if (diff < 60) return 'just now';
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

interface ActivityFeedProps {
  compact?: boolean;
}

export default function ActivityFeed({ compact = false }: ActivityFeedProps) {
  const [filter, setFilter] = useState<typeof filters[number]>('all');

  const filteredActivities =
    filter === 'all'
      ? activities
      : activities.filter((a) => a.type === filter);

  const displayActivities = compact
    ? filteredActivities.slice(0, 8)
    : filteredActivities;

  return (
    <div className={`holographic rounded-xl ${compact ? 'h-full' : ''}`}>
      <div className="p-4 border-b border-[#1E1E2E] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse"></div>
          <h3 className="font-semibold font-['Space_Grotesk']">
            Live Activity
          </h3>
        </div>
        {!compact && (
          <div className="flex items-center gap-1">
            <Filter className="w-4 h-4 text-gray-500" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as typeof filters[number])}
              className="bg-transparent text-sm text-gray-400 border-none focus:outline-none cursor-pointer"
            >
              <option value="all">All</option>
              <option value="deployment">Deployments</option>
              <option value="milestone">Milestones</option>
              <option value="error">Errors</option>
              <option value="task">Tasks</option>
            </select>
          </div>
        )}
      </div>

      <div
        className={`p-2 space-y-1 ${
          compact ? 'overflow-y-auto custom-scrollbar max-h-[calc(100%-60px)]' : ''
        }`}
      >
        <AnimatePresence mode="popLayout">
          {displayActivities.map((activity, index) => {
            const Icon = typeIcons[activity.type];
            return (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#1a1a24] transition-colors group"
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${typeColors[activity.type]} bg-opacity-10`}
                  style={{
                    backgroundColor: `${agentColors[activity.agent]}20`,
                  }}
                >
                  <Icon className="w-4 h-4" />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-300">
                    <span
                      className="font-medium"
                      style={{ color: agentColors[activity.agent] }}
                    >
                      {activity.agentName}
                    </span>
                    {' '}
                    <span className="text-gray-500">{activity.action}</span>
                    {' '}
                    <span className="text-white">{activity.target}</span>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {formatTimeAgo(activity.timestamp)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}