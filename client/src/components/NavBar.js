
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";

class NavBar extends Component {
    render() {
        let userOptions=null;
        let logoutOption=null;        
        if (this.props.userLoggedIn) {            
            userOptions = 
                <React.Fragment>
                    <NavLink to="/rooms" exact >Rooms</NavLink> 
                 </React.Fragment>
            logoutOption = 
                <NavLink to={`/logout`} exact>Logout</NavLink>            
        }
             
        return (
            <div>
                Chatto
                {userOptions}
                {logoutOption}   
            </div>
        );
    }
}
  
const mapStateToProps = state => {
    return {
      userLoggedIn: state.user.authenticated,
    }
  }
  
export default connect(mapStateToProps)(NavBar);

