import { useState, useEffect } from "react";
// import knex from "../../../src/db/knex";

export default function MapPage() {
  //   "https://local-business-data.p.rapidapi.com/search?query=Hotels%20in%20San%20Francisco%2C%20USA&limit=20&lat=37.359428&lng=-121.925337&zoom=13&language=en&region=us";
  const [position, setPosition] = useState({ lat: 0, lng: 0 });
  const [location, setLocation] = useState("things to do");

  useEffect(() => {
    async function fetchData() {
      const url = `https://local-business-data.p.rapidapi.com/search?query=${location}&limit=20&lat=${position.lat}&lng=${position.lng}&zoom=13&language=en&region=us";`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "20a7962978msh45ffdf645ba0ac3p147a18jsn4fe68244c04b",
          "X-RapidAPI-Host": "local-business-data.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        console.log(result.data);
        // const storingData = await knex.raw(`
        // `,[])
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [position, location]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, [navigator.geolocation]);

  const handleSearchLocation = async (e) => {
    e.preventDefault();
    setLocation(e.target.userSearch.value);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSearchLocation}>
          <input type="text" name="userSearch" />
          <button type="submit">Search</button>
        </form>
        <div>
          <h3>Results: </h3>
        </div>
      </div>
    </>
  );
}
