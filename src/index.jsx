import React from "react";
import ReactDom from "react-dom/cllient";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"

import "./server"

function App() {
    return (
        <BrowserRouter>
        <header>
            <link className="site-logo" to="/">#vanLife</link>
            <nav>
                <link to="/about">About</link>
                <link to="/vans">Vans</link>
            </nav>
        </header>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
        </Routes>
        </BrowserRouter>
    )
}

