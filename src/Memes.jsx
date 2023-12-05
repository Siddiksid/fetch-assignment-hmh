"use client";
import React, { useEffect, useState } from "react";

function Memes() {
  const [memes, setMemes] = useState([]);
  const fetchMemes = async () => {
    const response = await fetch(`https://api.imgflip.com/get_memes`);
    if (!response.ok) {
      alert(`Data fetching failed`);
    }
    const result = await response.json();
    setMemes(result?.data?.memes);
  };
  useEffect(() => {
    fetchMemes();
  }, []);

  return (
    <div>
      <h2>Memes</h2>
      <p>
        Here's an API to fetch random memes:
        <a href="https://api.imgflip.com/get_memes" target="_blank">
          https://api.imgflip.com/get_memes
        </a>
      </p>
      <div className="memes-container">
        {memes.map((meme) => {
          return <img key={meme.id} src={meme.url} alt={meme.name} />;
        })}
      </div>
    </div>
  );
}

export default Memes;
