import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />
  }
]);

const theme = createTheme({
  palette: {
    secondary: {
      main: '#880e4f',
    },
  },
  typography: {
    fontFamily: 'Onest',
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
