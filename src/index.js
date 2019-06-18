import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Context } from './context';
import { store } from './store';

//const newStore = store();

class ProviderComp extends React.Component{
    state = {
        'products': [],
        set: (object, val) => {
            this.setState({[object]: val})
        },
        'store': store()
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

module.hot.accept();

/*     return(
    <Context.Provider value={ {
        providerState: this.state,
        store: newStore } }>
        <App></App>
    </Context.Provider>
    )
    */