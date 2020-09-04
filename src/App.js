import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage/HomePage";
import Products from "./pages/Product/Product";
import Services from "./pages/Service/Service";
import Footer from "./components/Footer";
import ScrollToTop from './components/ScrollToTop'
function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products} />
        <Route path="/services" exact component={Services} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
