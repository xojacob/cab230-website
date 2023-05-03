import React, { useState } from "react";
import styles from "./style";

function SearchBar(search) {
  const [titleSearch, setTitleSearch] = useState("");
  const [yearSearch, setYearSearch] = useState("");
  const [peopleSearch, setPeopleSearch] = useState("");
  const [idSearch, setIdSearch] = useState("");
  return (
    <div className="container py-2 flex justify-center">
      <div className="flex flex-col justify-between ">
        <input
          name="title"
          type="search"
          id="title"
          aria-labelledby="search-button"
          className="rounded-md max-w-[200px] px-auto py-1 pl-2 caret-violet-500 placeholder-gray-500 font-sans border-violet-900 border-2 w-64"
          value={titleSearch}
          onChange={(e) => setTitleSearch(e.target.value)}
          placeholder="Search Titles"
        />
        <input
          name="people"
          type="search"
          id="people"
          aria-labelledby="search-button"
          className="rounded-md max-w-[200px] px-auto py-1 pl-2 caret-violet-500 placeholder-gray-500 font-sans border-violet-900 border-2 w-64"
          value={peopleSearch}
          onChange={(e) => setPeopleSearch(e.target.value)}
          placeholder="Search People"
        />
      </div>
      <div className="flex flex-col">
        <input
          name="year"
          type="search"
          id="year"
          aria-labelledby="search-button"
          className="rounded-md max-w-[200px] px-auto mx-3 py-1 pl-2 caret-violet-500 placeholder-gray-500 border-violet-900 border-2 w-24 "
          value={yearSearch}
          onChange={(e) => setYearSearch(e.target.value)}
          placeholder="Year"
        />
        <input
          name="movieid"
          type="search"
          id="movieid"
          aria-labelledby="search-button"
          className="rounded-md max-w-[200px] px-auto mx-3 py-1 pl-2 caret-violet-500 placeholder-gray-500 border-violet-900 border-2 w-24 "
          value={idSearch}
          onChange={(e) => setIdSearch(e.target.value)}
          placeholder="ID"
        />
      </div>

      <button
        id="search-button"
        type="button"
        className={`${styles.searchButtonGradient}bg-violet-700`}
        onClick={() => {
          search.title(titleSearch);
          search.year(yearSearch);
          search.movieid(idSearch);
        }}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
