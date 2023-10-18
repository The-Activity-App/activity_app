/* eslint-disable func-style */
import { useState, useEffect } from "react";
import Place from "../components/PlaceComp";
import { CardMedia, Button } from '@mui/material';

import "../index.css";
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';

export default function SearchPage() {
  const [position, setPosition] = useState({ lat: 0, lng: 0 });
  const [userInput, setSearch] = useState("famous things to do");
  const [data, setData] = useState([]);
  const url = `https://local-business-data.p.rapidapi.com/search?query=${userInput}&limit=5&lat=${position.lat}&lng=${position.lng}&zoom=13&language=en&region=us";`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "20a7962978msh45ffdf645ba0ac3p147a18jsn4fe68244c04b",
      "X-RapidAPI-Host": "local-business-data.p.rapidapi.com",
    },
  };

  useEffect(() => {
    
  const handlePhoto = () =>{
    if(photo){
      return <img src={photo}/>
    }
  };
    // fetch helper function
    async function fetchData() {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result.data);
        setPhoto(result.data[0].photos_sample[0].photo_url);
        // console.log(result.data)
        // console.log('this is a business photo',result.data[0].photos_sample[0].photo_url)
        return result;
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [position, userInput, url]);


  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((p) => {
        setPosition({
          lat: p.coords.latitude,
          lng: p.coords.longitude,
        });
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, [navigator.geolocation]);
  const handleSearchLocation = async (e) => {
    e.preventDefault();
    setSearch(e.target.userSearch.value);
    // setLocation('');
  };

  return (
    <>
        <div style={{
          textAlign:'center',
        }}>
          <form onSubmit={handleSearchLocation} style={{
            backgroundColor:'#efefef',
            borderRadius:10,
            width:400,
            display:'flex',
            justifyContent:'space-around',
            marginTop:10,
            alignContent:'center'
          }}>
            <LocationSearchingIcon fontSize="medium" style={{
              marginTop:10,
              marginRight:4
            }}/>
            <input type="text" name="userSearch" id="input" placeholder="Where to?" style={{
              width:350,
              height:37,
              fontSize:17,
              borderColor:'#351c75',
              borderRadius:4,
              marginRight:4

            }}/>
            <Button variant="outlined" type="submit" style={{
              height:40,
              borderColor:'#351c75',
              color:'#351c75',
              marginTop:1

            }} >Search</Button>
          </form>
          <h1>Results: </h1>
          <div style={{
            display:'flex',
            justifyContent:'center'
          }}>

            <ul>
              {data.map((result) => (
                <Place
                  key={result.business_id}
                  name={result.name}
                  city={result.city}
                  state={result.state}
                  ratings={result.rating}
                  type={result.type}
                  photo={result.photos_sample[0].photo_url}
                />
              ))}
            </ul>
          </div>
        </div>
    </>
  );
}
// const dataObj = {
//   businessId: result.data[i].business_id,
//   address: result.data[i].address,
//   name: result.data[i].name,
//   rating: result.data[i].rating,
//   website: result.data[i].website
// }
// console.log(dataObj)

// async function loopThruResults(){
//   let dataArr = [];

//   for(let i = 0; i <= result.data.length -1; i++){
//
//     dataArr.push(dataObj)

//   }
//   console.log("its a freshly generated data array",dataArr);
//   return dataArr;
// };
// loopThruResults();
