import './bootstrap';
import '../css/app.css'

// React Element
import React from "react";
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter, Routes, } from "react-router-dom";

// Pages
import Header from "./Page/Components/Header";
import Home from "./Page/Home";
import About from "./Page/About";

// Routes
const App = ReactDOM.createRoot(document.getElementById("app"));
App.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'about'} element={<About />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
