import React, {Component} from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import requireAuth from 'components/requireAuth';

class Room extends Component {
   
    render() {
        console.log("Room!",this.props);
        return (
            <div className="room">
                <h1>{this.props.currentRoom.name}</h1>
                <ul>
                {this.props.currentRoom.messages.map((message) => 
                    <li key={message.id}>
                        {message.content}
                    </li>)}             
                </ul>
            </div>      
        );
    }
};

const mapStateToProps = state => {
    return {
      currentRoom: state.room.currentRoom
    }
}
export default compose (
    connect(mapStateToProps),
    requireAuth
) (Room);

