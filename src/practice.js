const getGeoLocBtn = document.getElementById("geolo-fetch-btn");
const searchNearbyBtn = document.getElementById("nearby-search-btn");
const url = "https://local-business-data.p.rapidapi.com/search?query=";

const url2 =
  "https://local-business-data.p.rapidapi.com/search?query=Hotels%20in%20San%20Francisco%2C%20USA&limit=20&lat=37.359428&lng=-121.925337&zoom=13&language=en&region=us";

getGeoLocBtn.addEventListener("click", function () {
  console.log("clicked 2");
  const space = "%20";
  const stripSpaces = (str) => {
    const regex = /\s/g;
    return str.replace(regex, space);
  };
  console.log(stripSpaces("hotels in new york"));
});

searchNearbyBtn.addEventListener("click", async () => {
  console.log("clicked");
  const url =
    "https://local-business-data.p.rapidapi.com/search?query=Hotels%20in%20San%20Francisco%2C%20USA&limit=20&lat=37.359428&lng=-121.925337&zoom=13&language=en&region=us";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "20a7962978msh45ffdf645ba0ac3p147a18jsn4fe68244c04b",
      "X-RapidAPI-Host": "local-business-data.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result.data);
  } catch (error) {
    console.error(error);
  }
});
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
  // console.log("strings", stripSpaces("no strings attached mama"));
  // console.log("no strings", stripSpaces());

  //this function retrieves the users current location
  function getCurrLo(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const coords = lat + ", " + long;
    console.log("superFunction result: ", coords);
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
superFunction("hello maam");
