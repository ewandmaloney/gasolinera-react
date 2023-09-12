import React from "react";
import { useNavigate } from "react-router-dom";
import Efectivo from "../assets/img/money.png";
import Tarjeta from "../assets/img/credit-card.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const MethodPayment = () => {
  const methodPayments = [
    {
      name: "Efectivo",
      img: Efectivo,
    },
    {
      name: "Tarjeta de credito",
      img: Tarjeta,
    },
  ];

  const navigate = useNavigate();

  const backToProduct = () => {
    navigate("/product");
  };

  const saveMethodPayment = (metodoPago) => {
    localStorage.setItem("metodoPago", metodoPago);
    navigate("/quantity");
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Typography component="div" variant="h4" textAlign="center">
        Selecciona tu método de pago
      </Typography>
      <Grid container spacing={4} marginTop="10px" marginBottom="10px">
        {methodPayments.map((method, index) => (
          <Grid
            item
            key={index}
            xs={6}
            onClick={() => saveMethodPayment(method.name)}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                ":hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "5px 10px 18px #888888",
                },
              }}
            >
              <CardContent>
                <Typography container="div" variant="h5" textAlign="center">
                  {method.name}
                </Typography>
              </CardContent>
              <CardContent>
                <img src={method.img} alt="payment-image" width="100px" />
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
        onClick={backToProduct}
      >
        Go back
      </Button>
    </Box>
  );
};

export default MethodPayment;
