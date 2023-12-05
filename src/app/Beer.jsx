"use client";
import React, { useEffect, useState } from "react";

function Beer() {
  const [beer, setBeer] = useState([]);
  const [tableData, settableData] = useState({});
  const [visible, setVisible] = useState("hidden");
  const fetchBeer = async () => {
    const response = await fetch(
      `https://random-data-api.com/api/v2/beers?size=20`
    );
    if (!response.ok) {
      alert("Data fetching failed");
    }
    const result = await response.json();
    setBeer(result);
  };
  function handleChange(e) {
    const name = e.target.value;
    const table = beer.filter((b) => b.name === name);
    settableData(table);
    setVisible("visible");
  }
  useEffect(() => {
    fetchBeer();
  }, []);
  console.log(tableData[0]);
  return (
    <div>
      <h2>Beer</h2>
      <p>
        Here's an API to fetch 20 beers:{" "}
        <a
          href="https://random-data-api.com/api/v2/beers?size=20"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://random-data-api.com/api/v2/beers?size=20
        </a>
      </p>
      <p>Choose your favorite one to see its details.</p>
      <select onChange={handleChange}>
        {beer.map((b) => {
          return (
            <option key={b.uid} value={b.name}>
              {b.name}
            </option>
          );
        })}
      </select>
      <table style={{ visibility: visible }}>
        <thead>
          <tr>
            <th>id</th>
            <th>uid</th>
            <th>brand</th>
            <th>name</th>
            <th>style</th>

            <th>hop</th>
            <th>yeast</th>
            <th>malts</th>
            <th>ibu</th>
            <th>alcohol</th>
            <th>blg</th>
          </tr>
        </thead>
        <tbody>
          {tableData[0] && (
            <tr>
              <td>{tableData[0].id}</td>
              <td>{tableData[0].uid}</td>
              <td>{tableData[0].brand}</td>
              <td>{tableData[0].name}</td>
              <td>{tableData[0].style}</td>
              <td>{tableData[0].hop}</td>
              <td>{tableData[0].yeast}</td>
              <td>{tableData[0].malts}</td>
              <td>{tableData[0].ibu}</td>
              <td>{tableData[0].alcohol}</td>
              <td>{tableData[0].blg}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Beer;
