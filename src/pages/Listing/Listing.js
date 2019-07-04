import React, { Component } from 'react';
import { getPrice, returnFeaturedImage } from '../../services/functions';
import { Container, Columns } from 'react-bulma-components/full';
import { Productcard } from '../../components';
import { Context } from '../../context';

class Listing extends Component{

    constructor(){
        super();
        this.state = {
            products: []
        }
        this.productsFilteredInfo = [];
    }

    filteredProducts = (match) => {
        const showProducts = this.context.products.filter( (product) => {
            switch (match){
                case 'newarrivals':
                    const difDays = parseInt((new Date() - new Date(product.date))/(24*3600*1000));
                    return difDays <= 15
                default:
                    return product;
            }
        });

        this.productsFilteredInfo = [];
        showProducts.forEach( (product) => {
            const image = product.imgs && product.imgs.length > 0 && returnFeaturedImage(product.imgs); 
            const price = product.price && getPrice(product.price);
            this.productsFilteredInfo.push(
                    {
                        id: product._id,
                        title: product.title,
                        price: price,
                        image: image
                    }
            );
        });
        this.setState({
            products: this.productsFilteredInfo
        })

    }

    componentDidMount(){
        this.filteredProducts(this.props.match.params.products);
    }

    componentWillReceiveProps(nextProps){
        const nextMatch = nextProps.match.params.products;
        if(nextMatch !== this.props.match.params.products){
            this.filteredProducts(nextMatch);
        }
    }

    render(){
        return(
            <Container breakpoint="fullhd">
                <div className="contentWrap">
                    <Columns>
                        {this.productsFilteredInfo.map((info) => <Columns.Column size="one-quarter" key={`col-${info.id}`}><Productcard info={info} key={info.id}></Productcard></Columns.Column>)}
                    </Columns>
                </div>
            </Container>
        )
    }

}

Listing.contextType = Context;
export default Listing;