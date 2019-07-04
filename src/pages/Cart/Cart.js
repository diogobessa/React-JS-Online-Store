import React, { Component } from 'react';
import { CartListing } from '../../components';
import { Columns, Button, Container } from 'react-bulma-components/full';
import { cartTotal } from '../../services/functions';

// TODO Add Localstorage before Context
/*

    1. Check LocalStorage
    2. Check Context
    3. Add to Context
    4. Save to localStorage

    a. add
    b. remove
    c. control quantities

*/

class Cart extends Component{
    constructor(){
        super();

        this.state = {
            loading: true
        }
    }
    render(){
        return(
            <Container>
            <Columns>
                <Columns.Column size="two-thirds">
                    <CartListing></CartListing>
                    <Button>Checkout!</Button>         
                </Columns.Column>
                <Columns.Column size="one-third">
                </Columns.Column>               
            </Columns>
            </Container>
        )
    }
}

export default Cart;