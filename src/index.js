import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getAllRentals } from './features/rentalItems/rentalItemsSlice';
import { silentLogin } from './features/auth/authSlice';

const container = document.getElementById('root');
const root = createRoot(container);
store.dispatch(getAllRentals());
store.dispatch(silentLogin());
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
