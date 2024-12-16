import React from 'react';
import { Building2 } from 'lucide-react';
import { useChurch } from '../context/ChurchContext';
import { useAuth } from '../context/AuthContext';

const ChurchSelector = () => {
  const { currentChurch, setCurrentChurch, childChurches } = useChurch();
  const { isParentChurch } = useAuth();

  if (!isParentChurch) {
    return (
      <div className="flex items-center gap-2">
        <Building2 className="w-5 h-5 text-gray-400" />
        <span className="text-gray-700 font-medium">{currentChurch?.name}</span>
      </div>
    );
  }

  return (
    <div className="relative">
      <select
        value={currentChurch?.id}
        onChange={(e) => {
          const selected = [...(childChurches || []), currentChurch].find(
            church => church?.id === e.target.value
          );
          if (selected) setCurrentChurch(selected);
        }}
        className="pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none appearance-none cursor-pointer"
      >
        {currentChurch && (
          <option value={currentChurch.id}>{currentChurch.name}</option>
        )}
        {childChurches.map(church => (
          <option key={church.id} value={church.id}>
            {church.name}
          </option>
        ))}
      </select>
      <Building2 className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
    </div>
  );
};

export default ChurchSelector;