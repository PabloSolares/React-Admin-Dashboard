import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import { ContextProvider} from './contexts/ContextProvider'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
