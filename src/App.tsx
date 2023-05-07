import React from 'react';
import './App.css';
import AppRoutes from './routes/AppRoutes';
import { ThemeProvider } from '@mui/material';
import defaultTheme from './config/theme/defaultTheme';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
