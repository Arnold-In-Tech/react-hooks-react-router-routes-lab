import React from "react";
import { actors } from "../data";

function Actors() {
  return (
  <div>
    {/*{code here}*/}
    <h1>Actors Page</h1>
    {actors.map((item, index)=>(
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
  </div>
  );
}

export default Actors;
