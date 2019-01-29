import React from 'react';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const MessageList =  ({ messages }) =>  
    <List>
        {messages.map((message) => 
            <React.Fragment>
                <Divider /> 
                <ListItem>
                    <ListItemText primary={message.content} secondary={message.user_name} />
                </ListItem>                       
            </React.Fragment>                  
        )} 
    </List>          


export default MessageList;
  