import React, {Component} from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { ActionCableProvider, ActionCableConsumer } from 'react-actioncable-provider';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';

import requireAuth from 'components/requireAuth';
import MessageList from 'components/rooms/MessageList';
import MessageForm from 'components/rooms/MessageForm';
import styles from 'components/Style'

//const API_WS_ROOT = 'ws://localhost:3001/cable';
const API_WS_ROOT = 'wss://secure-savannah-88233.heroku.com/cable';

class Room extends Component {
    
    constructor(props) {
        super(props);
        this.interval = 0;
        this.roomId = this.props.match.params.id  
    }

    startInterval = () => {
        this.interval = setInterval(this.checkMessageUpdates, 5000);
    };

    cleanUpInterval = () => {
        clearInterval(this.interval);
    };

    checkMessageUpdates = () => {
       const lastMessageIndex = this.props.currentRoom.messages.length - 1;
       let lastMessage = this.props.currentRoom.messages[lastMessageIndex] || null;      
       this.props.getMessageUpdates(this.roomId, lastMessage);
    } 
    
    componentDidMount() {
        this.props.getRoom(this.roomId, this.startInterval);
    }  

    handleReceivedMessage = response => {
        const { message } = response;
        this.setState({ messages: [...this.state.messages, message] });
    };

    render() {
        const { classes } = this.props;
        const paperClasses = `${classes.paper}, ${classes.textPane}`;

        return (
            <ActionCableProvider url={this.wsURL}>
            <main className={classes.main}> 
                <Paper className={paperClasses}>                
                    <Typography component="h1" variant="h4">
                        {this.state.room.name}
                    </Typography>
                    <MessageList messages={this.props.currentRoom.messages} />
                    <MessageForm roomId={this.roomId} />
                </Paper>
            </main>  
            </ActionCableProvider>    
        );
    }
};

const mapStateToProps = state => {
    return {
      currentRoom: state.room.currentRoom   // currentRoom not set until component did mount
    }
}
export default compose (
    connect(mapStateToProps),
    requireAuth,
    withStyles(styles)  
) (Room);

