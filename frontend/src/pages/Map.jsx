import { useRef,useState, useEffect } from "react";
import maplibregl from 'maplibre-gl';
import Map from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import '../index.css';
// import knex from "../../../src/db/knex";

export default function MapPage() {
  const [position, setPosition] = useState({ lat: 0, lng: 0 });
  const [location, setLocation] = useState("things to do");
  const [data, showData] = useState({businessId:'', name:'', address:'', rating:'', website:'' })

  useEffect(() => {
    async function fetchData() {
      const url = `https://local-business-data.p.rapidapi.com/search?query=${location}&limit=3&lat=${position.lat}&lng=${position.lng}&zoom=13&language=en&region=us";`;

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
        console.log(result.data);
        const { businessId, name, address, rating, website} = result;
        showData({businessId, name, address, rating, website})
        // console.log(result.data[0].business_id);
        return result.data[0];
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
  //Map Setup
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng] = useState(139.753);
    const [lat] = useState(35.6844);
    const [zoom] = useState(10);
    const tomTomKey = useState('KuVFsbh7VE7HN2eMHgGEc0nKZFtqbSxL');
    const [API_KEY] = useState('IzLYXoPh4GSSWEsCG4IL');


    useEffect(() => {
      if (map.current) return; // stops map from intializing more than once
    
      map.current = new maplibregl.Map({
        container: mapContainer.current,
        style: "https://api.tomtom.com/style/2/custom/style/dG9tdG9tQEBASmtqcVQwMG94V3dpdG9XYjtlZmUzOTUzOC05NTkzLTRhNjktYjVkNy1hNmNhOWFhN2NhZmQ=.json?key=KuVFsbh7VE7HN2eMHgGEc0nKZFtqbSxL",
        center: [lng, lat],
        zoom: zoom
      });
    
    }, [tomTomKey, lng, lat, zoom]);


  return (
    <>
      <div>
        <form onSubmit={handleSearchLocation}>
          <input type="text" name="userSearch" />
          <button type="submit">Search</button>
        </form>
        <div>
          <h3>Results: </h3>
          <p>{data.name}</p>
        </div>
      </div>
      <div className="map-wrap">
        <div ref={mapContainer} className="map" />
      </div>
      {/* <Map
            initialViewState={{
                longitude: -122.4,
                latitude: 37.8,
                zoom: 14
            }}
            style={{width: 600, height: 400}}
            mapStyle="https://api.tomtom.com/style/2/custom/style/dG9tdG9tQEBASmtqcVQwMG94V3dpdG9XYjtlZmUzOTUzOC05NTkzLTRhNjktYjVkNy1hNmNhOWFhN2NhZmQ=.json?key=KuVFsbh7VE7HN2eMHgGEc0nKZFtqbSxL"
            /> */}
    </>
  );
}
