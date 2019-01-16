import React, {Component} from 'react';
import { connect } from 'react-redux';
import { logoutUser } from 'actions/user';

class Logout extends Component {
    componentDidMount() {
        this.props.logoutUser();
    }
    render() {
        return (
            <div>
                <p>Sorry to see you go</p>
            </div>
        )
    }
}

export default connect(null,{logoutUser})(Logout);