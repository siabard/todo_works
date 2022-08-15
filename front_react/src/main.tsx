import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import { store } from '@/app/store';
import { Provider } from 'react-redux';
import Home from '@/features/home/Home';
import Counter from '@/features/counter/Counter';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
