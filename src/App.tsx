import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ArticlePage from "./ArticlePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/articles" element={<ArticlePage />} />
          <Route path="/" element={<h1>Benvenuto nella tua homepage</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
