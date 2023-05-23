import { useEffect, useState } from "react";

export function searchMovies(movieTitle, movieYear, movieID) {
  const [loading, setLoading] = useState(true);
  const [headlines, setHeadlines] = useState([]);
  const [error, setError] = useState(null);
  function movieURL() {
    useEffect(() => {
      getMovieByQuery(movieTitle, movieYear)
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
  }
  function idURL() {
    useEffect(() => {
      getMovieByID(movieID)
        .then((headlines) => {
          setHeadlines(headlines);
        })
        .catch((e) => {
          setError(e);
        })
        .finally(() => {
          setLoading(false);
        });
    }, [movieID, null]);
  }
  function thing() {
    movieID == "" ? movieURL() : idURL();
  }
  thing();
  return {
    loading,
    headlines,
    error: null,
  };
}

function getMovieByQuery(t, y) {
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
        imdbRating: data.imdbRating,
        classification: data.classification,
      }))
    );
}

function getMovieByID(ID) {
  return fetch(`http://sefdb02.qut.edu.au:3000/movies/data/${ID}`)
    .then((res) => res.json())
    .then((res) =>
      [res].map((res) => ({
        title: res.title,
        year: res.year,
        imdbID: ID,
        imdbRating: data.imdbRating,
        classification: data.classification,
      }))
    );
}

function getPersonByID(ID, bearerToken) {
  //console.log("bearer token in API.js " + bearerToken);
  return fetch(`http://sefdb02.qut.edu.au:3000/people/${ID}`, {
    headers: {
      Authorization: "Bearer " + bearerToken,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      //console.log(data);
      return data;
    })

    .then((data) => {
      if (data.message == "Authorization header ('Bearer token') not found") {
        alert("You must be logged in to search people");
      } else if (data.message != undefined) {
        alert(data.message);
      }
      return data;
    });
}
export function searchPeople(ID, bearerToken) {
  const [loading, setLoading] = useState(true);
  const [personDetails, setPersonDetails] = useState([]);
  const [error, setError] = useState(null);

  const fetchPersonDetails = async () => {
    try {
      const data = await getPersonByID(ID, bearerToken);
      setPersonDetails(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPersonDetails();
  }, [ID]);

  return { personDetails, loading, error };
}
