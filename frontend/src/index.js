import React from 'react';
import App from './App';
import './index.css'
import { createRoot } from 'react-dom/client'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
     </React.StrictMode>,
)

