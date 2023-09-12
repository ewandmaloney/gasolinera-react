import React from "react";
import { useNavigate } from "react-router-dom";
import CarImage from "../assets/img/car.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

const Surtidor = () => {
  const navigate = useNavigate();

  const clickSurtidor = (id) => {
    localStorage.setItem("surtidor", id);
    navigate("/product");
  };

  const surtidores = [
    { id: 1, name: "surtidor 1" },
    { id: 2, name: "surtidor 2" },
    { id: 3, name: "surtidor 3" },
    { id: 4, name: "surtidor 4" },
    { id: 5, name: "surtidor 5" },
    { id: 6, name: "surtidor 6" },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        marginTop: "10px",
        marginBottom: "40px",
      }}
    >
      <Typography component="div" variant="h4" textAlign="center">
        Selecciona el surtidor
      </Typography>
      <Grid container spacing={2} marginTop="10px">
        {surtidores.map((surtidor) => (
          <Grid
            item
            xs={6}
            key={surtidor.id}
            gap={8}
            onClick={() => clickSurtidor(surtidor.id)}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                borderRadius: "10px",
                boxShadow: "0px 4px 10px -3px rgb(117 117 177);",
                "&:hover": {
                  background: "linear-gradient(to right, #0f3443, #34e69f)",
                  transform: "translateY(-5px)",
                  color: "white",
                  boxShadow: "5px 10px 18px #888888",
                },
              }}
            >
              <Typography
                component="div"
                variant="h5"
                textTransform="capitalize"
              >
                {surtidor.name}
              </Typography>
              <CardContent>
                <img src={CarImage} alt="Click image" width="100px" />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Surtidor;
