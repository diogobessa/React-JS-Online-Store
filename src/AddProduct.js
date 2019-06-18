import React, {Component, Fragment} from 'react';
import update from 'immutability-helper';
import axios from 'axios';
import './App.css';

class AddProduct extends Component{

  state = {
    data: [],
    product: {
      title: null,
      description: null,
      category: null
    },
    intervalIsSet: false
  }

  componentDidMount(){
    this.getProductsFromDb();
    if(!this.state.intervalIsSet){
      let interval = setInterval(this.getProductsFromDb, 5000);
      this.setState({ intervalIsSet: interval })
    }
  }

  componentDidUpdate(){
    console.log(this.state);
  }

  componentWillUnmount(){
    if(this.state.intervalIsSet){
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  getProductsFromDb = () => {
    fetch('http://localhost:3001/api/getProducts')
      .then((data) => data.json())
      .then((res) => {
        this.setState({ data: res.data });
      })
  }

  putProduct = (newProduct) => {
    let currentIds = this.state.data.map((d) => d.id);
    let idToAdd = 0;
    while(currentIds.includes(idToAdd)){
      ++idToAdd;
    }
    axios.post('http://localhost:3001/api/putProduct', {
      id: idToAdd,
      title: newProduct.title,
      description: newProduct.description,
      category: newProduct.category
    });
  }

  updateStateObject = (obj, key, val) => {
    console.log('updatestatobject?');
    const assignTest = Object.assign(...this.state[obj], {[key]:{val}});
    console.log('assign', assignTest);

    /*this.setState({ 
      // object.assign
      [obj]: update(this.state[obj], {[key]:{$set: val}}) 
    });*/

}

  render(){
    const { data } = this.state;
    return (
      <Fragment>
        <div>Hello? :D</div>
        <ul>
          {data.length <= 0 ? 'No data yet :(' : data.map((d) => (
            <li key={d.id}>
              <p>id: {d.id}</p>
              <p>title: {d.title}</p>
            </li>
          ))}
        </ul>
        <div>
          <input 
            type="text" 
            onChange={(e) => this.updateStateObject('product', 'title', e.target.value)}
            placeholder="product title"
          />
          <textarea onChange={(e) => this.updateStateObject('product', 'description', e.target.value)} placeholder="product description..."></textarea>
          <button onClick={() => this.putProduct(this.state.product)}>
            add
          </button>
        </div>
      </Fragment>
      )
  }
}

export default AddProduct;


/*

  putDataToDb = (message) => {
    console.log('message', message);
    let currentIds = this.state.data.map((d) => d.id);
    let idToBeAdded = 0;
    while(currentIds.includes(idToBeAdded)){
      ++idToBeAdded;
    };

    axios.post('http://localhost:3001/api/putData', {
      id: idToBeAdded,
      message: message
    });
    
  }
  */