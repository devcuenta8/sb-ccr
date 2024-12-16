import React, { useState } from 'react';
import { Pencil, Trash2, Search, Users, ChevronRight } from 'lucide-react';
import { networks, members } from '../data/mockData';
import { Network } from '../types';

const NetworkList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedNetwork, setSelectedNetwork] = useState<Network | null>(null);

  const filteredNetworks = networks.filter(
    (network) =>
      network.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      network.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const networkMembers = members.filter(
    (member) => member.networkId === selectedNetwork?.id
  );

  const handleEdit = (network: Network) => {
    console.log('Edit network:', network);
  };

  const handleDelete = (network: Network) => {
    if (window.confirm(`¿Estás seguro de eliminar la red ${network.name}?`)) {
      console.log('Delete network:', network);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Redes</h2>
            <div className="flex gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar redes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNetworks.map((network) => {
              const leader = members.find((m) => m.id === network.leaderId);
              return (
                <div
                  key={network.id}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => setSelectedNetwork(network)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {network.name}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {network.description}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEdit(network);
                        }}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        <Pencil className="w-5 h-5" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(network);
                        }}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{network.memberCount} miembros</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src={leader?.profileImage}
                          alt={leader?.name}
                          className="w-6 h-6 rounded-full"
                        />
                        <span className="text-sm text-gray-600">
                          Líder: {leader?.name}
                        </span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {selectedNetwork && (
          <div className="p-6 bg-gray-50 border-t border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">
                Miembros de {selectedNetwork.name}
              </h3>
              <button
                onClick={() => setSelectedNetwork(null)}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Cerrar
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {networkMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center gap-3 bg-white p-4 rounded-lg"
                >
                  <img
                    src={member.profileImage}
                    alt={member.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium">{member.name}</p>
                    <p className="text-sm text-gray-500">
                      {member.role === 'network_leader' ? 'Líder' : 'Miembro'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NetworkList;
