import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const nav = useNavigate();

  // Changed
  const handleInput = (e) => {
    props.setName(e.target.value);
  };

  // Enter Pressed
  const handleEnter = (e) => {
    if (e.code === "Enter") isEmpty();
  };

  // Input is empty
  const isEmpty = () => {
    if (!props.name) alert("Please enter a valid name.");
    else nav("/search");
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={props.name}
          onChange={handleInput}
          onKeyDown={handleEnter}
        />
      </div>
      <div>
        <button className="btn-name" onClick={isEmpty}>
          Enter a name
        </button>
      </div>
    </div>
  );
};

export default Home;
