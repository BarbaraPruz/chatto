import Image from 'images/green-381334_640.png'; 

const styles = theme => ({
  main: {
    marginTop: theme.spacing.unit * 10, // account for fixed navbar
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3, 
  },
  splashMain: {
    minHeight: '100%',
    minWidth: '1024px',
    width: '100%',
   // height: 'auto',
    position: 'fixed',
   // top: 0,
   // left: 0,
    backgroundImage: `url(${Image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain', //'cover',  
  },
  appTitle: {
    flex: 1,
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  textPane: {   
    alignItems: 'left',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,    
  },
  messageForm: {
      display: 'flex',
      flexDirection: 'row',
  },
   messageFormField: {
    width: '90%'
  },
  messageSend: {
    height: '60%',
    marginTop: 'auto',
    marginLeft: `${theme.spacing.unit}px`
  },
  loginForm: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,

    width: '40%'
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },

  // for cards
  card: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
 
export default styles