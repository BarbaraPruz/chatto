import React, {Component} from 'react';

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
  //      this.props.handleSubmit(this.state);
      console.log("Login submit",this.state.email, this.state.password);
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

export default LoginForm;