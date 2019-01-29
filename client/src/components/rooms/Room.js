import React, {Component} from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'

import requireAuth from 'components/requireAuth';
import MessageList from 'components/rooms/MessageList';
import MessageForm from 'components/rooms/MessageForm';
import styles from 'components/Style'
import { getRoom } from 'actions/rooms';

class Room extends Component {

    componentDidMount() {
        const roomId = this.props.match.params.id;
        this.props.getRoom(roomId);
    }  

    render() {
        const { classes } = this.props;
        return (
            <main className={classes.main}> 
                <Typography component="h1" variant="h4">
                    {this.props.currentRoom.name}
                </Typography>
                <MessageList messages={this.props.currentRoom.messages} />
                <MessageForm roomId={this.props.currentRoom.id} />
            </main>      
        );
    }
};

const mapStateToProps = state => {
    return {
      currentRoom: state.room.currentRoom
    }
}
export default compose (
    connect(mapStateToProps, {getRoom}),
    requireAuth,
    withStyles(styles)  
) (Room);

