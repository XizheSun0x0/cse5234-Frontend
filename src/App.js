/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import React, { useState, useEffect } from "react"; // for connection with backend
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Purchase from "./components/purchase";
import PaymentEntry from "./components/paymentEntry";
import ShippingEntry from "./components/shippingEntry";
import ViewOrder from "./components/viewOrder";
import ViewConfirmation from "./components/viewConfirmation";

import SampleFooter from "./components/footer";
import Home from "./components/home";
import About from "./components/about";
import Cart from "./components/cart";
import Support from "./components/support";
import background from "./components/images/rm347-porpla-02-a-01.jpg";

function App() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    // Fetch the data from the Flask backend
    fetch("/home")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  const myStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "50%",
    backgroundRepeat: "repeat",
  };

  return (
    <div className="App" style={myStyle}>
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/support" element={<Support />} />
            <Route path="/cart" element={<Cart />} />

            <Route path="/purchase" element={<Purchase />} />
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/paymentEntry" element={<PaymentEntry />} />
            <Route path="/shippingEntry" element={<ShippingEntry />} />
            <Route path="/viewOrder" element={<ViewOrder />} />
            <Route path="/viewConfirmation" element={<ViewConfirmation />} />
          </Routes>
        </div>
        <SampleFooter />
      </Router>
    </div>
  );
}

export default App;
