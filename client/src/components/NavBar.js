
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';

 
class NavBar extends Component {
    
    renderLinks() {
        if (this.props.userLoggedIn) {
            return (
                <React.Fragment>
                    <Button color="inherit" component={Link} to="/about">ABOUT</Button>
                    <Button color="inherit" component={Link} to="/rooms">ROOMS</Button>
                    <Button color="inherit" component={Link} to="/logout">LOGOUT</Button>             
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <Button color="inherit" component={Link} to="/">LOGIN</Button>             
                    <Button color="inherit" component={Link} to="/about">ABOUT</Button>
                </React.Fragment> 
            )           
        }
    }

    render() {
         return (
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" color="inherit" style={{ flex: 1 }} >
                        Chatto - let's talk!
                    </Typography>
                    {this.renderLinks()}                           
                </Toolbar>
            </AppBar>
        );
    }
}

const mapStateToProps = state => {
    return {
      userLoggedIn: state.user.authenticated,
    }
  }

export default connect(mapStateToProps)(NavBar);  

