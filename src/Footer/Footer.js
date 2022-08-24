import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { TextField, Typography } from "@mui/material";
import "./Footer.css";
import { NavLink } from "react-router-dom";
// import {NavLink} from 'react-router-dom'

export default function Footer() {
  const container = {
    margin: "0",
    width: "100%",
  };
  const hoverSub = {
    "&:hover": {
      // background:"#fff",
      color: "#fff",
    },
  };
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "black" }} className="horizontal">
      <Typography
        variant="h3"
        sx={{
          color: "white",
          backgroundColor: "black",
          height: 50,
          marginLeft: "60px",
          marginBottom: "10px",
          padding: "20px",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        DEON
      </Typography>

      <Grid
        container
        spacing={2}
        sx={{ marginLeft: "60px" }}
        style={{ container }}
      >
        <Grid item xs={12} md={2} sx={{ color: "white", textAlign: "left" }}>
          <NavLink to="/home" style={{color:"#fff", textDecoration:"none"}} >  A:seestrasse 21</NavLink>
          <NavLink to="/about" style={{color:"#fff", textDecoration:"none"}} >  A:seestrasse 21</NavLink>
          {/* <NavLink>hsdfbghdbjh</NavLink> */}
          {/* <Link className='link'> A:seestrasse 21</Link> */}

          <Typography variant="body1"> T:00123 45 67 89</Typography>
          <Typography variant="body1"> E:qi@example.com</Typography>
          <Typography variant="body1">T:00123 45 67 89</Typography>
        </Grid>
        <Grid item xs={12} md={2} sx={{ color: "white", textAlign: "left" }}>
          <Typography variant="subtitle2">MAIN HOME</Typography>
          <Typography variant="subtitle2">CONTACT</Typography>
          <Typography variant="subtitle2">PORTFOLID</Typography>
          <Typography variant="subtitle2">SHOP</Typography>
          <Typography variant="subtitle2">LANDING</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
          sx={{ color: "white", typography: "body1", textAlign: "left" }}
        >
          <Typography variant="subtitle2">ABOUT US</Typography>
          <Typography variant="subtitle2">ABOUT ME</Typography>
          <Typography variant="subtitle2">OUR PROCESS</Typography>
          <Typography variant="subtitle2">OUR TEAM</Typography>
          <Typography variant="subtitle2">PRICINGPLANS</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4} sx={{ color: "white" }}>
          <Typography variant="h5">OUR NEWSLETTER </Typography>

          <TextField
            sx={{
              "& .MuiFormLabel-root": {
                  color: '#fff'
              },
              "& .MuiFormLabel-root.Mui-focused": {
                  color: '#fff',},

              // backgroundColor: "#ccc",
              color: "#999",
              padding: "none",
              borderBottom: "2px solid #fff",
            }}
            id="filled-search"
            label=" Your Email"
            type="email"
            autoFocus
            variant="filled"
          />
          <Typography className='btn btn1' sx={{marginLeft:{md:"8.9rem", sm:"3rem"}, mt:2, color:"#999"}}>
          <Box sx={hoverSub} style={{mt:5,}}>Subscribe</Box>
          </Typography>
        </Grid>
      </Grid>
      <Typography
        sx={{
          color: "gray",
          padding: "20px",
          display: "flex",
          justifyContent: "flex-start",
          height: 100,
          marginLeft: "60px",
        }}
      >
        © 2022 Qode Interactive, All Rights Reserved
      </Typography>
    </Box>
  );
}
