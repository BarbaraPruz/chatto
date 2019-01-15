import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import 'index.css';
import App from 'components/App';
import LoginForm from 'components/LoginForm';
import Rooms from 'components/Rooms';
import rootReducer from './reducers';

const store = createStore(
    rootReducer,
    applyMiddleware(reduxThunk)
);

// App/Route note:  Route will be passed to the App component as prop children
ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <App>
                <Route path="/" exact component={LoginForm} />
                <Route path="/rooms" exact component={Rooms} />                                
            </App>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);
