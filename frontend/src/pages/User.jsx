import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { getUser } from "../adapters/user-adapter";
import { logUserOut } from "../adapters/auth-adapter";
import { listAllFavorites, removeFavorite } from "../adapters/favorites-adapter";
import UpdateUsernameForm from "../components/UpdateUsernameForm";
import { Card, CardContent, Button, CardActionArea, Typography } from '@mui/material';
import { grey, deepPurple } from '@mui/material/colors';
import Place from "../components/PlaceComp";

// const theme = createTheme({
  //   palette: {
    //     primary: grey,
    //     secondary: deepPurple[800],
    //   },
    // });
    const primary = grey[900];
    const secondary = deepPurple['700'];
    
    export default function UserPage() {
      const navigate = useNavigate();
      const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
      const [userProfile, setUserProfile] = useState(null);
      const [errorText, setErrorText] = useState(null);
      const [favorites, showFavorites] = useState([]);
      const { id } = useParams();
      const isCurrentUserProfile = currentUser && currentUser.id === Number(id);
      
      useEffect(() => {
        const loadUser = async () => {
          const [user, error] = await getUser(id);
          if (error) return setErrorText(error.statusText);
          setUserProfile(user);
        };
        
        loadUser();
      }, [id]);
      
      useEffect(()=>{
        listAllFavorites(id).then(showFavorites);
      }, []);


      const handleLogout = async () => {
        logUserOut();
    setCurrentUser(null);
    navigate('/');
  };

  if (!userProfile && !errorText) return null;
  if (errorText) return <p>{errorText}</p>;

  // What parts of state would change if we altered our currentUser context?
  // Ideally, this would update if we mutated it
  // But we also have to consider that we may NOT be on the current users page
  const profileUsername = isCurrentUserProfile ? currentUser.username : userProfile.username;
  

  return <>
  <div className="wrapper" style={{
    textAlign:'center',
  }}>


    <div className="greeting-div">
      <h1>Hey {profileUsername}!</h1>
      <h2>Here are your favorites</h2>
    </div>
    <div className="favorite-holder" style={{
      backgroundColor:'#d9d9d9',
      display:'flex',
      justifyContent:'center'
    }}>
      {
        favorites.map((favorite) =>{
          return <Place 
          key={favorite.favorite_id}
          name={favorite.name}
          price_level={favorite.price_level}
          city={favorite.city}
          state={favorite.state}
          website={favorite.website}
          rating={favorite.rating}
          number={favorite.number}
          photo_url={favorite.photo_url}
          />  
        })
      }
    </div>
  </div>
    { !!isCurrentUserProfile && <button onClick={handleLogout}>Log Out</button> }

    {
      !!isCurrentUserProfile
        && <UpdateUsernameForm currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    }
  </>;
}
