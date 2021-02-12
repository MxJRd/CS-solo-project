import React, { useContext } from 'react';

import HomePageRenderer from '../components/HomePageRenderer';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { PageContext } from '../contexts/PageContext'


const theme = createMuiTheme({
  typography: {
    "fontFamily": ['Roboto', 'Source Code Pro', 'sans-serif'].join(','),
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 700,
    "spacing": '8px'
  }
});

const App = () => {
  const { dataStructure, setDataStructure } = useContext(PageContext);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div id="app">
        <h1>{dataStructure}</h1>
        <HomePageRenderer theme={theme} />
      </div>
    </ThemeProvider>
  )
};

export default App;