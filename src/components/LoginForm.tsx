import { useState } from 'react';

export default function LoginForm({ onLogin }: { onLogin: (user: any) => void }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with real authentication logic
    try {
      // Example: fetch user by email, check password
      // const user = await loginUser(form.email, form.password);
      // onLogin(user);
      setError('');
      onLogin({ email: form.email }); // Dummy login
    } catch {
      setError('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Login</h4>
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
      <button type="submit">Login</button>
      {error && <div>{error}</div>}
    </form>
  );
}