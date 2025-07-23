import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // keep this if you want custom styles
import App from './App';
import reportWebVitals from './reportWebVitals';

// ✅ Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
