import React from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import NavBar from 'components/NavBar';

const theme = createMuiTheme({
    palette: {
      primary: { main: '#6083C4'}, 
      secondary: { main: '#CCDB4A'},
      alternateTextColor: { main: '#007849'}
    },
    typography: { useNextVariants: true },
});

export default ( { children }) => {
    return ( 
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <NavBar />
            { children }
        </MuiThemeProvider>
    );
}

