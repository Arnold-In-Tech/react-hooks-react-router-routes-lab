import React from "react";
import { movies } from "../data";

function Movies() {
  return (
  <div>
    {/*{code here}*/}
    <h1>Movies Page</h1>
    {movies.map((item, index)=>(
      <div key={index}>
        <h2><strong>Name: {item.title}</strong></h2>
        <p>Time: {item.time}</p>
        <p>Genres:</p>
        <ul>
          {item.genres.map((genre, index)=>(
            <li key={index}>{genre}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>);
}

export default Movies;
