import React from 'react' ;
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { HeaderBar } from './components/headerBar/HeaderBar' ;
import './App.css' ;

function App() {
  // To be able to switch from dark to light theme depending of user preference
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          // mode: prefersDarkMode ? 'dark' : 'light',
          mode: 'dark'
        }
      }),
    [],
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <header>
          <HeaderBar></HeaderBar>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
