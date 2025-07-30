import { useEffect, useState } from 'react';
import { fetchUsers, User } from '../api/users';

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  return (
    <div>
      <h3>Users</h3>
      <ul>
        {users.map(u => (
          <li key={u.id}>{u.name} ({u.email})</li>
        ))}
      </ul>
    </div>
  );
}