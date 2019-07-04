import React, { Component, Fragment } from 'react';
import { Context } from '../../context';
import { getPrice, cartTotal } from '../../services/functions';

class CartListing extends Component{
    constructor(){
        super();

        this.state = {
            cart: []
        }
    }

    componentDidMount(){
        console.log('this context cart', this.context.cart);
    }
    render(){
        return(
            <Fragment>
                <h3>Cart</h3>
                <ul>
                    {this.context.cart.map( (i) => <li key={i.item}>{i.title} | {i.quantity} x {getPrice(i.price)}</li> )}
                </ul>
                <div>Total: {cartTotal(this.context.cart)}</div>

            </Fragment>
        )
    }
}
CartListing.contextType = Context;
export default CartListing;