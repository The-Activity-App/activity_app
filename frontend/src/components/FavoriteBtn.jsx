import { useState } from react;

export default function FavoriteBtn({incrementFavorites}) {
    const [ favorites, setFavorites ] = useState(0);

    const handleClick = () => {
        incrementFavorites();
        setFavorites(favorites+1);
    }
    
    return <>
      <div>
        <button onClick={ handleClick }><3</button>
        <p>Favorites: {favorites}</p>
      </div>
    </>;
  }
