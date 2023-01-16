import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import StickyNotes from './components/stickyNotes';


const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <StickyNotes />
  </React.StrictMode>
);

