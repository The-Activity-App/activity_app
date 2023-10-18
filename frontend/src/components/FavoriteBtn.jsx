import { useState } from 'react';
import { Button } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';


export default function FavoriteBtn() {
  const [ favorited, setFavorited ] = useState(false);
  // const incrementFavorites = () => setFavorites(favorites+1);

    // const handleClick = () => {
    //     // incrementFavorites();
    //     setFavorites(favorites + 1);
    // }

    const handleFavorite = () => {
      //when the button is clicked (place is intended to be added to users' favorites collection)
      if(!favorited){
        setFavorited(favorited)
    }
  }
    return <>
      <div>
        <Button onClick={ handleFavorite }>
          <FavoriteBorderOutlinedIcon fontSize="large"/>
        </Button>
      </div>
    </>;
  }
