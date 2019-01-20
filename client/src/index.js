import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import 'index.css';
import App from 'components/App';
import LoginForm from 'components/LoginForm';
import Logout from 'components/Logout';
import Rooms from 'components/Rooms';
import Room from 'components/Room';
import rootReducer from './reducers';
import NavBar from 'components/NavBar';

const store = createStore(
    rootReducer,
    {   //initial state
        user: { authenticated: localStorage.getItem('token')}
    },      
    applyMiddleware(reduxThunk)
);

// App/Route note:  Route will be passed to the App component as prop children
ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <React.Fragment>
                <NavBar />    
                <Route path="/" exact component={LoginForm} />
                <Route path="/login"  component={LoginForm} />
                <Route path="/logout"  component={Logout} />                                
                <Route path="/rooms" component={Rooms} /> 
                <Route path="/room/:roomId" component={Room} />
            </React.Fragment> 
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
)