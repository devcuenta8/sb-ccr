import { Church, Member, Ministry, Network, Event } from '../types';

export const churches: Church[] = [
  {
    id: '1',
    name: 'Iglesia Principal',
    type: 'parent',
    address: 'Calle Principal 123',
    city: 'Ciudad Central',
    country: 'México',
    phone: '(555) 123-4567',
    email: 'contacto@iglesiaprincipal.org',
    status: 'active',
    createdAt: '2020-01-01',
    logo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: '2',
    name: 'Iglesia Hija Norte',
    type: 'child',
    parentChurchId: '1',
    address: 'Av. Norte 456',
    city: 'Ciudad Norte',
    country: 'México',
    phone: '(555) 234-5678',
    email: 'norte@iglesiaprincipal.org',
    status: 'active',
    createdAt: '2023-01-15',
    logo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150'
  }
];

export const members: Member[] = [
  {
    id: '1',
    churchId: '1',
    name: 'Pastor David González',
    email: 'pastor.david@iglesiaprincipal.org',
    phone: '(555) 123-4567',
    joinDate: '2020-01-15',
    networkId: '1',
    role: 'pastor',
    attendance: 98,
    lastAttendance: '2024-03-10',
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150',
    status: 'active'
  },
  {
    id: '2',
    churchId: '1',
    name: 'María Rodríguez',
    email: 'maria@iglesiaprincipal.org',
    phone: '(555) 234-5678',
    joinDate: '2023-03-20',
    networkId: '1',
    role: 'ministry_leader',
    ministryId: '1',
    attendance: 95,
    lastAttendance: '2024-03-15',
    profileImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150',
    status: 'active'
  },
  {
    id: '3',
    churchId: '1',
    name: 'Juan Pérez',
    email: 'juan@iglesiaprincipal.org',
    phone: '(555) 345-6789',
    joinDate: '2023-05-10',
    networkId: '1',
    role: 'network_leader',
    attendance: 92,
    lastAttendance: '2024-03-17',
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
    status: 'active'
  }
];

export const ministries: Ministry[] = [
  {
    id: '1',
    churchId: '1',
    name: 'Ministerio de Alabanza',
    leaderId: '2',
    description: 'Ministerio dedicado a la adoración y música',
    meetingDay: 'Sábado',
    meetingTime: '16:00',
    memberCount: 15,
    status: 'active'
  },
  {
    id: '2',
    churchId: '1',
    name: 'Ministerio de Niños',
    leaderId: '3',
    description: 'Ministerio enfocado en la enseñanza de niños',
    meetingDay: 'Domingo',
    meetingTime: '10:00',
    memberCount: 20,
    status: 'active'
  }
];

export const networks: Network[] = [
  {
    id: '1',
    churchId: '1',
    name: 'Red Norte',
    leaderId: '3',
    description: 'Red de células del sector norte',
    meetingDay: 'Miércoles',
    meetingTime: '19:00',
    memberCount: 25,
    status: 'active'
  },
  {
    id: '2',
    churchId: '1',
    name: 'Red Sur',
    leaderId: '2',
    description: 'Red de células del sector sur',
    meetingDay: 'Jueves',
    meetingTime: '19:00',
    memberCount: 30,
    status: 'active'
  }
];

export const events: Event[] = [
  {
    id: '1',
    churchId: '1',
    name: 'Servicio Dominical',
    description: 'Servicio principal de adoración',
    date: '2024-03-24',
    time: '10:00',
    location: 'Auditorio Principal',
    type: 'service',
    status: 'upcoming'
  },
  {
    id: '2',
    churchId: '1',
    name: 'Reunión de Líderes',
    description: 'Encuentro mensual de líderes',
    date: '2024-03-23',
    time: '18:00',
    location: 'Salón de Conferencias',
    type: 'meeting',
    status: 'upcoming'
  }
];

export const groups: Group[] = [
  {
    id: '1',
    churchId: '1',
    name: 'Jóvenes Unidos',
    leaderId: '1',
    description: 'Grupo juvenil dedicado al estudio bíblico y actividades sociales',
    meetingDay: 'Sábado',
    meetingTime: '18:00',
    memberCount: 15,
    status: 'active'
  },
  {
    id: '2',
    churchId: '2',
    name: 'Matrimonios',
    leaderId: '2',
    description: 'Grupo de apoyo y crecimiento para parejas',
    meetingDay: 'Viernes',
    meetingTime: '19:30',
    memberCount: 12,
    status: 'active'
  }
];