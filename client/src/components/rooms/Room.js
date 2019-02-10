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
        this.token = localStorage.getItem('token');
        this.wsURL = `${API_WS_ROOT}?token=${this.token}`;

        let roomId = Number(this.props.match.params.id);
        let room = this.props.rooms.find( (r) => r.id === roomId);
        this.state = {
            room: room,
            messages: []
        }
    }
   
    componentDidMount() {
        fetch(`/rooms/${this.state.room.id}`,
            { 
                headers: new Headers({
                'Authorization': `${this.token}`, 
                'Content-Type': 'application/json'
                })                  
            })
          .then(res => res.json())
          .then(room => {
              this.setState({ messages: room.messages })});
      };

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
                    <ActionCableConsumer
                        key={this.state.room.id}  
                        channel={{ channel: 'MessagesChannel', room: this.state.room.id }}
                        onReceived={this.handleReceivedMessage}
                    />                    
                    <MessageList messages={this.state.messages} />
                    <MessageForm roomId={this.state.room.id} />
                </Paper>
            </main>  
            </ActionCableProvider>    
        );
    }
};

const mapStateToProps = state => {
    return {
      rooms: state.room.rooms
    }
}
export default compose (
    connect(mapStateToProps),
    requireAuth,
    withStyles(styles)  
) (Room);

