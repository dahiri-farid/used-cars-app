import axios from 'axios';

export interface User {
  id: number;
  email: string;
  name: string;
  password?: string;
}

export async function fetchUsers(): Promise<User[]> {
  const res = await axios.get<User[]>('/api/users');
  return res.data;
}

export async function createUser(data: Omit<User, 'id'>): Promise<User> {
  const res = await axios.post<User>('/api/users', data);
  return res.data;
}