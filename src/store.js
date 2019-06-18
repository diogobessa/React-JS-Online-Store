import axios from 'axios';

const store = () => {
    
    const products = {
        'last_update': 'timestamp',
        'data': ['1', '2']
    }
    //const products = ['produto 1', 'produto 2']; // <-- Aqui devem chegar os produtos da Base de dados
    const productsSubscribers = [];

    const fetchProducts = (callback) => {
        axios.get('http://localhost:3001/api/getProducts', {})
        .then((response) => {
            callback(response.data.data);
            products.data = response.data.data;
       });
    }

    const getProducts = () => {  
        return products.data;
    }

    const subscribeProducts = (callback) => {
        //fetchProducts();
        callback(products.data);
        productsSubscribers.push(callback);
    }

    return{
        subscribeProducts,
        fetchProducts,
        getProducts
    }
}

export {
    store
}