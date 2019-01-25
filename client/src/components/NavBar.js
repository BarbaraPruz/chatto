
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';

 
class NavBar extends Component {
    render() {
        //let userOptions=<NavLink to="/login" exact >Login</NavLink> ;
        let logoutOption=null;        
        if (this.props.userLoggedIn) {            
            //userOptions = 
                //<NavLink to="/rooms" exact >Rooms</NavLink> 
            logoutOption = 
                <Button color="inherit" component={Link} to="/logout">LOGOUT</Button>
                //<NavLink to={`/logout`} exact>Logout</NavLink>            
        }

        return (
            <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" color="inherit" style={{ flex: 1 }} >
                    Chatto - let's talk!
                </Typography>
                {logoutOption}                              
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

