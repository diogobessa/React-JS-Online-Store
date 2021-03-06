import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Context } from './context';

//import { store } from './store';
//const newStore = store();

class ProviderComp extends React.Component{
    state = {
        'products': [],
        'cart': [],
        'searchVal': '',
        set: (object, val) => {
            this.setState({[object]: val})
        }
    }

    componentDidUpdate(){
        console.log('state update', this.state);
    }

    render(){
        return(
            <Context.Provider value={this.state}>
                <App></App>
            </Context.Provider>
        )
    }
}

ReactDOM.render(
    <ProviderComp></ProviderComp>, 
    document.getElementById('root')
);

//module.hot.accept();