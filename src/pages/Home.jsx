import React from "react";
import { useNavigate } from "react-router-dom";
import ImageClick from "../assets/img/cursor.png";
import ImageClient from "../assets/img/button.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const Home = () => {
  const navigate = useNavigate();

  const nextPage = () => {
    navigate("/surtidor");
  };
  return (
    <Box sx={{ width: "100%", height: 600 }}>
      <Stack spacing={2} direction={"column"} marginTop="70px">
        <Card
          onClick={nextPage}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            borderRadius: "10",
            boxShadow: "base",
            background: "linear-gradient(to right, #0f3443, #34e69f)",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: "5px 10px 18px #888888"
            }
          }}
        >
          <Typography component="div" variant="h3" color="white">
            Empezar
          </Typography>
          <CardContent>
            <img src={ImageClick} alt="Click image" width="150px" />
          </CardContent>
        </Card>
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            borderRadius: "10",
            boxShadow: "base",
            background: "linear-gradient(to right, red, black)",
          }}
        >
          <Typography component="div" variant="h3" color="white">
            Acceso cliente
          </Typography>
          <CardContent>
            <img src={ImageClient} alt="Click image" width="150px" />
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
};

export default Home;
