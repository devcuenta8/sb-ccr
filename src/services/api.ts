import { Church, Member, Group, Event, Attendance, User, Ministry, Network } from '../types';
import { churches, members, groups, events, ministries, networks } from '../data/mockData';

// Mock users for development
const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@iglesiaprincipal.org',
    name: 'Pastor David',
    role: 'admin',
    churchId: '1',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150',
    status: 'active'
  },
  {
    id: '2',
    email: 'admin@iglesianorte.org',
    name: 'Pastor Juan',
    role: 'pastor',
    churchId: '2',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
    status: 'active'
  }
];

export const api = {
  // Auth endpoints
  auth: {
    login: async (email: string, password: string): Promise<User> => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const user = mockUsers.find(u => u.email === email);
      if (user && password === '1234') {
        return user;
      }
      throw new Error('Invalid credentials');
    },
    logout: async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      localStorage.removeItem('session');
    },
    getSession: async () => {
      const hasSession = localStorage.getItem('session');
      if (hasSession) {
        const user = mockUsers.find(u => u.id === hasSession);
        return user ? { user } : null;
      }
      return null;
    }
  },

  // Church endpoints
  churches: {
    getAll: async (): Promise<Church[]> => churches,
    getById: async (id: string): Promise<Church | undefined> => 
      churches.find(church => church.id === id),
    getChildren: async (parentId: string): Promise<Church[]> =>
      churches.filter(church => church.parentChurchId === parentId),
    update: async (id: string, data: Partial<Church>): Promise<Church> => {
      const index = churches.findIndex(church => church.id === id);
      if (index === -1) throw new Error('Church not found');
      
      churches[index] = { ...churches[index], ...data };
      return churches[index];
    }
  },

  // Member endpoints
  members: {
    getAll: async (churchId: string): Promise<Member[]> =>
      members.filter(member => member.churchId === churchId),
    getById: async (id: string): Promise<Member | undefined> =>
      members.find(member => member.id === id),
    create: async (member: Omit<Member, 'id'>): Promise<Member> => {
      const newMember = { ...member, id: Date.now().toString() };
      members.push(newMember as Member);
      return newMember as Member;
    },
    update: async (id: string, data: Partial<Member>): Promise<Member> => {
      const index = members.findIndex(member => member.id === id);
      if (index === -1) throw new Error('Member not found');
      
      members[index] = { ...members[index], ...data };
      return members[index];
    },
    delete: async (id: string): Promise<void> => {
      const index = members.findIndex(member => member.id === id);
      if (index === -1) throw new Error('Member not found');
      members.splice(index, 1);
    }
  },

  // Ministry endpoints
  ministries: {
    getAll: async (churchId: string): Promise<Ministry[]> =>
      ministries.filter(ministry => ministry.churchId === churchId),
    getById: async (id: string): Promise<Ministry | undefined> =>
      ministries.find(ministry => ministry.id === id),
    create: async (ministry: Omit<Ministry, 'id'>): Promise<Ministry> => {
      const newMinistry = { ...ministry, id: Date.now().toString() };
      ministries.push(newMinistry as Ministry);
      return newMinistry as Ministry;
    },
    update: async (id: string, data: Partial<Ministry>): Promise<Ministry> => {
      const index = ministries.findIndex(ministry => ministry.id === id);
      if (index === -1) throw new Error('Ministry not found');
      
      ministries[index] = { ...ministries[index], ...data };
      return ministries[index];
    },
    delete: async (id: string): Promise<void> => {
      const index = ministries.findIndex(ministry => ministry.id === id);
      if (index === -1) throw new Error('Ministry not found');
      ministries.splice(index, 1);
    }
  },

  // Network endpoints
  networks: {
    getAll: async (churchId: string): Promise<Network[]> =>
      networks.filter(network => network.churchId === churchId),
    getById: async (id: string): Promise<Network | undefined> =>
      networks.find(network => network.id === id),
    create: async (network: Omit<Network, 'id'>): Promise<Network> => {
      const newNetwork = { ...network, id: Date.now().toString() };
      networks.push(newNetwork as Network);
      return newNetwork as Network;
    },
    update: async (id: string, data: Partial<Network>): Promise<Network> => {
      const index = networks.findIndex(network => network.id === id);
      if (index === -1) throw new Error('Network not found');
      
      networks[index] = { ...networks[index], ...data };
      return networks[index];
    },
    delete: async (id: string): Promise<void> => {
      const index = networks.findIndex(network => network.id === id);
      if (index === -1) throw new Error('Network not found');
      networks.splice(index, 1);
    }
  },

  // Group endpoints
  groups: {
    getAll: async (churchId: string): Promise<Group[]> =>
      groups.filter(group => group.churchId === churchId),
    getById: async (id: string): Promise<Group | undefined> =>
      groups.find(group => group.id === id),
    getMembers: async (groupId: string): Promise<Member[]> =>
      members.filter(member => member.groupId === groupId),
  },

  // Event endpoints
  events: {
    getAll: async (churchId: string): Promise<Event[]> =>
      events.filter(event => event.churchId === churchId),
    getUpcoming: async (churchId: string): Promise<Event[]> =>
      events.filter(event => 
        event.churchId === churchId && 
        event.status === 'upcoming'
      ),
  },

  // Attendance endpoints
  attendance: {
    record: async (attendance: Omit<Attendance, 'id'>): Promise<Attendance> => {
      return { ...attendance, id: Date.now().toString() };
    },
    getByEvent: async (eventId: string): Promise<Attendance[]> => [],
    getByMember: async (memberId: string): Promise<Attendance[]> => [],
  },
};