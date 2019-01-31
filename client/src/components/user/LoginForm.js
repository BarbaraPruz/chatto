import React, {Component} from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles'
import Paper from '@material-ui/core/Paper';

import { loginUser } from 'actions/user';
import styles from 'components/Style'

class LoginForm extends Component {

    state = {
        email: '',
        password: '',
    }

    componentDidMount()  {   
        if (this.props.auth) {  // already logged in           
            this.props.history.push('/rooms');  
        }
    }

    handleChange = (event) => this.setState({
        [event.target.name]: event.target.value
    });

    handleLogin = (event) => {
        event.preventDefault();
        this.props.loginUser(this.state, () => {
           this.props.history.push('/rooms');         
       });                      
    }
    
    render() {
        const { classes } = this.props; 
        const mainClasses=`${classes.main}, ${classes.splashMain}`;
        return (
            <main className={mainClasses}>
                <Typography component="h1" variant="h5">
                    Let's Talk!
                </Typography>
                <form onSubmit={ event => this.handleLogin(event) } className={classes.loginForm}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">Email Address</InputLabel>
                        <Input onChange={ event => this.handleChange(event) } id="email" name="email" autoComplete="email" autoFocus />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input onChange={ event => this.handleChange(event) } name="password" type="password" id="password" autoComplete="current-password" />
                    </FormControl>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={styles.submit}
                        >
                        Sign in
                    </Button>
                </form>
            </main>
        )
    }
};

const mapStateToProps = state => {
    return {
        auth: state.user.authenticated
    }
}    

export default compose (
    connect(mapStateToProps, {loginUser}),
    withStyles(styles)
) (LoginForm);

/* 
                <Paper className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Let's Talk!
                </Typography>
                <form onSubmit={ event => this.handleLogin(event) } className={classes.loginForm}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">Email Address</InputLabel>
                        <Input onChange={ event => this.handleChange(event) } id="email" name="email" autoComplete="email" autoFocus />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input onChange={ event => this.handleChange(event) } name="password" type="password" id="password" autoComplete="current-password" />
                    </FormControl>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={styles.submit}
                        >
                        Sign in
                    </Button>
                </form>
                </Paper>*/