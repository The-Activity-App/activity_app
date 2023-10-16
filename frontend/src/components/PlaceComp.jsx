import * as React from 'react';
import { Card, CardContent, CardActions, CardActionArea, Typography } from '@mui/material';
import FavoriteBtn from "../components/FavoriteBtn";

export default function Place(){
    return(
        <>
            <Card variant='outlined'>
                <CardContent>
                    <Typography>Name</Typography>
                    <Typography>City, State</Typography>
                    <Typography>Ratings</Typography>                    
                </CardContent>
                <CardActionArea>
                    <FavoriteBtn />
                </CardActionArea>
            </Card>

        </>
    )
}