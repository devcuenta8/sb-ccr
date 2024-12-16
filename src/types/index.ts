export interface Church {
  id: string;
  name: string;
  type: 'parent' | 'child';
  address: string;
  city: string;
  country: string;
  phone: string;
  email: string;
  parentChurchId?: string;
  logo?: string;
  status: 'active' | 'inactive';
  createdAt: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'pastor' | 'ministry_leader' | 'network_leader' | 'member';
  churchId: string;
  avatar?: string;
  status: 'active' | 'inactive';
}

export interface Member {
  id: string;
  churchId: string;
  name: string;
  email: string;
  phone: string;
  joinDate: string;
  networkId: string;
  ministryId?: string;
  role: 'pastor' | 'ministry_leader' | 'network_leader' | 'member';
  attendance: number;
  lastAttendance: string;
  profileImage: string;
  status: 'active' | 'inactive';
}

export interface Ministry {
  id: string;
  churchId: string;
  name: string;
  leaderId: string;
  description: string;
  meetingDay: string;
  meetingTime: string;
  memberCount: number;
  status: 'active' | 'inactive';
}

export interface Network {
  id: string;
  churchId: string;
  name: string;
  leaderId: string;
  description: string;
  meetingDay: string;
  meetingTime: string;
  memberCount: number;
  status: 'active' | 'inactive';
}

export interface Event {
  id: string;
  churchId: string;
  name: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: 'service' | 'meeting' | 'special';
  status: 'upcoming' | 'completed' | 'cancelled';
}

export interface Attendance {
  id: string;
  churchId: string;
  eventId: string;
  memberId: string;
  date: string;
  status: 'present' | 'absent' | 'excused';
}