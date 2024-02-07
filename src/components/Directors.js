import React from "react";
import { directors } from "../data";

function Directors() {
  return (
  <div>
    {/*{code here}*/}
    <h1>Directors Page</h1>
    {directors.map((item, index)=>(
      <div key={index}>
        <h2><strong>Name: {item.name}</strong></h2>
        <p>Movies:</p>
        <ul>
          {item.movies.map((mov, index)=>(
            <li key={index}>{mov}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>);
}

export default Directors;
