'use client';

import { AuthProvider, useAuth } from '@/components/AuthProvider';
import LoginPage from '@/components/LoginPage';
import NavSidebar from '@/components/NavSidebar';
import ActivityFeed from '@/components/ActivityFeed';
import KanbanBoard from '@/components/KanbanBoard';

function TasksContent() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  return (
    <div className="flex h-screen">
      <NavSidebar />
      <main className="flex-1 flex overflow-hidden">
        <div className="flex-1 p-6 overflow-hidden">
          <KanbanBoard />
        </div>
        <div className="w-80 p-6 pl-0">
          <div className="h-full">
            <ActivityFeed compact />
          </div>
        </div>
      </main>
    </div>
  );
}

export default function TasksPage() {
  return (
    <AuthProvider>
      <TasksContent />
    </AuthProvider>
  );
}