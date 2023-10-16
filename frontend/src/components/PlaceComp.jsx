import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
} from "@mui/material";
import FavoriteBtn from "../components/FavoriteBtn";

export default function Place({ name, city, State, ratings }) {
  return (
    <>
      <Card variant="outlined">
        <CardContent>
          <Typography>{name}</Typography>
          <Typography>
            {city}, {State}
          </Typography>
          <Typography>{ratings}</Typography>
        </CardContent>
        <CardActionArea>
          <FavoriteBtn />
        </CardActionArea>
      </Card>
    </>
  );
}
