//REACT
import React from 'react';
import ReactDOM from 'react-dom';
//REDUX
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './redux/reducers';
//REACT ROUTER
import {BrowserRouter} from 'react-router-dom';
//STYLES
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';
//COMPONENTS
import Home from './components/Home';
//import Login from './components/login/login'


const Root = () => (
    <BrowserRouter>
        <Provider store={createStore(reducers)}>
            <Home/>
        </Provider>
    </BrowserRouter>
);

ReactDOM.render(<Root/>, document.getElementById('root'));