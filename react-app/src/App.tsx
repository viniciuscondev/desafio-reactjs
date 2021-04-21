import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Home from './pages/Home';
import Profile from './pages/Profile';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    }
    html, body {
    min-height: 100vh;
    }
    input, select, textarea, button, ul, li {
      font-family:inherit;
    }
`;

const theme = {
  colors: {
    primary: '#3B4252',
    whiteText:' #ECEFF4',
    background: '#FAFAFA',
  },
};

function App() {
  return (
    <BrowserRouter>      
      <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Switch>        
          <Route 
            exact
            path="/"
            component={Home}
          />
          <Route 
            exact
            path="/profile"
            component={Profile}
          />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
