import React from "react";
import ReactDom from "react-dom/cllient";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./Home";
import About from "./About";
import Vans from "./Vans";
import VanDetail from "./VanDetail";
import Dashboard from "./Hosts/Dashboard";
import Income from "./Hosts/Income";
import Reviews from "./Hosts/Reviews";
import HostVans from "./Hosts/HostVans";
import HostVanDetail from "./Hosts/HostVanDetail";
import HostVanInfo from "./Hosts/HostVanInfo";
import HostVanPricing from "./Hosts/HostVanPricing";
import HostVanPhotos from "./Hosts/HostVanPhotos";
import Layout from "./Components/layout";
import HostLayout from "./Components/HostLayout";

import "./server"

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetail />} />
            
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetail />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }
  

ReactDom 
.createRoot(document.getElementById('root'))
.render(<App />);



