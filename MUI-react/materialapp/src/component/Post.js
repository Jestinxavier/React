import React from 'react'
import {
    Stack,
    Box,
    Card,
    CardHeader,
    Avatar,
    IconButton,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Collapse,
    Checkbox,
  } from "@mui/material";
  import {
    GroupsSharp,
    ShareIcon,
    MoreVertIcon,
    FavoriteIcon,
    Home,
    LayersSharp,
    LocalOffer,
    ModeNight,
    PeopleAlt,
    Security,
    Settings,
    Store,
    Visibility,
    ExpandMore,
    More,
    Favorite,
    Share,
    FavoriteBorder,
  } from "@mui/icons-material";
function Post() {
  return (
    <div>
            <Card sx={{margin:"5px"}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red",   }} aria-label="recipe">
              R
            </Avatar>
          }
          
          action={
            <IconButton aria-label="settings">
              <More />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://images.unsplash.com/photo-1657664058691-2633847111c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw3MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
          <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  )
}

export default Post