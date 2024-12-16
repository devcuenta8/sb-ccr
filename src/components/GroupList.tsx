import React, { useState } from 'react';
import { Pencil, Trash2, Search, Users, ChevronRight } from 'lucide-react';
import { ministries, members } from '../data/mockData';
import { Ministry } from '../types';

const GroupList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMinistry, setSelectedMinistry] = useState<Ministry | null>(null);
  
  const filteredMinistries = ministries.filter(ministry => 
    ministry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ministry.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const ministryMembers = members.filter(member => 
    member.ministryId === selectedMinistry?.id
  );

  const handleEdit = (ministry: Ministry) => {
    console.log('Edit ministry:', ministry);
  };

  const handleDelete = (ministry: Ministry) => {
    if (window.confirm(`¿Estás seguro de eliminar el ministerio ${ministry.name}?`)) {
      console.log('Delete ministry:', ministry);
    }
  };

  if (selectedMinistry) {
    return (
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedMinistry(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <ChevronRight className="w-5 h-5 transform rotate-180" />
                </button>
                <h2 className="text-xl font-semibold text-gray-800">
                  {selectedMinistry.name}
                </h2>
              </div>
            </div>

            <div className="space-y-4">
              {ministryMembers.map((member) => (
                <div key={member.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <img
                      src={member.profileImage}
                      alt={member.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-medium">{member.name}</p>
                      <p className="text-sm text-gray-500">{member.email}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    member.role === 'ministry_leader' ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {member.role === 'ministry_leader' ? 'Líder' : 'Miembro'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Ministerios</h2>
            <div className="flex gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar ministerios..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMinistries.map((ministry) => {
              const leader = members.find(m => m.id === ministry.leaderId);
              return (
                <div key={ministry.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{ministry.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">{ministry.description}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(ministry)}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        <Pencil className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(ministry)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{ministry.memberCount} miembros</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        src={leader?.profileImage}
                        alt={leader?.name}
                        className="w-6 h-6 rounded-full"
                      />
                      <span className="text-sm text-gray-600">Líder: {leader?.name}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      Reunión: {ministry.meetingDay} a las {ministry.meetingTime}
                    </div>
                    <button
                      onClick={() => setSelectedMinistry(ministry)}
                      className="mt-4 w-full px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition-colors"
                    >
                      Ver Integrantes
                    </button>
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

export default GroupList;