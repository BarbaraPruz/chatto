import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'

const RoomCard =  ({ classes, room, handleClick }) =>
    <Card className={classes.card}>
        <CardContent>
            <Typography variant="h5" component="h2">
                {room.name}
            </Typography>                                    
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                {room.description}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="medium" color="primary" onClick={handleClick} id={room.id}>Join Conversation</Button>
        </CardActions>
    </Card>

export default RoomCard;