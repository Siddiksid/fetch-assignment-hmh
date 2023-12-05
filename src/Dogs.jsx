"use client";
import React, { useEffect, useState } from "react";

function Dogs() {
  const [dogs, setDogs] = useState([]);
  const fetchDogs = async () => {
    const response = await fetch(`https://dog.ceo/api/breeds/image/random/10`);
    if (!response.ok) {
      alert("Data fetching failed");
    }
    const result = await response.json();
    setDogs(result?.message);
  };
  useEffect(() => {
    fetchDogs();
  }, []);

  return (
    <div>
      <h2>Dogs</h2>
      <p>
        Here's an API to fetch 10 random dog images:{" "}
        <a
          href="https://dog.ceo/api/breeds/image/random/10"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://dog.ceo/api/breeds/image/random/10
        </a>
      </p>
      <div className="dogs-container">
        {dogs.map((dog, index) => {
          return <img key={index} src={dog} alt="dog-img" />;
        })}
      </div>
    </div>
  );
}

export default Dogs;
