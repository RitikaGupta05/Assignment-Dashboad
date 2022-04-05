import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
// import App from './app.js';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes';

export default function App() {
  return (
    <Router>
    <Routes />
  </Router>
  );
}



