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
    <Box sx={{ flexGrow: 1, backgroundColor: "black",height:'931px' }} className="horizontal">
      <Typography
        variant="h3"
        sx={{
          color: "white",
          backgroundColor: "black",
          // height: 50,
          marginLeft: "60px",
          marginBottom: "10px",
          padding: "20px",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        Algostack
      </Typography>

      <Grid
        container
        spacing={2}
        sx={{ marginLeft: "60px" }}
        style={{ container }}
      >
        <Grid item xs={12} md={2} sx={{ color: "white", textAlign: "left" }}>

          <Typography variant="body1" sx={{padding:'5px',margin:'5px'}}> 
             <NavLink to="/home" style={{color:"#fff", textDecoration:"none"}} >  A:seestrasse 21</NavLink>
          </Typography>
          <Typography variant="body1" sx={{padding:'5px',margin:'5px'}}> 
             <NavLink to="/home" style={{color:"#fff", textDecoration:"none"}} >  E:qi@example.com</NavLink>
          </Typography>
          <Typography variant="body1" sx={{padding:'5px',margin:'5px'}}>
              <NavLink to="/home" style={{color:"#fff", textDecoration:"none"}} >  T:00123 45 67 89</NavLink>
          </Typography>
        </Grid>
        <Grid item xs={12} md={2} sx={{ color: "white", textAlign: "left" }}>
          <Typography variant="subtitle2" sx={{padding:'5px',margin:'5px'}}>
              <NavLink to="/home" style={{color:"#fff", textDecoration:"none"}} > MAIN HOME</NavLink>
          </Typography>
          <Typography variant="subtitle2" sx={{padding:'5px',margin:'5px'}}>
              <NavLink to="/home" style={{color:"#fff", textDecoration:"none"}} >  CONTACT</NavLink>
          </Typography>
          <Typography variant="subtitle2" sx={{padding:'5px',margin:'5px'}}>
              <NavLink to="/home" style={{color:"#fff", textDecoration:"none"}} >  PORTFOLID</NavLink>
          </Typography>
          <Typography variant="subtitle2" sx={{padding:'5px',margin:'5px'}}>
              <NavLink to="/home" style={{color:"#fff", textDecoration:"none"}} >  SHOP</NavLink>
          </Typography>
          <Typography variant="subtitle2" sx={{padding:'5px',margin:'5px'}}>
              <NavLink to="/home" style={{color:"#fff", textDecoration:"none"}} >  LANDING</NavLink>
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
          sx={{ color: "white", typography: "body1", textAlign: "left" }}
        >
          <Typography variant="subtitle2" sx={{padding:'5px',margin:'5px'}}>
            <NavLink to="/home" style={{color:"#fff", textDecoration:"none"}} >  ABOUT US</NavLink>
          
          </Typography>
          <Typography variant="subtitle2" sx={{padding:'5px',margin:'5px'}}>
             <NavLink to="/home" style={{color:"#fff", textDecoration:"none"}} >  ABOUT ME</NavLink>
          </Typography>
          <Typography variant="subtitle2" sx={{padding:'5px',margin:'5px'}}>
             <NavLink to="/home" style={{color:"#fff", textDecoration:"none"}} >  OUR PROCESS</NavLink>
          </Typography>
          <Typography variant="subtitle2" sx={{padding:'5px',margin:'5px'}}>
             <NavLink to="/home" style={{color:"#fff", textDecoration:"none"}} >  OUR TEAM</NavLink>
          </Typography>
          <Typography variant="subtitle2" sx={{padding:'5px',margin:'5px'}}>
             <NavLink to="/home" style={{color:"#fff", textDecoration:"none"}} >  PRICINGPLANS</NavLink>
          </Typography>
        </Grid>
        <Grid item xs={8} sm={12} md={4} sx={{ color: "white" }}>
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
          <Box sx={hoverSub} style={{mt:5,marginLeft:'50px'}}>Subscribe</Box>
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
          marginLeft: "4%",
          marginTop:'10%'
        }}
      >
        © 2022 Qode Interactive, All Rights Reserved
      </Typography>
    </Box>
  );
}
