import React from "react";
import shop from "../assets/img/shop.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const returnHomeButton = () => {
    navigate("/");
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: 150,
        display: "flex",
        justifyContent: "center",
        marginX: "auto",
        marginY: 0,
        flexDirection: "column",
      }}
    >
      <img
        src={shop}
        className="shop-image"
        alt="shop image"
        onClick={returnHomeButton}
      />
      <Typography variant="h6" className="shop-name">
        Gasolinera Maloney
      </Typography>
      <hr color="grey" width="100%" />
    </Box>
  );
};

export default Navbar;
