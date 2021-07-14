import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Content from "./Content";
import Header from "./Header";

import "./style.css";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <hr />
        <Content />
      </Router>
    </div>
  );
};

export default App;
