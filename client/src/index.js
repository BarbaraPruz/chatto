import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import rootReducer from './reducers';
import App from 'components/App';
import LoginForm from 'components/user/LoginForm';
import Logout from 'components/user/Logout';
import Rooms from 'components/rooms/Rooms';
import Room from 'components/rooms/Room';
import About from 'components/About';

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
            <App>
                <Route path="/" exact component={LoginForm} />
                <Route path="/login"  component={LoginForm} />
                <Route path="/logout"  component={Logout} />
                <Route path="/about" component={About} />                                
                <Route path="/rooms" component={Rooms} /> 
                <Route path="/room/:roomId" component={Room} />
            </App> 
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
)
