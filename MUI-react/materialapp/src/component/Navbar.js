import React, { useState } from "react";
import {
  Stack,
  Badge,
  AppBar,
  Toolbar,
  styled,
  Typography,
  InputBase,
  Avatar,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import { Mail, Notifications, Pets } from "@mui/icons-material";
const StyleToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0px 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItem: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]:{
    display:"none",
  }
}));
const Icons = styled("div")(({ theme }) => ({
  // backgroundColor: "black",
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const Navbar=()=> {
  const [open, setOpen] = useState(false)
  return (
    <AppBar bgcolor="lightblue" position="sticky">
      <StyleToolbar>
        <Typography sx={{ display: { xs: "none", sm: "block" } }}>
          {" "}
          navbar
        </Typography>
        <Pets sx={{ display: { sx: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            alt="Cindy Baker"
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            onClick={e=>setOpen(true)}
          />
        </Icons>
        <UserBox onClick={e=>setOpen(true)}>
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            alt="Cindy Baker"
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          />
          <Typography>Jestin Xavier</Typography>
        </UserBox>
      </StyleToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
