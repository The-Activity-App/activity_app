import { useRef,useState, useEffect } from "react";
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

export default function Map(){
    //Map Setup
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng] = useState(-73.9016704);
    const [lat] = useState(40.6552576);
    const [zoom] = useState(10);
    // const tomTomKey = useState('KuVFsbh7VE7HN2eMHgGEc0nKZFtqbSxL');
    // const [API_KEY] = useState('IzLYXoPh4GSSWEsCG4IL');

    useEffect(() => {
        if (map.current) return; // stops map from intializing more than once
  
        map.current = new maplibregl.Map({
          container: mapContainer.current,
          style: "https://api.tomtom.com/style/2/custom/style/dG9tdG9tQEBASmtqcVQwMG94V3dpdG9XYjtlZmUzOTUzOC05NTkzLTRhNjktYjVkNy1hNmNhOWFhN2NhZmQ=.json?key=KuVFsbh7VE7HN2eMHgGEc0nKZFtqbSxL",
          center: [lng, lat],
          zoom: zoom
        });
  
      }, [ lng, lat, zoom]);

    //marker set up
    let popup = new maplibregl.Popup();

    return (
        <>
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
    )
}