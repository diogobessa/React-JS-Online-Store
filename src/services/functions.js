import axios from 'axios';
import { configData } from '../config';

console.log('configData', configData);

const getProducts = (callback) => {
    axios.get('http://localhost:3001/api/getProducts', {})
      .then((response) => {
        //console.log('response.data',response.data);
        return callback(response.data);
        //this.setState({ products: response.data });
      })
  }

export {
    getProducts
}