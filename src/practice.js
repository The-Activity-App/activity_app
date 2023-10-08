const getGeoLocBtn = document.getElementById("geolo-fetch-btn");
const searchNearbyBtn = document.getElementById("nearby-search-btn");

function initMap() {
  function getCurrLo(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    console.log("INIT Current Position:", lat, long);
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getCurrLo);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}
initMap();

// const { LatLngBounds } = await google.maps.importLibrary("core");
// console.log("hi", { LatLngBounds });

////////////////
const searchNearby = (position) => {
  const URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=restaurant&`;
  const KEY = `AIzaSyBqq373De1wMrBfSwzdeRv23WPtMV4B0T4`;
  // const keyword = "restaurant";

  const storePosition = (position) => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    console.log("Current Position:", lat, long);
    console.log(URL + `${lat},${long}&radius=2000&type=restaurant&key=` + KEY);
    console.log(KEY);
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(storePosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
};
searchNearby();
