import { navigate } from "@reach/router";
import React, { useState } from "react";


export const Home = () => {
  const [numeral, setNumeral] = useState(-1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isNaN(numeral) || numeral < 0 || numeral >= 4000) {
      alert(`Invalid input: ${numeral}`);
    } else {
      navigate(`/romannumeral?query=${numeral}`);
    }
  };

  return (
    <div>
      <h1>Hello, Welcome to the greatest App</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Enter Number:
            <input
              type="text"
              name="query"
              onChange={(event) => setNumeral(event.target.value)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};
