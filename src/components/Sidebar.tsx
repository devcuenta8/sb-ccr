import React from 'react';
import { Home, Users, Network, UsersRound, UserPlus, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: Users, label: 'Miembros', path: '/members' },
    { icon: UsersRound, label: 'Ministerios', path: '/ministries' },
    { icon: Network, label: 'Redes', path: '/networks' },
    { icon: UserPlus, label: 'Nuevo Miembro', path: '/new-member' },
    { icon: Settings, label: 'Configuración', path: '/settings' },
  ];

  return (
    <div className="bg-indigo-900 text-white w-64 min-h-screen p-4">
      <div className="flex items-center gap-2 mb-8 px-2">
        <Users className="w-8 h-8" />
        <h1 className="text-xl font-bold">Iglesia Dashboard</h1>
      </div>
      <nav>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-colors ${
                isActive
                  ? 'bg-indigo-800 text-white'
                  : 'text-indigo-100 hover:bg-indigo-800'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;