import { useState } from 'react';
import LoginForm from '../components/LoginForm';

export default function LoginPage() {
  const [user, setUser] = useState<any>(null);

  if (user) return <div>Welcome, {user.email}!</div>;

  return <LoginForm onLogin={setUser} />;
}