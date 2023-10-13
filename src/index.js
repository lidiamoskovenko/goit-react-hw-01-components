import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/Apps/App';
import './index.css';
import { AppStats } from 'components/Apps/AppStats';
import { AppFriends } from 'components/Apps/AppFriends';
import { AppBank } from 'components/Apps/AppBank';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
ReactDOM.createRoot(document.getElementById('rootStats')).render(
  <React.StrictMode>
    <AppStats />
  </React.StrictMode>
);
ReactDOM.createRoot(document.getElementById('rootFriends')).render(
  <React.StrictMode>
    <AppFriends />
  </React.StrictMode>
);
ReactDOM.createRoot(document.getElementById('rootBank')).render(
  <React.StrictMode>
    <AppBank />
  </React.StrictMode>
);
