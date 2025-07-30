import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import CarPostPage from './pages/CarPostPage';
import AdminPanel from './pages/AdminPanel';
import UserPanel from './pages/UserPanel';
import CreateCarPostPage from './pages/CreateCarPostPage';
import LoginPage from './pages/LoginPage';

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/admin">Admin Panel</Link> |{' '}
        <Link to="/register">Register</Link> |{' '}
        <Link to="/create-car-post">Create Car Post</Link> |{' '}
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car-posts/:id" element={<CarPostPage />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/register" element={<UserPanel />} />
        <Route path="/create-car-post" element={<CreateCarPostPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
} 