import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Main = (product) => {
  const [selectedProductId, setSelectedProductId] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get("http://localhost:8080/api/productRoutes")
      .then((response) => setProducts(response.data))
      .catch((err) => console.log(err));
  };

  const handleDeleteClick = (_id) => {
    axios
      .delete(`http://localhost:8080/api/productRoutes/${_id}`)
      .then((response) => {
        console.log("Product deleted successfully");
        fetchProducts(); // Fetch updated products list after deletion
      })
      .catch((err) => console.log(err));
  };


  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8080/api/productRoutes")
  //     .then((products) => setProducts(products.data))
  //     .catch((err) => console.log(err));
  // }, []);



  const handleViewClick = (_id) => {
    setSelectedProductId(_id);
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>LES BONS ARTISANS</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>

      <h1>Products Data List</h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>type</th>
              <th>price</th>
              <th>rating</th>
              <th>warranty_years</th>
              <th>available</th>
              <th>Actions</th>
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

                <td>
                  <button
                    // onClick={() => this.editProduct()}
                    className="btn btn-info"
                  >
                    Update
                  </button>

                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => handleDeleteClick(product._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>

                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={handleViewClick}
                    className="btn btn-success"
                  >
                    <Link style={{ textDecoration: "none", color: "#ffffff" }} to={`/view/${product._id}` } className="btn-link">
                      View
                    </Link>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Main;
