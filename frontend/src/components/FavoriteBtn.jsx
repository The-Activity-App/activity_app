import { useState } from 'react';
import { Button } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';


export default function FavoriteBtn({incrementFavorites}) {
  const [ favorites, setFavorites ] = useState(0);
  // const incrementFavorites = () => setFavorites(favorites+1);

    const handleClick = () => {
        // incrementFavorites();
        setFavorites(favorites + 1);
    }
    
    return <>
      <div>
        <Button onClick={ handleClick }>
          <FavoriteBorderOutlinedIcon fontSize="large"/>
        </Button>
        <p>Favorites: {favorites}</p>
      </div>
    </>;
  }
