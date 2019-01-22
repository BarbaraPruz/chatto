import React, {Component} from 'react';
import { connect } from 'react-redux';

import { addMessage } from 'actions/rooms';

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
        this.props.addMessage(this.state);         
        this.setState({content: ''})                      
    }
    
    render() {
        return (
            <div className="message-form">
                <form onSubmit={ event => this.handleSubmit(event) }>
                    <input type="text" name="content" onChange={ event => this.handleChange(event) } value={this.state.content} />
                    <button type="submit" >Send</button>
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
export default connect(mapStateToProps,{addMessage})(MessageForm);
