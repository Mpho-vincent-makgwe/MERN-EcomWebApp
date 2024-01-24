import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IndexCard from '../components/cards/indexDataCard';


export default function Home() {
  const [display, setData] = useState([]);
  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        // Make a GET request to the fakestoreapi.com
        const response = await axios.get('https://fakestoreapi.com/products');
        
        // Log the data to the console
        console.log('Fetched Data:', response.data);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // Empty dependency array ensures the useEffect runs only once

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
      <div>
        <ul>
        {display.map((card) => (
          <IndexCard key={card.id} data={card} />
        ))}
        </ul>
      </div>
    </main>
  );
  
}
