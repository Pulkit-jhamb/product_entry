import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./app.css"; // Ensure this imports the correct CSS

function App() {
  const [name, setName] = useState('');
  const [usage, setUsage] = useState('');
  const [price, setPrice] = useState('');
  const [img, setImg] = useState('');

  const navigate = useNavigate(); // Use navigate hook for routing

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/products', {
        name,
        usage,
        price,
        img
      });
      console.log('Product added:', response.data);

      setName('');
      setUsage('');
      setPrice('');
      setImg('');

      // Navigate to the confirmation page after successful submission
      navigate('/confirmation');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleConfirmationClick = () => {
    navigate('/confirmation'); // Navigate to the confirmation page
  };

  return (
    <div className="App">
      <h1>Product Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Usage:</label>
          <textarea
            value={usage}
            onChange={(e) => setUsage(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* Additional button to navigate to the confirmation page */}
      <div className="showConfirmation">
        <button onClick={handleConfirmationClick}>See data</button>
      </div>
    </div>
  );
}

export default App;
