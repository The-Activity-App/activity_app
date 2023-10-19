import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
} from "@mui/material";
import FavoriteBtn from "../components/FavoriteBtn";
import { CardMedia } from '@mui/material';

export default function Place({           
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

  return (
    <>
      <Card variant="outlined" style={{
        backgroundColor:'#efefef',
        width:430+'px',
        marginBottom:15+'px'
      }}>
        <CardContent>
          <div className="photo">
            <img src={!photo ? "Undefined" : photo}  style={{
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
          <Typography>Rating:{rating}</Typography>
          <Typography>{type}</Typography>
          {
            !price_level2 ? "" : 'Price Level: '+ price_level2
          }
        </CardContent>
        <CardActionArea>
          <FavoriteBtn />
        </CardActionArea>
      </Card>
    </>
  );
}
