import React, { useEffect, useState } from "react";
import { searchPeople } from "./api";
import RelatedMovieDetails from "./RelatedMovieDetails";
function Person(props) {
  const [personName, setPersonName] = useState("");
  const [personAge, setPersonAge] = useState("");
  const [headlines, setHeadlines] = useState([]);

  const { personDetails, loading, error } = searchPeople(
    props.personSearch,
    props.token
  );

  useEffect(() => {
    if (props.personSearch !== "" && personDetails.roles) {
      //console.log("I'm running!");
      //console.log(personDetails.roles);
      setHeadlines(personDetails.roles);
    }
  }, [personDetails, props.personSearch]);

  //console.log("charater played: " + headlines.characters);
  return (
    <div className="md:max-w-5xl sm:max-w-3xl mx-auto xs:max-w-md w-full text-left ">
      <div className="pl-5">
        <div className="font-poppins text-2xl flex items-center">
          <h2 className="font-bold w-[150px]">Name: </h2>
          <p className="text-3xl">{personDetails.name}</p>
        </div>
        <div className="font-poppins text-2xl flex items-center">
          <h2 className="font-bold pr-4 w-[150px]">Birth Year:</h2>
          <p className="tex-3xl">{personDetails.birthYear}</p>
        </div>
      </div>
      <div className="font-poppins text-3xl font-bold text-center">
        Related Movies
      </div>
      <div className="flex-row flex flex-wrap justify-center">
        {headlines.map((headlines) => (
          <RelatedMovieDetails key={headlines.movieName} {...headlines} />
        ))}
      </div>
    </div>
  );
}

export default Person;
