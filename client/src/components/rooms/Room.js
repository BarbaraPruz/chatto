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
import { getRoom, getMessageUpdates } from 'actions/rooms';

const API_WS_ROOT = 'ws://localhost:3001/cable';

class Room extends Component {
    
    constructor(props) {
        super(props);
        this.token = localStorage.getItem('token');
        this.wsURL = `${API_WS_ROOT}?token=${this.token}`
        this.state = {
            roomId: this.props.match.params.id,
            messages: []
        }
    }
   
    componentDidMount() {
        fetch(`/rooms/${this.state.roomId}`,
            { 
                headers: new Headers({
                'Authorization': `${this.token}`, 
                'Content-Type': 'application/json'
                })                  
            })
          .then(res => res.json())
          .then(room => {
              console.log("Room component did mount",room.messages)
              this.setState({ messages: room.messages })});
      };

      handleReceivedMessage = response => {
          console.log("YES!!!!")
        const { message } = response;
        this.setState({ messages: [...this.state.messages, message] });
      };
    render() {
        const { classes } = this.props;
        const paperClasses = `${classes.paper}, ${classes.textPane}`;
console.log("Room render", this.state)
        return (
            <ActionCableProvider url={this.wsURL}>
            <main className={classes.main}> 
                <Paper className={paperClasses}>                
                    <Typography component="h1" variant="h4">
                        {this.props.currentRoom.name}
                    </Typography>
                    <ActionCableConsumer
            key={this.state.roomId}  
            channel={{ channel: 'MessagesChannel', room: this.state.roomId }}
            onReceived={this.handleReceivedMessage}
          />                    
                    <MessageList messages={this.state.messages} />
                    <MessageForm roomId={this.state.roomId} />
                </Paper>
            </main>  
            </ActionCableProvider>    
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
    requireAuth,
    withStyles(styles)  
) (Room);

