import React from "react";
import ReactDom from "react-dom/cllient";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./src/Home";
import About from "./src/About";
import Vans from "./src/Vans";
import VanDetail from "./src/vanDetail";
import Dashboard from "./Hosts/Dashboard";
import Income from "./Hosts/Income";
import Reviews from "./Hosts/Reviews";
import Layout from "./Components/layout";
import HostLayout from "./Components/HostLayout";

import "./server"

export default function App() {
    return (
        <BrowserRouter>
        <Routes>
           <Route element={<Layout/>}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path=" vans/:id" element={<VanDetail />} />

            <Route path="host" element={<HostLayout />}>
              <Route path="dashboard" element={<Dashboard />} />
               <Route path="income" element={<Income/>} />
               <Route path="reviews" element={<Reviews />} />
            </Route>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}

ReactDom 
.createRoot(document.getElementById('root'))
.render(<App />);



