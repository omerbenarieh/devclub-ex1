import React from "react";
import { useState } from "react";

let arr = [];

const Search = (props) => {
  return (
    <div>
      <div>{props.name ? `Welcome ${props.name} !` : ""}</div>
      <div>
        <input type="text" />
      </div>
      <div className="container">Result Container</div>
    </div>
  );
};

export default Search;
