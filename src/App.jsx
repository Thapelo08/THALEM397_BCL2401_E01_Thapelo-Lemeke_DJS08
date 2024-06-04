import React from "react";
import ReactDom from "react-dom/cllient";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./src/Home"
import About from "./src/About"
import Vans from "./src/Vans"
import VanDetail from "./src/vanDetail"

import "./server"

function App() {
    return (
        <BrowserRouter>
        <header>
            <Link className="site-logo" to="/">#vanLife</Link>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
            </nav>
        </header>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vans/:id" element={<VanDetail />} />
        </Routes>
        </BrowserRouter>
    )
}

ReactDom 
.createRoot(document.getElementById('root'))
.render(<App />);



