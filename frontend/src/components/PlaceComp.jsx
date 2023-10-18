import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
} from "@mui/material";
import FavoriteBtn from "../components/FavoriteBtn";
import { CardMedia } from '@mui/material';

export default function Place({ name, city, type, state, ratings, photo }) {

  return (
    <>
      <Card variant="outlined" style={{
        backgroundColor:'#efefef',
        width:430+'px',
        marginBottom:15+'px'
      }}>
        <CardContent>
          <div className="photo">
            <img src={photo}  style={{
              width:150,
              height:120,
            }}/>        
            </div>
          <Typography style={{
            fontSize:25+'px',
            display:'flex',
            justifyContent:'center',
            textAlign:'center',
            fontWeight:'bold',
          }}>{name}</Typography>
          <Typography>
            {city}, {state}
          </Typography>
          <Typography>Rating: {ratings}</Typography>
          <Typography>{type}</Typography>
        </CardContent>
        <CardActionArea>
          <FavoriteBtn />
        </CardActionArea>
      </Card>
    </>
  );
}
