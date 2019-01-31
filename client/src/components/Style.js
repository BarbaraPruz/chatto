import Image from 'images/green-381334_640.png'; 

const styles = theme => ({
  main: {
    marginTop: theme.spacing.unit * 10, // account for fixed navbar
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3, 
  },
  splashMain: {    
    width: '100%',
    height: '100%',
    position: 'fixed',
    backgroundImage: `url(${Image}) `,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    display:'flex',
    justifyContent:'center',  
  },
  appTitle: {
    flex: 1,
    color: '#e1eaae', //'#B4C939'
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    width: '40%',
    height: '100%',
    justifyContent: 'center'
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