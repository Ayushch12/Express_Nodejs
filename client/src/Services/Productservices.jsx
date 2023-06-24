

// import axios from 'axios';



// const USER_API_BASE_URL = "http://localhost:8080/api/productRoutes";

// class Productservices {

//     getUsers(){
//         return axios.get(USER_API_BASE_URL);
//     }

//     createUser(product){
//         return axios.post(USER_API_BASE_URL, product);
//     }

//     getUserById(_Id){
//         return axios.get(USER_API_BASE_URL + '/' + _Id);
//     }

//     updateUser(product, _Id){
//         return axios.put(USER_API_BASE_URL + '/' + _Id, product);
//     }

//     deleteUser(_Id){
//         return axios.delete(USER_API_BASE_URL + '/' + _Id);
//     }
// }

// export default new Productservices()


import axios from 'axios';

const PRODUCT_API_BASE_URL = "http://localhost:8080/api/productRoutes";

class Productservices {
    getProducts() {
        return axios.get(PRODUCT_API_BASE_URL);
    }

    createProduct(product) {
        return axios.post(PRODUCT_API_BASE_URL, product);
    }

    getProductById(_id) {
        return axios.get(PRODUCT_API_BASE_URL + '/' + _id);
    }

    updateProduct(product, _id) {
        return axios.put(PRODUCT_API_BASE_URL + '/' + _id, product);
    }

    deleteProduct(_id) {
        return axios.delete(PRODUCT_API_BASE_URL + '/' + _id);
    }
}

export default new Productservices();
