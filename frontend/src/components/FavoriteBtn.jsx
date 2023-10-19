import { useState } from 'react';
import { Button } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { addFavorite, removeFavorite } from "../adapters/favorites-adapter";


export default function FavoriteBtn({           
  biz_id,
  name,
  address,
  city,
  state,
  type,
  photo,
  working_hours,
  number,
  price_level2,
  photo_url,
  website,
  rating,
  user_id }) {
  const [ favorite, setFavorite ] = useState([]);
    const handleFavorite = () => {
      //when the button is clicked (place is intended to be added to users' favorites collection)
  }
  // useEffect(()=>{
  //   addFavorite(biz_id,
  //     name,
  //     address,
  //     city,
  //     state,
  //     type,
  //     working_hours,
  //     number,
  //     price_level,
  //     photo_url,
  //     website,
  //     rating,
  //     user_id,).then(setFavorite);
  // }, []);
    return <>
      <div>
        <Button onClick={()=>{ 
          if(!favorite){
            console.log('fav added')
          } else return console.log('already favorite')
          }}>
          <FavoriteBorderOutlinedIcon fontSize="large"/>
        </Button>
      </div>
    </>;
  }
