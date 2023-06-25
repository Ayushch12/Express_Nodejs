
import React, { useState } from "react";
import axios from "axios";
import "./create.css";

function Create() {
  const url = "http://localhost:8080/api/productRoutes/";
  const [data, setDate] = useState({
    _id: "",
    name: "",
    type: "",
    price: "",
    rating: "",
    warranty_years: "",
    available: ""
  });

  function submit(e) {
    e.preventDefault();
    axios
      .post(url, {
        _id: data._id,
        name: data.name,
        type: data.type,
        price: data.price,
        rating: data.rating,
        warranty_years: data.warranty_years,
        available: data.available
      })
      .then((res) => {
        console.log(res.data);
      });
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setDate(newdata);
    console.log(newdata);
  }

  return (
    <div className="CreateProduct">
          <form onSubmit={(e) => submit(e)}>
            <div className="mb-3">
              <label htmlFor="_id" className="form-label">
              ID
              </label>
              <input
                onChange={(e) => handle(e)}
                id="id"
                value={data.id}
                className="form-control"
                placeholder="id"
                type="text"
              />
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                onChange={(e) => handle(e)}
                id="name"
                value={data.name}
                className="form-control"
                placeholder="name"
                type="text"
              />
              <label htmlFor="type" className="form-label">
                Type
              </label>
              <input
                onChange={(e) => handle(e)}
                id="type"
                value={data.type}
                className="form-control"
                placeholder="type"
                type="text"
              />
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                onChange={(e) => handle(e)}
                id="price"
                value={data.price}
                className="form-control"
                placeholder="price"
                type="number"
              />
              <label htmlFor="rating" className="form-label">
                Rating
              </label>
              <input
                onChange={(e) => handle(e)}
                id="rating"
                value={data.rating}
                className="form-control"
                placeholder="rating"
                type="number"
              />
              <label htmlFor="warranty_years" className="form-label">
                Warranty Years
              </label>
              <input
                onChange={(e) => handle(e)}
                id="warranty_years"
                value={data.warranty_years}
                className="form-control"
                placeholder="warranty_years"
                type="number"
              />
              <label htmlFor="available" className="form-label">
                Available
              </label>
              <input
                onChange={(e) => handle(e)}
                id="available"
                value={data.available}
                className="form-control"
                placeholder="available"
                type="text"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
    </div>
  );
}

export default Create;
