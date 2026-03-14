'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Globe,
  Zap,
  Server,
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';
import {
  systemMetrics,
  trafficData,
  taskStats,
  activities,
} from '@/data/mock-data';
import { SystemMetric } from '@/types';

function MetricCard({ metric }: { metric: SystemMetric }) {
  const Icon =
    metric.trend === 'up'
      ? TrendingUp
      : metric.trend === 'down'
      ? TrendingDown
      : Activity;

  const isGood =
    (metric.name === 'Error Rate' && metric.value < metric.target) ||
    (metric.name !== 'Error Rate' && metric.value >= metric.target);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="holographic p-6 rounded-xl"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm text-gray-400">{metric.name}</p>
          <div className="flex items-baseline gap-2 mt-1">
            <p className="text-3xl font-bold">
              {metric.value}
              <span className="text-lg text-gray-500">{metric.unit}</span>
            </p>
          </div>
        </div>
        <div
          className={`p-2 rounded-lg ${
            isGood ? 'bg-emerald-500/10' : 'bg-red-500/10'
          }`}
        >
          <Icon
            className={`w-5 h-5 ${isGood ? 'text-emerald-400' : 'text-red-400'}`}
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">Target: {metric.target}{metric.unit}</span>
        <span
          className={`text-xs font-medium ${
            metric.status === 'healthy'
              ? 'text-emerald-400'
              : metric.status === 'warning'
              ? 'text-amber-400'
              : 'text-red-400'
          }`}
        >
          {metric.status.toUpperCase()}
        </span>
      </div>
    </motion.div>
  );
}

function AlertFeed() {
  const alerts = activities.filter((a) => a.type === 'error').slice(0, 5);

  return (
    <div className="holographic rounded-xl overflow-hidden">
      <div className="p-4 border-b border-[#1E1E2E] flex items-center gap-2">
        <AlertTriangle className="w-5 h-5 text-amber-400" />
        <h3 className="font-semibold font-['Space_Grotesk']">System Alerts</h3>
      </div>

      <div className="p-4 space-y-3">
        {alerts.length === 0 ? (
          <div className="flex items-center justify-center py-8 text-gray-500">
            <CheckCircle className="w-5 h-5 mr-2 text-emerald-400" />
            All systems operational
          </div>
        ) : (
          alerts.map((alert) => (
            <div
              key={alert.id}
              className="flex items-start gap-3 p-3 rounded-lg bg-red-500/5 border border-red-500/20"
            >
              <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm">
                  <span className="font-medium">{alert.agentName}</span>{' '}
                  {alert.action} {alert.target}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {new Date(alert.timestamp).toLocaleString()}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default function SystemHealth() {
  const [timeRange, setTimeRange] = useState('24h');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold font-['Space_Grotesk']">
            System Health
          </h2>
          <p className="text-gray-400 text-sm">Real-time monitoring and metrics</p>
        </div>

        <div className="flex items-center gap-2">
          {['1h', '24h', '7d', '30d'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                timeRange === range
                  ? 'bg-[#00D4FF] text-[#0A0A0F]'
                  : 'bg-[#111118] text-gray-400 hover:text-white'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="holographic p-4 rounded-xl"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-emerald-500/10">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-2xl font-bold">{taskStats.completed}</p>
              <p className="text-sm text-gray-400">Tasks Completed</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="holographic p-4 rounded-xl"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-[#00D4FF]/10">
              <Zap className="w-5 h-5 text-[#00D4FF]" />
            </div>
            <div>
              <p className="text-2xl font-bold">{taskStats.thisWeek}</p>
              <p className="text-sm text-gray-400">This Week</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="holographic p-4 rounded-xl"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-[#8B5CF6]/10">
              <Globe className="w-5 h-5 text-[#8B5CF6]" />
            </div>
            <div>
              <p className="text-2xl font-bold">273</p>
              <p className="text-sm text-gray-400">Visitors Today</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="holographic p-4 rounded-xl"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-amber-500/10">
              <Server className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <p className="text-2xl font-bold">99.97%</p>
              <p className="text-sm text-gray-400">Uptime</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="holographic p-6 rounded-xl">
          <h3 className="font-semibold font-['Space_Grotesk'] mb-4">
            Website Traffic
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trafficData}>
                <defs>
                  <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00D4FF" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#00D4FF" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E1E2E" />
                <XAxis dataKey="time" stroke="#6B7280" fontSize={12} />
                <YAxis stroke="#6B7280" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#111118',
                    border: '1px solid #1E1E2E',
                    borderRadius: '8px',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="visitors"
                  stroke="#00D4FF"
                  fillOpacity={1}
                  fill="url(#colorVisitors)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="holographic p-6 rounded-xl">
          <h3 className="font-semibold font-['Space_Grotesk'] mb-4">
            Page Views
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E1E2E" />
                <XAxis dataKey="time" stroke="#6B7280" fontSize={12} />
                <YAxis stroke="#6B7280" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#111118',
                    border: '1px solid #1E1E2E',
                    borderRadius: '8px',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="pageViews"
                  stroke="#8B5CF6"
                  strokeWidth={2}
                  dot={{ fill: '#8B5CF6', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {systemMetrics.map((metric) => (
          <MetricCard key={metric.id} metric={metric} />
        ))}
      </div>

      <AlertFeed />
    </div>
  );
}