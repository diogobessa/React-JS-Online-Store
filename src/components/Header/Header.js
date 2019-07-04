import React, {Component} from 'react';
import { Context } from '../../context';
import { Link } from 'react-router-dom';
import './Header.css';
import { cartTotal } from '../../services/functions';
import { SearchBar } from '../../components';
import { Container, Navbar } from 'react-bulma-components/full';
/* Section, Container, Columns */
class Header extends Component{

    constructor(props){
        super(props);

        this.state = ({
            cartVal: 0,
            searchVal: ''
        })
    }

    componentDidMount(){
        this.setState({
            cartVal: this.context.cart.length
        });
    
    
    }

    componentDidUpdate(){
        if(this.state.searchVal !== this.context.searchVal){
            //this.setState('searchVal', this.context.searchVal);
        }
    }

    changeHistory = (e) => {
        console.log('changeHistory', e);
        console.log('header history', this.props.history);
        this.props.history.push(`/search/${e}`);
    }

    render(){
        return(
                <Navbar fixed="top">
                    <Navbar.Brand>
                        <Navbar.Item renderAs="div">
                            <Link to='/'>
                                <img id="logo" alt="logo" src="http://diogobessa.com/_remote/imgs/logo.png" width="80px" height="40px" />
                            </Link>
                        </Navbar.Item>
                        <Navbar.Burger></Navbar.Burger>
                    </Navbar.Brand>
                    <Navbar.Menu>
                        <Navbar.Container>
                            <Navbar.Item renderAs="div">
                                <Link to='/collection/blacklabel'>
                                    Black Label Collection
                                </Link>
                            </Navbar.Item>
                            <Navbar.Item renderAs="div">
                                <Link to='/newarrivals'>
                                    New arrivals
                                </Link>
                            </Navbar.Item>
                            <Navbar.Item renderAs="div">
                                <SearchBar onChangeHistory={this.changeHistory.bind(this)}></SearchBar>
                            </Navbar.Item>
                        </Navbar.Container>
                        <Navbar.Container position="end">
                            <Navbar.Item>
                                <Link to='/bag'>
                                    <div>Bag { cartTotal(this.context.cart) }</div>
                                </Link>
                            </Navbar.Item>
                        </Navbar.Container>
                    </Navbar.Menu>
                </Navbar>
        )
    }
}
Header.contextType = Context;
export default Header;

/*

    <header>
                <Section>
                    <Container>
                        <Columns>
                        <Columns.Column size="two-thirds">Logo + menu</Columns.Column>
                        <Columns.Column size="one-third">Carrinho</Columns.Column>
                        </Columns>
                    </Container>
                </Section>
            </header>

            */