import React, {Component} from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import withStyles from '@material-ui/core/styles/withStyles'

import { addMessage } from 'actions/rooms';
import styles from 'components/Style'

class MessageForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: '', 
            user_id: this.props.userId, 
            room_id: this.props.roomId
        }      
    }

    handleChange = (event) => {
        this.setState({
            content: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Message form submit",this.state);
        this.props.addMessage(this.state);         
        this.setState({content: ''})                      
    }
    
    render() {
        const { classes } = this.props; 
        return (
            <div className={classes.main}>
                <form onSubmit={ event => this.handleSubmit(event) } >
                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="content">New Message</InputLabel>
                        <Input onChange={ event => this.handleChange(event) } value={this.state.content} id="content" name="content" autoFocus />
                    </FormControl>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={styles.submit}
                        >
                        Send
                    </Button>
                </form>
            </div>            
 
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
