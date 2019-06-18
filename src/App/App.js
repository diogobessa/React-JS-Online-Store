import React, { Component } from 'react';
import { Context } from '../context';
import { Columns, Button } from 'react-bulma-components/full';
import Header from '../components';
import './App.css';

class App extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      products: []
    }
  }
  
  componentDidMount(){
    /*this.context.store.subscribeProducts((products) => {
      this.context.set('products', products);
    });*/
    this.context.store.fetchProducts((products) => {
      this.context.set('products', products);
    });
  }

  render(){
    return (
      <div id="app">
        <Header></Header>
        <Columns>
          <Columns.Column size="one-third">33%</Columns.Column>
          <Columns.Column size="one-third">33%</Columns.Column>
          <Columns.Column size="one-third">33%</Columns.Column>
        </Columns>
        <p>Hello World</p>
        <h1>{this.state.products}</h1>
        <ul>{this.context.products.map((product) => <li key={product.id}>{product.title}</li>)}</ul>
      </div>
      )
  }
}

App.contextType = Context;
export default App;