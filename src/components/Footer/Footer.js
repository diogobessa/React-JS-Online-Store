import React, { Component } from 'react';
import './Footer.css';
import { Content, Footer as BulmaFooter, Container, Columns, Button } from 'react-bulma-components/full';

class Footer extends Component{

    render(){
        return(
            <BulmaFooter>
                <Container breakpoint="fullhd">
                    <Columns>
                        <Columns.Column>
                            <Content>
                                <h3>Subscribe</h3>
                                <p>Sign up to receive news about new arrivals, collections, events and sales.</p>
                                <Button>Sign up!</Button>
                            </Content>
                            </Columns.Column>
                        <Columns.Column>
                            <Content>
                                <h3>Help</h3>
                                <ul>
                                    <li>Shipping</li>
                                    <li>Order Status</li>
                                    <li>Returns & exchanges</li>
                                    <li>My account</li>
                                    <li>Size guide</li>
                                    <li>Shoe care</li>
                                </ul>
                            </Content>
                        </Columns.Column>
                        <Columns.Column>
                            <Content>
                                <h3>Company</h3>
                                <ul>
                                    <li>About</li>
                                    <li>Press</li>
                                    <li>Careers</li>
                                    <li>CSR</li>
                                    <li>Contact</li>
                                    <li>Terms & conditions</li>
                                    <li>Privacy policy</li>
                                </ul>
                            </Content>
                        </Columns.Column>
                    </Columns>
                </Container>
            </BulmaFooter>
        )
    }

}

export default Footer;