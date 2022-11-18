import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  json,
} from "react-router-dom";
import { useState } from "react";

import "./App.css";

import Home from "./components/Home";
import Search from "./components/Search";
import WishList from "./components/WishList";

const state = {
  items: [],
};

const bookFunc = async function () {
  const res = await fetch("https://www.googleapis.com/auth/books");
  const data = await res.json();
};

bookFunc();

function App() {
  const [name, setName] = useState("");
  return (
    <Router>
      <div>
        <nav>
          <ul className="navbar">
            <li>
              <Link className="components" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="components" to="/search">
                Search
              </Link>
            </li>
            <li>
              <Link className="components" to="/wishlist">
                Wish List
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/search" element={<Search name={name} />}></Route>
          <Route path="/wishlist" element={<WishList />}></Route>
          <Route
            path="/"
            element={<Home name={name} setName={setName} />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
