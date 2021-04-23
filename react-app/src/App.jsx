import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Home from './pages/Home';
import Perfil from './pages/Perfil';

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
    ::-webkit-scrollbar {
      width: 12px;      
    }
    ::-webkit-scrollbar-track {
      background: none;
      margin-top: 3vh;
      margin-bottom: 3vh;
    }    
    ::-webkit-scrollbar-thumb {
      background: #3B4252;
      height: 10px;
      border-radius: 20px;
    }    
    ::-webkit-scrollbar-thumb:hover {
      background: #485164;
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
            path="/perfil"
            component={Perfil}
          />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
