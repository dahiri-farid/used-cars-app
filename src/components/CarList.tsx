import { useEffect, useState } from 'react';
import { fetchCarPosts, CarPost } from '../api/carPosts';
import { Link } from 'react-router-dom';

export default function CarList() {
  const [carPosts, setCarPosts] = useState<CarPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCarPosts().then(data => {
      setCarPosts(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Available Cars</h2>
      <ul>
        {carPosts.map(post => (
          <li key={post.id}>
            <Link to={`/car-posts/${post.id}`}>
              {post.title} - {post.car.make} {post.car.model} ({post.car.year}) - ${post.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}