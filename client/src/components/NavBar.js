import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { compose } from 'redux';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles'

import styles from 'components/Style'
 
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
        const { classes } = this.props; 

         return (
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" color="inherit" className={classes.appTitle} >
                        Chatto
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

export default compose (
    connect(mapStateToProps),
    withStyles(styles)
) (NavBar);