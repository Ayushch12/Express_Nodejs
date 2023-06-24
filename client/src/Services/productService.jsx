import axios from 'axios';

class Post{

    create(formData){
        const url = "http://localhost:8080/api/productRoutes/create-product";

        const config = {
            headers: {
                'content-type':'multipart/form-data',
            }
        };
        axios.post(url, formData, config);
    }
}

export default new Post();