import React, { useEffect, useState } from "react";
import WineListItem from "../components/WineListItem";

function WineList() {
  const [wines, setWines] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/wine")
      .then((response) => response.json())
      .then((data) => setWines(data));
  }, []);

  console.log(wines);

  return (
    <div>
      <h2>Mes vins</h2>
      {wines.map((item) => (
        <WineListItem key={item._id} item={item} />
      ))}
    </div>
  );
}

export default WineList;
