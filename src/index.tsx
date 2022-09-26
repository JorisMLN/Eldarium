import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "./store";
import Capsule from './layout/capsule/Capsule';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Capsule />} />
            {/* <Route path="/" element={< />} /> */}
          </Routes>
        </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
