import { useState } from 'react';
import { createUser } from '../api/users';

export default function UserForm() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createUser(form);
    setMessage('User created!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Register User</h4>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
      <button type="submit">Register</button>
      {message && <div>{message}</div>}
    </form>
  );
}