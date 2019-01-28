import React, {Component} from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import styles from 'components/Style'

import requireAuth from 'components/requireAuth';
import { getRooms, getRoom } from 'actions/rooms';
  
class Rooms extends Component {
   
    componentDidMount() {
        console.log("Rooms component did mount")
        this.props.getRooms();
    }

    handleClick = (event) => { 
        let roomId = event.target.id;
        console.log("joining room",roomId);
        this.props.getRoom(roomId, () => {
            this.props.history.push(`/room/${roomId}`)
        })
    }

    render() {
        const { classes } = this.props;
     
        return (
            <main className={classes.main}> 
                <Typography component="h1" variant="h4">
                    Rooms
                </Typography>
                <Grid container spacing={16}>
                    {this.props.rooms.map((room) =>   
                        <Grid item xs={4}>
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
                                    <Button size="medium" color="primary" onClick={this.handleClick} id={room.id}>Join Conversation</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )}
                </Grid>
          </main>
        );
    }
};

const mapStateToProps = state => {
    return {
      rooms: state.room.rooms
    }
}
export default compose (
    requireAuth,    
    connect(mapStateToProps, {getRooms, getRoom}),
    withStyles(styles)
) (Rooms);

