import axios from 'axios';
import { User } from './users';

export interface Admin {
  id: number;
  userId: number;
  user: User;
}

export async function fetchAdmins(): Promise<Admin[]> {
  const res = await axios.get<Admin[]>('/api/admins');
  return res.data;
}

export async function createAdmin(userId: number): Promise<Admin> {
  const res = await axios.post<Admin>('/api/admins', { userId });
  return res.data;
}