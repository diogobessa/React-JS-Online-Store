import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container, Button, Columns, Form } from 'react-bulma-components/full';
import { getPrice } from '../../services/functions';
import { Context } from '../../context';
import { Gallery, Price, Title } from '../../components';
import './Product.css';

class Product extends Component{

    constructor(props){
        super(props);

        this.state = {
            product: {variations: []},
            selectedSize: '',
            tabContent: '',
            fixedInfoContainer: false,
            translateInfoContainer: 0,
            widthInfoContainer: 'auto',
            loading: true
        }
        
    }

    componentDidMount(){

        window.addEventListener('scroll', this.handleScroll);
        const product = this.context.products && this.context.products.find( (product) => {
            this.setState({
                loading: false
            })
            console.log('tpmp', this.props.match);
            return product._id === this.props.match.params.id
        });

        this.setState({
            product
        })
    }

    componentDidUpdate(){
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        console.log('window scrollY', window.scrollY);
        console.log('window pageYOffset', window.pageYOffset);
        console.log(this.refs['productInfo']);
        let productInfoRect = ReactDOM.findDOMNode(this.refs['productInfo']).getBoundingClientRect();
        console.log('info rect', productInfoRect);
        if(productInfoRect.top <= 1020){
            this.setState({
                'fixedInfoContainer': true,
                'translateInfocontainer': 100+"px",
                'widthInfoContainer': productInfoRect.width+"px"
            });
        }else{
            this.setState({
                'fixedInfoContainer': false,
                'widthInfoContainer': 'auto'
            });
        }
    }

    renderProduct = data => {
        return(
           <p>product info..</p> 
        )
    }
    
    // TODO Reduzir o numero de IF's na funão onAddToBag
    onAddToBag = () => {
        let cartData = this.context.cart;
        if(this.state.selectedSize){
            const foundItem = cartData.find((el, index) => {
                if(el.item === this.state.selectedSize){
                    cartData[index].quantity++;
                }
                return el.item === this.state.selectedSize;
            });
            
            if(!foundItem){
                cartData.push({
                    item: this.state.selectedSize,
                    title: this.state.product.title,
                    price: this.state.product.price,
                    quantity: 1
                });
            }
            this.context.set('cart', cartData);
        }
    }

    onSizeChange = evt => {
        this.setState({
          selectedSize: evt.target.value,
        });
      }; 
    

    render(){
        const {product} = this.state;
        
        const variationSize = product.variations && product.variations.filter( (variation) => {
            return variation.type === "size"
        });
        variationSize.forEach( (i) => {
            const selectedStockItem = this.context.stock.find( (stockItem) => {
                return stockItem.PRODUCTVARIATIONID === i._id
            });
            i.disabled = selectedStockItem.quantity <= 0 ? true : false;
            i.stock = selectedStockItem.quantity;
        });

     
        console.log('container width', this.state.widthInfoContainer);
        return(
            <Container>
                <Columns>
                    <Columns.Column size="two-thirds">
                        <Gallery images={product.imgs}></Gallery>
                    </Columns.Column>
                    <Columns.Column size="one-third">
                        <div className="productInfo" ref="productInfo">
                            <div className={`productInfoWrap ${this.state.fixedInfoContainer === true ? 'fixed': ''}`} style={{ width: this.state.widthInfoContainer}}>
                                <Title title={product.title}></Title>
                                <Price price={getPrice(product.price)}></Price>
                                <Form.Field>
                                        <Form.Select onChange={this.onSizeChange} value={this.state.selectedSize}>
                                            <option value="" defaultValue>Select size</option>
                                            { variationSize.map( (variation) => <option value={variation._id} key={variation._id} data-stock={variation.stock} disabled={variation.disabled}>{variation.size}</option>)}
                                        </Form.Select>
                                        <Button onClick={this.onAddToBag}>Add to Bag</Button>
                                </Form.Field>
                                <p>{ product.description }</p>
                            </div>
                        </div>
                    </Columns.Column>
                </Columns>
            </Container>
        )
    }

}

Product.contextType = Context;
export default Product;


/*

            <Columns>
                <Columns.Column size="two-thirds">
                    <div className="bg">image</div>
                </Columns.Column>
                <Columns.Column size="one-third">
                    <div className="bg">
                        <h1>{this.state.product.title}</h1>
                        <p>{getPrice(this.state.product.price)}</p>
                        <Form.Select name="size">
                            <option value="" disabled selected>Select size</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                        </Form.Select>
                        <Button onClick={this.check}>Add to Bag</Button>
                    </div>
                </Columns.Column>
            </Columns>

*/

/*


    onAddToBag = () => {
        let cartData = this.context.cart;
        if(this.state.selectedSize){
            const foundItem = cartData.find((el, index) => {
                const cartItemIndex = index;
                return el.item === this.state.selectedSize
            });
            if(!foundItem){
                cartData.push({
                    item: this.state.selectedSize,
                    quantity: 1
                });
                this.context.set('cart', cartData);
            }else{
                console.log('found indeeeex', cartItemIndex);
                foundItem.set('quantity', cartData.quantity++);
            }
            console.log(cartData);
            console.log(this.context.cart);
        }
    }

    */