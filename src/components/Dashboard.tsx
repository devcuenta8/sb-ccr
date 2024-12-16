import React from 'react';
import { Users, UserPlus, Building2, Calendar } from 'lucide-react';
import { members, ministries, networks } from '../data/mockData';

const StatCard = ({ icon: Icon, label, value, change }: any) => (
  <div className="bg-white rounded-xl p-6 shadow-sm">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-2xl font-bold mt-1">{value}</p>
        <p className={`text-sm mt-2 ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          {change >= 0 ? '+' : ''}{change}% vs mes anterior
        </p>
      </div>
      <div className="bg-indigo-100 p-3 rounded-lg">
        <Icon className="w-6 h-6 text-indigo-600" />
      </div>
    </div>
  </div>
);

const Dashboard = () => {
  const recentMembers = members.slice(0, 5);

  return (
    <div className="p-6 bg-gray-50 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard icon={Users} label="Miembros Totales" value={members.length} change={12} />
        <StatCard icon={UserPlus} label="Nuevos Miembros" value="24" change={8} />
        <StatCard icon={Building2} label="Ministerios Activos" value={ministries.length} change={5} />
        <StatCard icon={Calendar} label="Asistencia Promedio" value="85%" change={-2} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Miembros Recientes</h2>
          <div className="space-y-4">
            {recentMembers.map((member) => (
              <div key={member.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={member.profileImage}
                    alt={member.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium">{member.name}</p>
                    <p className="text-sm text-gray-500">Unido el {member.joinDate}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  member.role === 'pastor' ? 'bg-purple-100 text-purple-700' :
                  member.role === 'ministry_leader' ? 'bg-indigo-100 text-indigo-700' :
                  member.role === 'network_leader' ? 'bg-blue-100 text-blue-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {member.role === 'pastor' ? 'Pastor' :
                   member.role === 'ministry_leader' ? 'Líder de Ministerio' :
                   member.role === 'network_leader' ? 'Líder de Red' :
                   'Miembro'}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Redes Activas</h2>
          <div className="space-y-4">
            {networks.map((network) => {
              const leader = members.find(m => m.id === network.leaderId);
              return (
                <div key={network.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{network.name}</p>
                    <p className="text-sm text-gray-500">
                      Líder: {leader?.name} • {network.memberCount} miembros
                    </p>
                  </div>
                  <div className="text-sm text-gray-500">
                    {network.meetingDay} {network.meetingTime}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;