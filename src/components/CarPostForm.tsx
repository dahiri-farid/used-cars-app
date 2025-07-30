import { useState, useEffect } from 'react';
import axios from 'axios';
import { User } from '../api/users';

export default function CarPostForm() {
  const [form, setForm] = useState({ title: '', description: '', price: '', carId: '', sellerId: '' });
  const [cars, setCars] = useState<any[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/api/cars').then(res => setCars(res.data));
    axios.get('/api/users').then(res => setUsers(res.data));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post('/api/car-posts', {
      ...form,
      price: Number(form.price),
      carId: Number(form.carId),
      sellerId: Number(form.sellerId),
    });
    setMessage('Car post created!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Create Car Post</h4>
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
      <input name="description" placeholder="Description" value={form.description} onChange={handleChange} required />
      <input name="price" type="number" placeholder="Price" value={form.price} onChange={handleChange} required />
      <select name="carId" value={form.carId} onChange={handleChange} required>
        <option value="">Select car</option>
        {cars.map(car => (
          <option key={car.id} value={car.id}>{car.make} {car.model} ({car.year})</option>
        ))}
      </select>
      <select name="sellerId" value={form.sellerId} onChange={handleChange} required>
        <option value="">Select seller</option>
        {users.map(u => (
          <option key={u.id} value={u.id}>{u.name} ({u.email})</option>
        ))}
      </select>
      <button type="submit">Create</button>
      {message && <div>{message}</div>}
    </form>
  );
}