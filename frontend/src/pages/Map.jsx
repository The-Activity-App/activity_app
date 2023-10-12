import { useState, useEffect } from 'react';

export default function MapPage() {

//RAPID API 
const url = "https://local-business-data.p.rapidapi.com/search?";

const superFunction = async (str) => {
    //this function strips spaces from the user input
    const stripSpaces = (str) => {
      const space = "%20";
      const regex = /\s/g;
      if (!str) {
        return "nothing to see here";
      } else return str.replace(regex, space);
    };
    stripSpaces();
  
    //this function retrieves the users current location
    function getCurrLo(position) {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      const coords = lat + ", " + long;
      console.log("superFunction lo results: ", coords);
    }
  
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCurrLo);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  
    //now form URL des!!!
    console.log(url);
    console.log(str);
  };

    // const [userInput, setUserInput] = useState('');
    // useEffect(() =>{});
  const getApiUrlWithQuery = (query = '', location = '') => {
    const stripSpaces = (query) => {
      const space = "%20";
      const regex = /\s/g;
      if (!query) {
        return "nothing to see here";
      } else return query.replace(regex, space);
    };
    stripSpaces(query);

    function getCurrLo(position) {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      const location = lat + ", " + long;
      console.log("superFunction lo results: ", location);
    }
  
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCurrLo);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
    // console.log(navigator.geolocation.getCurrentPosition())
    // console.log("new attempt", lat, long)
    // return url + `query=${query}` + lat + long ;
  };
getApiUrlWithQuery("hello mrs.davis, how are you?");

//url should be a state value that changes
//have a default place value for the state 

  const [userInput, setUserInput] = useState('');

    return <>
      <div>
        <input type='text' placeholder='Search a Place'>{ userInput }</input>
        <button>Search</button>
        <div>
          <h3>Results: </h3>

        </div>
      </div>
    </>;
  }