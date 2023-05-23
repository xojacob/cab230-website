import React from "react";
import { searchMovies } from "./api";
import MovieDetails from "./MovieDetails";
function Movie(props) {
  const { loading, headlines, error } = searchMovies(
    props.titleSearch,
    props.yearSearch,
    props.idSearch
  );
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="md:max-w-5xl sm:max-w-3xl mx-auto xs:max-w-md w-full">
      <div className="flex-row flex flex-wrap justify-center">
        {headlines.map((headline) => (
          <MovieDetails key={headline.title} {...headline} />
        ))}
      </div>
    </div>
  );
}

export default Movie;
