import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthPovider } from './context/Auth-context';
import { BrowserRouter } from "react-router-dom"
import { SearchPovider } from './context/Search-context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <
    BrowserRouter >
    <
    SearchPovider >
    <
    AuthPovider >
    <
    App / >
    <
    /AuthPovider> < /SearchPovider > < /
    BrowserRouter >
);