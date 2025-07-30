import { useEffect, useState } from 'react';
import axios from 'axios';

interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
}

function App() {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    axios.get<Car[]>('/api/cars')
      .then(res => setCars(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Used Cars</h1>
      <ul>
        {cars.map(car => (
          <li key={car.id}>{car.make} {car.model} ({car.year})</li>
        ))}
      </ul>
    </div>
  );
}

export default App; 