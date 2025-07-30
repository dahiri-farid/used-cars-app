import axios from 'axios';

export interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
}

export interface CarPost {
  id: number;
  title: string;
  description: string;
  price: number;
  car: Car;
  seller: { id: number; name: string };
}

export async function fetchCarPosts(): Promise<CarPost[]> {
  const res = await axios.get<CarPost[]>('/api/car-posts');
  return res.data;
}

export async function fetchCarPost(id: number): Promise<CarPost> {
  const res = await axios.get<CarPost>(`/api/car-posts/${id}`);
  return res.data;
}