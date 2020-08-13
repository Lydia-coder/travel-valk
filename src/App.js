import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import ScrollDealsDetails from "./components/ScrollDealsDetails";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <hr />

        <Route exact path="/" component={Home} />

        <Route exact path="/:id/details" component={ScrollDealsDetails} />
      </div>
    </Router>
  );
}

export default App;
