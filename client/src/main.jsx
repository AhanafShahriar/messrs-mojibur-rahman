import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { configureStore } from '@reduxjs/toolkit'
import globalReducer from "State";
import { Provider } from 'react-redux';
import { GridLoadingOverlay } from '@mui/x-data-grid';
import { BrowserRouter } from 'react-router-dom';

const store = configureStore({
  reducer: {
    global: globalReducer,
  },

})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
