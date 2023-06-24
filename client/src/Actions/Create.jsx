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
          Available:
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

// import React, { useState } from "react";
// import axios from "axios";

// const Create = () => {
//   const [name, setName] = useState("");
//   const [type, setType] = useState("");
//   const [price, setPrice] = useState(0);
//   const [rating, setRating] = useState(0);
//   const [warrantyYears, setWarrantyYears] = useState(0);
//   const [available, setAvailable] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:8080/api/productRoutes", {
//         name,
//         type,
//         price,
//         rating,
//         warranty_years: warrantyYears,
//         available,
//       });
//       console.log(response.data); // Handle the response as needed
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       <h2>Create a Product</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
//         </label>
//         <br />
//         <label>
//           Type:
//           <input type="text" value={type} onChange={(e) => setType(e.target.value)} required />
//         </label>
//         <br />
//         <label>
//           Price:
//           <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} required />
//         </label>
//         <br />
//         <label>
//           Rating:
//           <input type="number" value={rating} onChange={(e) => setRating(Number(e.target.value))} required />
//         </label>
//         <br />
//         <label>
//           Warranty Years:
//           <input type="number" value={warrantyYears} onChange={(e) => setWarrantyYears(Number(e.target.value))} required />
//         </label>
//         <br />
//         <label>
//           Available:
//           <input type="checkbox" checked={available} onChange={(e) => setAvailable(e.target.checked)} />
//         </label>
//         <br />
//         <button type="submit">Create Product</button>
//       </form>
//     </div>
//   );
// };

// export default Create;
