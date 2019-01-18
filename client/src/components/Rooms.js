import React, {Component} from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import requireAuth from 'components/requireAuth';
import getRooms from 'actions/rooms';

class Rooms extends Component {
   
    componentDidMount() {
        this.props.getRooms();
    }

    render() {
        console.log('Rooms render props',this.props);
        return (
            <div className="rooms">
                <h1>Rooms</h1>
                <ul>
                {this.props.rooms.map((room) => <li key={room.id}>{room.name}</li>)}             
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
    connect(mapStateToProps, {getRooms}),
    requireAuth
) (Rooms);

