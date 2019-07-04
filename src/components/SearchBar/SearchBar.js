import React, { Component } from 'react';
import { Form, Icon } from 'react-bulma-components/full';
import { Context } from '../../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
class SearchBar extends Component{

    constructor(props){
        super(props);

        this.state = {
            search: ''
        }
    }

    componentDidMount(){
    }

    handleChange = event => {
        this.setState({'search': event.target.value});
    }

    keyPressed = event => {
        if(event.key === "Enter"){
            console.log('pressed enter.... confirmed');
            this.props.onChangeHistory(this.state.search);
            this.context.set('searchVal', this.state.search);
        }
    }

    render(){

        const { search } = this.state;
        return(
            <Form.Field>
                <Form.Control iconRight>
                    <Form.Input type="text" placeholder="sweatshirt..." onKeyPress={this.keyPressed} onChange={this.handleChange} value={search}></Form.Input>
                    <Icon align="right" color="dark">
                        <FontAwesomeIcon icon={faSearch} />
                    </Icon>
                </Form.Control>
            </Form.Field>
        )
    }
}
SearchBar.contextType = Context;
export default SearchBar;
