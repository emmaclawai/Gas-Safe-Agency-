'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  LayoutGrid,
  Kanban,
  Activity,
  LogOut,
  Zap,
} from 'lucide-react';
import { useAuth } from './AuthProvider';

const navItems = [
  { href: '/', label: 'Office Floor', icon: LayoutGrid },
  { href: '/tasks', label: 'Task Board', icon: Kanban },
  { href: '/system', label: 'System Health', icon: Activity },
];

export default function NavSidebar() {
  const pathname = usePathname();
  const { logout } = useAuth();

  return (
    <aside className="w-64 h-screen bg-[#111118] border-r border-[#1E1E2E] flex flex-col">
      <div className="p-6 border-b border-[#1E1E2E]">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00D4FF] to-[#8B5CF6] flex items-center justify-center">
            <Zap className="w-5 h-5 text-[#0A0A0F]" />
          </div>
          <div>
            <h1 className="font-bold font-['Space_Grotesk'] text-lg">
              Command
            </h1>
            <p className="text-xs text-gray-500">Center</p>
          </div>
        </Link>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link href={item.href}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-gradient-to-r from-[#00D4FF]/10 to-[#8B5CF6]/10 border border-[#00D4FF]/30 text-[#00D4FF]'
                        : 'text-gray-400 hover:text-white hover:bg-[#1a1a24]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="ml-auto w-1.5 h-1.5 rounded-full bg-[#00D4FF]"
                      />
                    )}
                  </motion.div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-[#1E1E2E]">
        <button
          onClick={logout}
          className="flex items-center gap-3 px-4 py-3 w-full text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}