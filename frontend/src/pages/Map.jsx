
export default function MapPage() {
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?parameters`
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
    const URL = "";

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