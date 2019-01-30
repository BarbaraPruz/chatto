import React, {Component} from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';

import requireAuth from 'components/requireAuth';
import MessageList from 'components/rooms/MessageList';
import MessageForm from 'components/rooms/MessageForm';
import styles from 'components/Style'
import { getRoom, getMessageUpdates } from 'actions/rooms';

class Room extends Component {

    // ToDo:  this section implements polling for new messages
    // A better approach is to use websocket and have messages pushed
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
        this.props.getRoom(roomId, this.startInterval);
    }  

    componentWillUnmount() {
        this.cleanUpInterval();
    }
    // End polling for new messages code

    render() {
        const { classes } = this.props;
        const paperClasses = `${classes.paper}, ${classes.textPane}`;

        return (
            <main className={classes.main}> 
                <Paper className={paperClasses}>                
                    <Typography component="h1" variant="h4">
                        {this.props.currentRoom.name}
                    </Typography>
                    <MessageList messages={this.props.currentRoom.messages} />
                    <MessageForm roomId={this.props.currentRoom.id} />
                </Paper>
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

