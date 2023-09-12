import React from "react";
import { useNavigate } from "react-router-dom";
import Gasolina from "../assets/img/gasoil.png";
import Gasoleo from "../assets/img/diesel.png";
import Biodiesel from "../assets/img/adblue.png";
import DieselPlus from "../assets/img/diesel-plus.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Product = () => {
  const navigate = useNavigate();

  const productos = [
    { id: 1, name: "Gasolina SP 95", price: 1.65, img: Gasolina },
    { id: 2, name: "Gasóleo A", price: 1.55, img: Gasoleo },
    { id: 3, name: "Biodiesel A", price: 1.42, img: Biodiesel },
    { id: 4, name: "Diesel Plus", price: 1.99, img: DieselPlus },
  ];

  const saveProducto = (tipoGasoil, precioGasoil) => {
    localStorage.setItem("tipoGasoil", tipoGasoil);
    localStorage.setItem("precioGasoil", precioGasoil);
    navigate("/method-payment");
  };

  const returnToSurtidor = () => {
    navigate('/surtidor');
  };

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
        Selecciona el producto
      </Typography>
      <Grid container spacing={4} marginTop="10px" marginBottom="10px">
        {productos.map((producto) => (
          <Grid item key={producto.id} xs={6}>
            <Card
              onClick={() => saveProducto(producto.name, producto.price)}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                ":hover": {
                  transform: "translateY(-5px)",
                  color: "white",
                  boxShadow: "5px 10px 18px #888888",
                  background: "linear-gradient(to right, #FFE134, #FFBF2E)",
                },
              }}
            >
              <CardContent>
                <Typography container="div" variant="h5">
                  {producto.name}
                </Typography>
              </CardContent>
              <CardContent
                sx={{
                  width: "80%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography container="div" variant="h6">
                  Precio actual
                </Typography>
                <Typography container="div" variant="h5">
                  {producto.price}€
                </Typography>
              </CardContent>
              <CardContent>
                <img src={producto.img} alt="imagen-producto" width="100px" />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button
        sx={{
          ":hover": {
            backgroundColor: "#198754",
            color: "white",
          },
        }}
        variant="outlined"
        color="success"
        startIcon={<ArrowBackIcon></ArrowBackIcon>}
        onClick={returnToSurtidor}
      >
        Go back
      </Button>
    </Box>
  );
};

export default Product;
