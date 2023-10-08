
export default function MapPage() {
    const URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?`;
    const KEY = `AIzaSyBqq373De1wMrBfSwzdeRv23WPtMV4B0T4`;
    
    const urlConstructor =  () => {
        const searchNearby = () => {
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(storePosition);
            } else {
                console.log("Geolocation is not supported by this browser.");
            }

            const storePosition = (position) => {
                const lat = position.coords.latitude;
                const long = position.coords.longitude;
                console.log("Current Position:", lat, long);
            }
        }  
        searchNearby();
        console.log( URL + `${lat},${long}&radius=2000` + KEY);
    };
    //fetch function template
    const fetch = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json;
            return data;
        } catch(error) {
            console.log(error);
            return null;
        }
    };

    //current location helper function
    const searchNearby = () => {
        const successCallbackLong = (position) => {
            console.log(position)
            console.log(position.coords.longitude + "," + position.coords.latitude );
        };
        
        const errorCallback = (error) => {
           console.log(error);
        };
          
        navigator.geolocation.getCurrentPosition(successCallbackLong, errorCallback);
    }    
    
    
    
    //url which api requests will be sent to 
    // const URL = "";

    //url constructor including user input
    const URL_CONSTRUCTOR = "";

    //fetch helper function
    const fetchData = async (url) => {};
    return <>
      <div>
        <button onClick={ handleClick }>Fetch</button>
        <p>Results: </p>
      </div>
    </>;
  }