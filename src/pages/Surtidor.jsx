import React from "react";
import { useNavigate } from "react-router-dom";
import CarImage from "../assets/img/car.png";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const Surtidor = () => {
  const surtidores = [
    { id: 1, name: "surtidor 1" },
    { id: 2, name: "surtidor 2" },
    { id: 3, name: "surtidor 3" },
    { id: 4, name: "surtidor 4" },
    { id: 5, name: "surtidor 5" },
    { id: 6, name: "surtidor 6" },
  ];

  return (
    <Box sx={{ width: "100%", height: 600, marginTop: "10px" }}>
      <Typography component="div" variant="h4" textAlign="center">
        Selecciona el surtidor
      </Typography>
      <Stack spacing={4} direction={"column"} marginTop="10px">
        <Stack
          spacing={2}
          direction={"row"}
          display="flex"
          justifyContent="space-around"
        >
          <Card
            sx={{
              width: 300,
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="div" variant="h5" textAlign="center">
              Surtidor 1
            </Typography>
            <CardContent>
              <img src={CarImage} alt="image" width="150px" />
            </CardContent>
          </Card>
          <Card
            sx={{
              width: 300,
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="div" variant="h5" textAlign="center">
              Surtidor 2
            </Typography>
            <CardContent>
              <img src={CarImage} alt="image" width="150px" />
            </CardContent>
          </Card>
        </Stack>
        <Stack
          spacing={2}
          direction={"row"}
          display="flex"
          justifyContent="space-around"
        >
          <Card
            sx={{
              width: 300,
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="div" variant="h5" textAlign="center">
              Surtidor 3
            </Typography>
            <CardContent>
              <img src={CarImage} alt="image" width="150px" />
            </CardContent>
          </Card>
          <Card
            sx={{
              width: 300,
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="div" variant="h5" textAlign="center">
              Surtidor 4
            </Typography>
            <CardContent>
              <img src={CarImage} alt="image" width="150px" />
            </CardContent>
          </Card>
        </Stack>
        <Stack
          spacing={2}
          direction={"row"}
          display="flex"
          justifyContent="space-around"
        >
          <Card
            sx={{
              width: 300,
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="div" variant="h5" textAlign="center">
              Surtidor 5
            </Typography>
            <CardContent>
              <img src={CarImage} alt="image" width="150px" />
            </CardContent>
          </Card>
          <Card
            sx={{
              width: 300,
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="div" variant="h5" textAlign="center">
              Surtidor 6
            </Typography>
            <CardContent>
              <img src={CarImage} alt="image" width="150px" />
            </CardContent>
          </Card>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Surtidor;
