import React, {Component} from 'react';

import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles'
import Paper from '@material-ui/core/Paper';

import styles from 'components/Style'

class About extends Component {

    render() {
        const { classes } = this.props; 
        const paperClasses = `${classes.paper}, ${classes.textPane}`;

        return (
            <main className={classes.main}>
                <Paper className={paperClasses}>
                    <Typography component="h1" variant="h3">
                        About Chatto
                    </Typography>
                    <Typography paragraph>
                        Chatto is a simple chat app created for fun.  To give it a try, 
                        several user ids are available - lou@domain.com, bud@domain.com.
                        Passwords for these ids is 'test'.
                    </Typography>
                    <Typography paragraph>
                        The motivation to create chatto was a blog article about building 
                        a React chat app using the chatapi.  But instead of using the 
                        chatapi, chatto has a simple Rails backend.
                    </Typography>                
                    <Typography paragraph>
                        As a portfolio project, I wanted to use chatto to gain additional experience
                        with different components.  On the rails backend, chatto uses devise-jwt with
                        blacklist for token revocation.   On the front end, React Material-ui provides
                        the styling, and a React high-order-component verifies access to protected pages
                        <em>Next up for this project - websockets with Rails Action Cable!</em>
                    </Typography>
                </Paper>               
            </main>
        )
    }
};
   
export default withStyles(styles)(About);
