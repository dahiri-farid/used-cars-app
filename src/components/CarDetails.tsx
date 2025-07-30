import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCarPost, CarPost } from '../api/carPosts';

export default function CarDetails() {
  const { id } = useParams<{ id: string }>();
  const [carPost, setCarPost] = useState<CarPost | null>(null);

  useEffect(() => {
    if (id) {
      fetchCarPost(Number(id)).then(setCarPost);
    }
  }, [id]);

  if (!carPost) return <div>Loading...</div>;

  return (
    <div>
      <h2>{carPost.title}</h2>
      <p>{carPost.description}</p>
      <p>
        <strong>Car:</strong> {carPost.car.make} {carPost.car.model} ({carPost.car.year})
      </p>
      <p>
        <strong>Price:</strong> ${carPost.price}
      </p>
      <p>
        <strong>Seller:</strong> {carPost.seller.name}
      </p>
    </div>
  );
}