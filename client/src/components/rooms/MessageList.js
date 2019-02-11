import React, {Component} from 'react';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

import styles from 'components/Style'

class MessageList extends Component {

    render() {
   //     const { classes } = this.props;
        return (
            <List>
                {this.props.messages.map((message) => 
                    <React.Fragment key={message.id} >
                        <Divider /> 
                        <ListItem>
                            <ListItemText 
                                primary={message.content} 
                                secondary={`${message.user_name} - ${message.updated_time}`}
                            />
                        </ListItem>                       
                    </React.Fragment>                  
                )} 
            </List>          
        );
    }
}

export default withStyles(styles)(MessageList);
