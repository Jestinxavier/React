import React from "react";
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
import Post from "./Post";

function Feed() {
  return (
    <Box bgcolor="lightgray" flex={4} p={2}>
      <Post />
      <Post />
      <Post />
    </Box>
  );
}

export default Feed;
