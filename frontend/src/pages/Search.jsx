import { useState, useEffect } from "react";
// import Place from "../components/PlaceComp";
// import PlaceHolder from "../components/PlaceHolder";
import '../index.css';



export default function SearchPage() {
  const [position, setPosition] = useState({ lat: 0, lng: 0 });
  const [userInput, setSearch] = useState("");
  const [bizData, showData] = useState({businessId:'', name:'', address:'', rating:''});
  const url = `https://local-business-data.p.rapidapi.com/search?query=${userInput}&limit=5&lat=${position.lat}&lng=${position.lng}&zoom=13&language=en&region=us";`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key":
        "20a7962978msh45ffdf645ba0ac3p147a18jsn4fe68244c04b",
      "X-RapidAPI-Host": "local-business-data.p.rapidapi.com",
    },
  };

  useEffect(() => {
    //fetch helper function
    async function fetchData() {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log('showing result', result.data)
        showData(result.data)
        console.log("biz data", bizData)
        return result;
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [position, userInput]);

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
    setSearch(e.target.userSearch.value);
    // setLocation('');
  };
  
  return (
    <>
          <div>
        <form onSubmit={handleSearchLocation}>
          <input type="text" name="userSearch" id="input" />
          <button type="submit">Search</button>
        </form>
        <div>
          <h3>Results: </h3>
          {/* <div>
            <ul>
              {Object.keys(this.props.data).map((propKey) => {
                <li key={propKey}>
                  {this.props.data[propKey]}

                  <ul>            
                    {Object.keys(this.props.data[propKey]).map((childPropKey) => {
                      <li key={childPropKey}>
                        {this.props.data[propKey][childPropKey]}
                      </li>
                    })}
                  </ul>
                </li>
              })}
            </ul>
          </div> */}
        </div>
      </div>
    </>
  );
}


// async function loopThruResults(){
  //   let dataArr = [];
  //   for(let i = 0; i <= result.data.length -1; i++){
      // const dataObj = {
      //   businessId: result.data[i].business_id,
      //   address: result.data[i].address,
      //   name: result.data[i].name,
      //   rating: result.data[i].rating,
      //   website: result.data[i].website
      // }
      // console.log(dataObj)
    //     
    //     dataArr.push(dataObj)
    //   }
    //   console.log("its a freshly generated data array",dataArr);
    //   return dataArr;
    // };
    // loopThruResults();