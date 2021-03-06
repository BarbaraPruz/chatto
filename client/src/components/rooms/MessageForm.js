import React, {Component} from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import withStyles from '@material-ui/core/styles/withStyles'
import Paper from '@material-ui/core/Paper';

import { addMessage } from 'actions/rooms';
import styles from 'components/Style'

class MessageForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: '', 
        }      
    }

    handleChange = (event) => {
        this.setState({
            content: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addMessage({userId: this.props.userId, 
                               roomId: this.props.roomId, 
                               content: this.state.content});         
        this.setState({content: ''})                      
    }
    
    render() {
        const { classes } = this.props;
        const paperClasses = `${classes.paper}, ${classes.textPane}`;

        return (
            <Paper className={paperClasses}>
                <form onSubmit={ event => this.handleSubmit(event)} className={classes.messageForm} >
                    <FormControl margin="normal" className={classes.messageFormField}>
                        <InputLabel htmlFor="content">New Message</InputLabel>
                        <Input onChange={ event => this.handleChange(event) } value={this.state.content} id="content" name="content" autoFocus />
                    </FormControl>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.messageSend}
                        >
                        Send
                    </Button>
                </form>
            </Paper>            
 
        );
    }
};

const mapStateToProps = state => {
    return {
      userId: state.user.userId
    }
}

export default compose (
    connect(mapStateToProps, {addMessage}),
    withStyles(styles)
) (MessageForm);
