import { useEffect, useState } from 'react';
import { fetchAdmins, Admin } from '../api/admins';

export default function AdminList() {
  const [admins, setAdmins] = useState<Admin[]>([]);

  useEffect(() => {
    fetchAdmins().then(setAdmins);
  }, []);

  return (
    <div>
      <h3>Admins</h3>
      <ul>
        {admins.map(a => (
          <li key={a.id}>{a.user.name} ({a.user.email})</li>
        ))}
      </ul>
    </div>
  );
}