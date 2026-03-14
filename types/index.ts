export interface Agent {
  id: string;
  name: string;
  role: string;
  status: 'online' | 'busy' | 'offline';
  currentTask: string;
  section: string;
  avatar: string;
  specialty: string;
  efficiency: number;
  tasksCompleted: number;
}

export interface Task {
  id: number;
  title: string;
  agent: string;
  agentName: string;
  status: 'backlog' | 'in-progress' | 'review' | 'done';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  project: string;
  dueDate: string;
  createdAt: string;
}

export interface ActivityItem {
  id: number;
  agent: string;
  agentName: string;
  action: string;
  target: string;
  timestamp: string;
  type: 'task' | 'deployment' | 'milestone' | 'error';
}

export interface SystemMetric {
  id: number;
  name: string;
  value: number;
  unit: string;
  target: number;
  status: 'healthy' | 'warning' | 'critical';
  trend: 'up' | 'down' | 'stable';
}

export interface OfficeSection {
  id: string;
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
}