import React, { Component } from 'react';
import { getPrice, returnFeaturedImage } from '../../services/functions';
import { Container, Columns } from 'react-bulma-components/full';
import { Productcard } from '../../components';
import { Context } from '../../context';

class Search extends Component{

    constructor(){
        super();
        this.state = {
            products: []
        }
        this.productsFilteredInfo = [];
    }


    filteredProducts = (val) => {
        const showProducts = this.context.products.filter( (product) => {
                                const lcProductTitle = product.title.toLowerCase();
                                const lcVal = val.toLowerCase();
                                return lcProductTitle.indexOf(lcVal) !== -1
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
        this.filteredProducts(this.props.match.params.val);
    }

    componentWillReceiveProps(nextProps){
        const nextMatch = nextProps.match.params.val;
        if(nextMatch !== this.props.match.params.val){
            this.filteredProducts(nextMatch);
        }
    }



    render(){
        return(
            <Container breakpoint="fullhd">
                <Columns>
                    {this.productsFilteredInfo.map( (info) => <Columns.Column size="one-quarter" key={`col-${info.id}`}><Productcard info={info} key={info.id}></Productcard></Columns.Column>)}
                </Columns>    
            </Container>
        )
    }


}

Search.contextType = Context;
export default Search;