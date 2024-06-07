import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "../src/Home";
import About from "../src/About";
import Vans from "../src/Vans/Vans";
import VanDetail from "../src/Vans/VanDetail";
import Login from "../"
import Dashboard from "../src/Hosts/Dashboard";
import Income from "../src/Hosts/Income";
import Reviews from "../src/Hosts/Reviews";
import HostVans from "../src/Hosts/HostVans";
import HostVanDetail from "../src/Hosts/HostVanDetail";
import HostVanInfo from "../src/Hosts/HostVanInfo";
import HostVanPricing from "../src/Hosts/HostVanPricing";
import HostVanPhotos from "../src/Hosts/HostVanPhotos";
import NotFound from "../src/NotFound";
import Layout from "./Components/layout";
import HostLayout from "./Components/HostLayout";
import AuthRequired from "./Components/AuthRequired";

import "./server";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route
            path="login"
            element={<Login />}
          />

          <Route element={<AuthRequired />}>
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

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

 export default App