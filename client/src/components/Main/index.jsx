// Frontend: ProductList.js


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
      .get("http://localhost:8080/getProducts")
      .then((products) => setProducts(products.data))
      .catch((err) => console.log(err));
  }, []);
// useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://randomuser.me/api');
//         setProducts(response.data);
//       } catch (error) {
//         console.error('Failed to fetch data:', error);
//       }
//     };

//     fetchData();
//   }, []);

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>LES BONS ARTISANS</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <h1>Data List</h1>
      {/* {products.map((product) => (
        <div key={product._id}>
          <p>Name: {product.name}</p>
        </div>
      ))} */}
	  {products.map(product => {
         <tr>
          <td>{product.name}</td>
          <td>{product.price}</td>
         </tr>
    })}

    </div>
  );
};

export default Main;
