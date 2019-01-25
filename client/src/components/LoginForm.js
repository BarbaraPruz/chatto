import React, {Component} from 'react';
import { connect } from 'react-redux';

import { loginUser } from 'actions/user';

class LoginForm extends Component {

    state = {
        email: '',
        password: '',
    }

    componentDidMount()  {
        const { dispatch, currentURL } = this.props
    
        if (this.props.auth) {
            // already logged in
            this.props.history.push('/rooms');  
        }
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

const mapStateToProps = state => {
    return {
        auth: state.user.authenticated
    }
}    
  
export default connect(mapStateToProps,{loginUser})(LoginForm);
