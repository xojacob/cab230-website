import { useState } from "react";
import "../App.css";
import { searchMovies } from "./api";
import Movie from "./Movie";
import SearchBar from "./SearchBar";

function App() {
  const [searchTitle, setSearchTitle] = useState("");
  const [searchYear, setSearchYear] = useState("");
  const [searchPeople, setSearchPeople] = useState("");
  const [searchID, setSearchID] = useState("");
  return (
    <div className="w-full">
      <div className="top-0">
        <h1 className="font-poppins">Movie List</h1>
        <SearchBar
          className=""
          title={setSearchTitle}
          year={setSearchYear}
          movieid={setSearchID}
        />
      </div>
      <div>
        <Movie
          titleSearch={searchTitle}
          yearSearch={searchYear}
          idSearch={searchID}
        />
      </div>
    </div>
  );
}

export default App;
