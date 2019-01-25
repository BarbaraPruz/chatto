import React, {Component} from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import requireAuth from 'components/requireAuth';
import { getRooms, getRoom } from 'actions/rooms';

class Rooms extends Component {
   
    componentDidMount() {
        console.log("Rooms component did mount")
        this.props.getRooms();
    }

    handleClick = (event) => { 
        let roomId = event.target.id;
        console.log("joining room",roomId);
        this.props.getRoom(roomId, () => {
            this.props.history.push(`/room/${roomId}`)
        })
    }

    render() {
        console.log('Rooms render props',this.props);
        return (
            <div className="rooms">
                <h1>Rooms</h1>
                <ul>
                {this.props.rooms.map((room) => 
                    <li key={room.id}>
                        {room.name}
                        <button onClick={this.handleClick} id={room.id}>Join</button>
                    </li>)}             
                </ul>
            </div>      
        );
    }
};

const mapStateToProps = state => {
    return {
      rooms: state.room.rooms
    }
}
export default compose (
    requireAuth,    
    connect(mapStateToProps, {getRooms, getRoom})
) (Rooms);

