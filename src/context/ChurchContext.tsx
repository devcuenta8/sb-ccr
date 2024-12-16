import React, { createContext, useContext, useState, useEffect } from 'react';
import { Church } from '../types';
import { api } from '../services/api';

interface ChurchContextType {
  currentChurch: Church | null;
  setCurrentChurch: (church: Church) => void;
  childChurches: Church[];
  loading: boolean;
}

const ChurchContext = createContext<ChurchContextType | undefined>(undefined);

export const ChurchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentChurch, setCurrentChurch] = useState<Church | null>(null);
  const [childChurches, setChildChurches] = useState<Church[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeChurch = async () => {
      try {
        const churches = await api.churches.getAll();
        const parentChurch = churches.find(church => church.type === 'parent');
        if (parentChurch) {
          setCurrentChurch(parentChurch);
          const children = await api.churches.getChildren(parentChurch.id);
          setChildChurches(children);
        }
      } catch (error) {
        console.error('Error initializing church data:', error);
      } finally {
        setLoading(false);
      }
    };

    initializeChurch();
  }, []);

  return (
    <ChurchContext.Provider value={{ currentChurch, setCurrentChurch, childChurches, loading }}>
      {children}
    </ChurchContext.Provider>
  );
};

export const useChurch = () => {
  const context = useContext(ChurchContext);
  if (context === undefined) {
    throw new Error('useChurch must be used within a ChurchProvider');
  }
  return context;
};