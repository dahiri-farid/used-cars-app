import UserList from '../components/UserList';
import AdminList from '../components/AdminList';
import AdminForm from '../components/AdminForm';

export default function AdminPanel() {
  return (
    <div>
      <h2>Admin Panel</h2>
      <UserList />
      <AdminList />
      <AdminForm />
    </div>
  );
}