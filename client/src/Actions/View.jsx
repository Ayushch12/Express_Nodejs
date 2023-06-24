import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function View() {
  const [products, setProducts] = useState([]);
  const { _id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/productRoutes/${_id}`)
      .then((response) => {
        setProducts([response.data]);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, [_id]);

  return (
    <div>
      <br></br>
      <div className="card col-md-6 offset-md-3 ">
        <h3 className="text-center ">View Product Details</h3>
        <table className="table table-striped table-bordered border-2" >
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Type</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Warranty Years</th>
              <th>Available</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.type}</td>
                <td>{product.price}</td>
                <td>{product.rating}</td>
                <td>{product.warranty_years}</td>
                <td>{product.available}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default View;
