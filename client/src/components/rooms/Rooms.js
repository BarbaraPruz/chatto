import React, {Component} from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';

import styles from 'components/Style'
import requireAuth from 'components/requireAuth';
import { getRooms, getRoom } from 'actions/rooms';
import RoomCard from 'components/rooms/RoomCard';

class Rooms extends Component {
   
    componentDidMount() {
        console.log("Rooms component did mount")
        this.props.getRooms();
    }

    handleClick = (event) => { 
        let roomId = event.currentTarget.id;
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
                            <RoomCard classes={classes} room={room} handleClick={this.handleClick} />
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
