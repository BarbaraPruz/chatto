import React, {Component} from 'react';
import { connect } from 'react-redux';

import { loginUser } from 'actions/user';

class LoginForm extends Component {

    state = {
        email: '',
        password: '',
    }

    handleChange = (event) => this.setState({
        [event.target.name]: event.target.value
    });

    handleLogin = (event) => {
        event.preventDefault();
        console.log("Login submit",this.state.email, this.state.password);
        this.props.loginUser(this.state, () => {
            this.props.history.push('/rooms');
        });                 
    }
    
    render() {
        return (
            <div className="login-form">
                <h1>chatto login</h1>
                <form onSubmit={ event => this.handleLogin(event) }>
                    <input type="text" name="email" onChange={ event => this.handleChange(event) } placeholder="User Email" />
                    <input type="password" name="password" onChange={ event => this.handleChange(event) } placeholder="Password" />
                    <button type="submit" >Login</button>
                </form>
            </div>      
        );
    }
};

export default connect(null,{loginUser})(LoginForm);
