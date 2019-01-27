import React, {Component} from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import requireAuth from 'components/requireAuth';
import MessageForm from 'components/MessageForm';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  });

class Room extends Component {
   
    render() {
        console.log("Room!",this.props);
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <h1>{this.props.currentRoom.name}</h1>
                <List>
                    {this.props.currentRoom.messages.map((message) => 
                        <React.Fragment>
                            <ListItem>
                                <ListItemText primary={message.content} secondary={message.user_name} />
                            </ListItem>
                            <Divider />  
                        </React.Fragment>                  
                    )} 
                </List>
                < MessageForm roomId={this.props.currentRoom.id}/>
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
    requireAuth,
    withStyles(styles)  
) (Room);

/*
            <div className="room">
                <h1>{this.props.currentRoom.name}</h1>
                <ul>
                {this.props.currentRoom.messages.map((message) => 
                    <li key={message.id}>
                        {message.user_name} - {message.content}
                    </li>)}             
                </ul>
                < MessageForm roomId={this.props.currentRoom.id}/>
            </div> 
*/