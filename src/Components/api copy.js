import { useEffect, useState } from "react";

export function searchMovies(movieTitle, movieYear, movieID) {
  const [loading, setLoading] = useState(true);
  const [headlines, setHeadlines] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    getMovieByQuery(movieTitle, movieYear, movieID)
      .then((headlines) => {
        setHeadlines(headlines);
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieTitle, movieYear]);
  return {
    loading,
    headlines,
    error: null,
  };
}

function getMovieByQuery(t, y, ID) {
  movieURL = () => {
    return fetch(
      `http://sefdb02.qut.edu.au:3000/movies/search?title=${t}&year=${y}&`
    )
      .then((res) => res.json())

      .then((res) => res.data)
      .then((data) =>
        data.map((data) => ({
          title: data.title,
          year: data.year,
          imdbID: data.imdbID,
        }))
      );
  };
  idURL = () => {
    return fetch(`http://sefdb02.qut.edu.au:3000/movies/data/${ID}`)
      .then((res) => res.json())

      .then((res) => res.data)
      .then((data) =>
        data.map(() => ({
          title: title,
          year: year,
        }))
      );
  };
  ID = null ? movieURL() : idURL();
}
