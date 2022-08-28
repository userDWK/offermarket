import React, { useState } from "react";
import BookList from "./components/BookList";
import "./Ui/styles.css";
import { ToasterProvider } from "./Ui/ToasterContext";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BookDetails from "./components/BookDetails";
function App() {
  return (
    <Router>
      <ToasterProvider>
        <div className="App">
          <h1>
            <Link to="/">도서 대출</Link>
          </h1>
          <Routes>
            <Route exact path="/" element={<BookList />} />
            <Route path="book/:id/*" element={<BookDetails />} />
          </Routes>
        </div>
      </ToasterProvider>
    </Router>
  );
}

export default App;
