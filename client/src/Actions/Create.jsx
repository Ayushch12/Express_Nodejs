import React, { useState } from "react";
import axios from "axios";
import productService from "../Services/productService";

const Create = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [warranty_years, setWarranty_years] = useState("");
  const [available, setAvailable] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();


    const formData = new FormData();

    formData.append('name', name);
    formData.append('type', type);
    formData.append('price', price);
    formData.append('rating', rating);
    formData.append('warranty_years', warranty_years);
    formData.append('available', available);

    const response = await productService.create(formData);

    console.log(response);
    e.target.reset();

  };

  return (
    <div>
      <h2>Create a Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name='name'
            placeholder="Enter product name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Type:
          <input
            type="text"
            name='type'
            placeholder="Enter product type"
            onChange={(e) => setType(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            name='price'
            placeholder="Enter product price"
            onChange={(e) => setPrice(Number(e.target.value))}
            required
          />
        </label>
        <br />
        <label>
          Rating:
          <input
            type="number"
            name='rating'
            placeholder="Enter product rating"
            onChange={(e) => setRating(Number(e.target.value))}
            required
          />
        </label>
        <br />
        <label>
          Warranty Years:
          <input
            type="number"
            name='warranty_years'
            placeholder="Enter product warranty_years"
            onChange={(e) => setWarranty_years(Number(e.target.value))}
            required
          />
        </label>
        <br />
        <label>
          Available :
          <input
            type="text"
            name='available'
            placeholder="Enter product available"
            onChange={(e) => setAvailable(e.target.checked)}
          />
        </label>
        <br />
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
};

export default Create;


