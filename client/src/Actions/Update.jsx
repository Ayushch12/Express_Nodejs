import React, { useState } from 'react';
import axios from 'axios';
import "./update.css";

const ProductUpdateForm = ({ _id }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [warranty_years, setWarranty_years] = useState('');
  const [available, setAvailable] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`/api/productRoutes/${_id}`, {
        name,
        type,
        price,
        rating,
        warranty_years,
        available,
      });

      console.log('Product updated:', response.data);
      // Handle success, e.g., show a success message or redirect to another page
    } catch (error) {
      console.error('Failed to update product', error);
      // Handle error, e.g., show an error message to the user
    }
  };



  return (
    <div className='UpdateProduct'>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="type"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <input
        type="number"
        placeholder="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <input
        type="number"
        placeholder="Warranty_years"
        value={warranty_years}
        onChange={(e) => setWarranty_years(e.target.value)}
      />

      <input
        type="text"
        placeholder="Available"
        value={available}
        onChange={(e) => setAvailable(e.target.value)}
      />
      <button type="submit">Update Product</button>
    </form>
    </div>
  );
};

export default ProductUpdateForm;
