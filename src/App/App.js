import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Context } from '../context';
import { Header, Footer } from '../components';
import { Listing, Product, Cart, Search, NoMatch } from '../pages';
import { Hero } from 'react-bulma-components/full';
import './App.css';
import '../pages/pages.css';
import axios from 'axios';

class App extends Component{

  constructor(){
    super();
    this.state = {
      loading: true
    }
  }
// TODO Criar funçao para criar o resultado pretendido com indexação
  async componentDidMount(){
    try {
      const response = await axios.get('http://localhost:3001/api/getProducts', {})
      this.context.set('products', response.data.data);
      const resStock = await axios.get('http://localhost:3001/api/getStock', {});
      this.context.set('stock', resStock.data.data);
      this.setState({ loading: false });
    } catch (ex) {
        console.error(ex);
    }
  }

  renderComponents = () => {
    return(
      <Fragment>
        <Router>
            <Hero size="fullheight">
              <Hero.Head renderAs="header">
                <Route path="/" component={Header} />
              </Hero.Head>
              <Hero.Body>
                <Switch>
                  <Route path="/bag" component={Cart} />
                  <Route exact path="/:products?" component={Listing} />
                  <Route path="/product/:id" component={Product} />
                  <Route path="/search/:val" component={Search} />
                  <Route component={NoMatch} />
                </Switch>
              </Hero.Body>
              <Hero.Footer>
                <Footer></Footer>
              </Hero.Footer>
            </Hero>
        </Router>
      </Fragment>
    )
  }

  render(){
    const { loading } = this.state;
    return (
      <div id="app">  
        { loading ? 'loading..' : this.renderComponents()}
      </div>
      )
  }
}

App.contextType = Context;
export default App;