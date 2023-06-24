import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/productRoutes")
      .then((products) => setProducts(products.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>LES BONS ARTISANS</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>


      <h1>Products Data  List</h1>
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
                    onClick={() => this.editUser()}
                    className="btn btn-info"
                  >
                    Update
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => this.deleteUser()}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => this.viewUser()}
                    className="btn btn-success"
                  >
                    View
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
