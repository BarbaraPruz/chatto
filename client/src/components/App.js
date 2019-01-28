import React from 'react';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';

import NavBar from 'components/NavBar';

export default ( { children }) => {
    return ( 
        <MuiThemeProvider>
            <CssBaseline />
            <NavBar />
            { children }
        </MuiThemeProvider>
    );
}

