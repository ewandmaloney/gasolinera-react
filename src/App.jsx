import { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Container } from "@mui/material";
import Surtidor from "./pages/Surtidor";
import Product from "./pages/Product";
import MethodPayment from "./pages/MethodPayment";
import Quantity from "./pages/Quantity";
import Resume from "./pages/Resume";

function App() {
  return (
    <BrowserRouter>
      <div className="app-box">
        <Navbar />
        <Container maxWidth="sm">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/surtidor" element={<Surtidor />} />
            <Route path="/product" element={<Product />} />
            <Route path="/method-payment" element={<MethodPayment />} />
            <Route path="/quantity" element={<Quantity />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
