'use client';

import { AuthProvider, useAuth } from '@/components/AuthProvider';
import LoginPage from '@/components/LoginPage';
import NavSidebar from '@/components/NavSidebar';
import SystemHealth from '@/components/SystemHealth';

function SystemContent() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  return (
    <div className="flex h-screen">
      <NavSidebar />
      <main className="flex-1 overflow-auto custom-scrollbar">
        <div className="p-6 max-w-7xl mx-auto">
          <SystemHealth />
        </div>
      </main>
    </div>
  );
}

export default function SystemPage() {
  return (
    <AuthProvider>
      <SystemContent />
    </AuthProvider>
  );
}