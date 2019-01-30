import React, {Component} from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'

import requireAuth from 'components/requireAuth';
import MessageList from 'components/rooms/MessageList';
import MessageForm from 'components/rooms/MessageForm';
import styles from 'components/Style'
import { getRoom, getMessageUpdates } from 'actions/rooms';

class Room extends Component {

    constructor(props) {
        super(props);
        this.interval = 0;
    }

    startInterval = () => {
        this.interval = setInterval(this.checkMessageUpdates, 5000);
    };

    cleanUpInterval = () => {
        clearInterval(this.interval);
    };

    checkMessageUpdates = () => {
       const roomId = this.props.currentRoom.id;
       const lastMessageIndex = this.props.currentRoom.messages.length - 1 
       const lastMessage =  this.props.currentRoom.messages[lastMessageIndex];      
       this.props.getMessageUpdates(roomId, lastMessage);
    } 
    
    componentDidMount() {
        const roomId = this.props.match.params.id;
        console.log("Room did mount", roomId);
        this.props.getRoom(roomId, this.startInterval);
    }  

    componentWillUnmount() {
        this.cleanUpInterval();
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
    connect(mapStateToProps, {getRoom, getMessageUpdates}),
    requireAuth,
    withStyles(styles)  
) (Room);

