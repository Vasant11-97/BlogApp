import React from 'react';
import ReactDOM from 'react-dom/client';
import './Style/index.scss';
import App from './App';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Notfound from './Components/Notfound';

import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import SingleArticle from './Components/SingleArticle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/" element={<App />} exact></Route>
      <Route path="/articles/:slug" element={<SingleArticle />}></Route>
      <Route path="*" element={<Notfound />}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
