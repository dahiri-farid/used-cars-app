import { useState, useEffect } from 'react';
import { fetchUsers, User } from '../api/users';
import { createAdmin } from '../api/admins';

export default function AdminForm() {
  const [users, setUsers] = useState<User[]>([]);
  const [userId, setUserId] = useState<number | ''>('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (userId) {
      await createAdmin(Number(userId));
      setMessage('Admin created!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Create Admin</h4>
      <select value={userId} onChange={e => setUserId(Number(e.target.value))}>
        <option value="">Select user</option>
        {users.map(u => (
          <option key={u.id} value={u.id}>{u.name} ({u.email})</option>
        ))}
      </select>
      <button type="submit" disabled={!userId}>Create</button>
      {message && <div>{message}</div>}
    </form>
  );
}