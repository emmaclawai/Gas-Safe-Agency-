'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MoreHorizontal,
  Calendar,
  Filter,
  Search,
  Plus,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import { tasks as initialTasks, agentColors } from '@/data/mock-data';
import { Task } from '@/types';
import TaskCard from './TaskCard';

const columns = [
  { id: 'backlog', label: 'Backlog', color: '#6B7280' },
  { id: 'in-progress', label: 'In Progress', color: '#00D4FF' },
  { id: 'review', label: 'Review', color: '#F59E0B' },
  { id: 'done', label: 'Done', color: '#10B981' },
] as const;

const priorities = ['all', 'urgent', 'high', 'medium', 'low'] as const;

export default function KanbanBoard() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [filter, setFilter] = useState<{
    priority: typeof priorities[number];
    agent: string;
    project: string;
  }>({
    priority: 'all',
    agent: 'all',
    project: 'all',
  });
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTasks = tasks.filter((task) => {
    if (filter.priority !== 'all' && task.priority !== filter.priority)
      return false;
    if (filter.agent !== 'all' && task.agent !== filter.agent) return false;
    if (filter.project !== 'all' && task.project !== filter.project)
      return false;
    if (
      searchQuery &&
      !task.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false;
    return true;
  });

  const moveTask = (taskId: number, direction: 'left' | 'right') => {
    const columnOrder = columns.map((c) => c.id);
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id !== taskId) return task;
        const currentIndex = columnOrder.indexOf(task.status);
        const newIndex =
          direction === 'left'
            ? Math.max(0, currentIndex - 1)
            : Math.min(columnOrder.length - 1, currentIndex + 1);
        return { ...task, status: columnOrder[newIndex] };
      })
    );
  };

  const agents = Array.from(new Set(tasks.map((t) => t.agent)));
  const projects = Array.from(new Set(tasks.map((t) => t.project)));

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold font-['Space_Grotesk']">
            Task Board
          </h2>
          <p className="text-gray-400 text-sm">
            {filteredTasks.length} tasks across {columns.length} columns
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 bg-[#111118] border border-[#1E1E2E] rounded-lg text-sm focus:outline-none focus:border-[#00D4FF] w-64"
            />
          </div>

          <select
            value={filter.priority}
            onChange={(e) =>
              setFilter((f) => ({
                ...f,
                priority: e.target.value as typeof priorities[number],
              }))
            }
            className="px-4 py-2 bg-[#111118] border border-[#1E1E2E] rounded-lg text-sm focus:outline-none focus:border-[#00D4FF]"
          >
            <option value="all">All Priorities</option>
            <option value="urgent">Urgent</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>

          <select
            value={filter.agent}
            onChange={(e) =>
              setFilter((f) => ({ ...f, agent: e.target.value }))
            }
            className="px-4 py-2 bg-[#111118] border border-[#1E1E2E] rounded-lg text-sm focus:outline-none focus:border-[#00D4FF]"
          >
            <option value="all">All Agents</option>
            {agents.map((agent) => (
              <option key={agent} value={agent}>
                {agent.charAt(0).toUpperCase() + agent.slice(1)}
              </option>
            ))}
          </select>

          <button className="px-4 py-2 bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] text-[#0A0A0F] font-semibold rounded-lg text-sm flex items-center gap-2">
            <Plus className="w-4 h-4" />
            New Task
          </button>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-4 gap-4 overflow-hidden">
        {columns.map((column) => {
          const columnTasks = filteredTasks.filter(
            (t) => t.status === column.id
          );

          return (
            <div
              key={column.id}
              className="holographic rounded-xl flex flex-col overflow-hidden"
            >
              <div
                className="p-4 border-b border-[#1E1E2E] flex items-center justify-between"
                style={{ borderColor: `${column.color}40` }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: column.color }}
                  />
                  <span className="font-medium">{column.label}</span>
                  <span className="text-xs text-gray-500 bg-[#0A0A0F] px-2 py-0.5 rounded-full">
                    {columnTasks.length}
                  </span>
                </div>
              </div>

              <div className="flex-1 p-3 space-y-3 overflow-y-auto custom-scrollbar">
                <AnimatePresence mode="popLayout">
                  {columnTasks.map((task) => (
                    <TaskCard
                      key={task.id}
                      task={task}
                      onMoveLeft={() => moveTask(task.id, 'left')}
                      onMoveRight={() => moveTask(task.id, 'right')}
                      canMoveLeft={column.id !== 'backlog'}
                      canMoveRight={column.id !== 'done'}
                    />
                  ))}
                </AnimatePresence>

                {columnTasks.length === 0 && (
                  <div className="text-center py-8 text-gray-500 text-sm">
                    No tasks
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}