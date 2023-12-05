"use client";
import React, { useEffect, useState } from "react";

function Rick() {
  const [character, setCharacter] = useState("");
  const [searchName, setSearchName] = useState("rick");
  const fetchRick = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${searchName}`
    );
    if (!response.ok) {
      alert("Data fetching failed");
    }
    const result = await response.json();
    setCharacter(result.results[0]);
  };
  useEffect(() => {
    fetchRick();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    fetchRick();
  }

  return (
    <div>
      <h2>Rick and Morty</h2>
      <p>
        Here's a Rick and morty api :{" "}
        <a
          href="http://https://rickandmortyapi.com/api/character"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://rickandmortyapi.com/api/character/?name=morty
        </a>
      </p>
      <p>
        You have to change name "morty" to the charcter you wanna search for e.g
        ("morty","summer","jerry","pickle","bird","squanchy")
      </p>
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={(e) => setSearchName(e.target.value)} />
        <input type="submit" onClick={handleSubmit} value="search" />
      </form>
      <div className="rick-container">
        <h2>{character.name}</h2>
        <img
          style={{ height: "150px", width: "150px" }}
          src={character.image}
          alt={character.name}
        />
      </div>
    </div>
  );
}

export default Rick;
