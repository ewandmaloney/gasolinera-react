import { useNavigate } from "react-router-dom";
import Confeti from "../assets/img/confeti.png";
import CarImage from "../assets/img/car.png";
import TipoGasoil from "../assets/img/gasoil.png";
import MetodoPago from "../assets/img/money-pig.png";
import ImageCapital from "../assets/img/capital.png";
import ImageDrop from "../assets/img/drop.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Resume = () => {
  const navigate = useNavigate();

  const backToHome = () => {
    localStorage.clear();
    
    navigate("/home");
  };

  const surtidor = localStorage.getItem("surtidor");
  const metodoPago = localStorage.getItem("metodoPago");
  const precioGasoil = localStorage.getItem("precioGasoil");
  const quantity = localStorage.getItem("quantity");
  const tipoGasoil = localStorage.getItem("tipoGasoil");

  const totalCost = precioGasoil * quantity;

  const resumen = [
    {
      title: "Surtidor",
      result: surtidor,
      img: CarImage,
    },
    {
      title: "Tipo de producto",
      result: tipoGasoil,
      img: TipoGasoil,
    },
    {
      title: "Metodo de pago",
      result: metodoPago,
      img: MetodoPago,
    },
    {
      title: "Cantidad",
      result: `${quantity} Litros`,
      img: ImageDrop,
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Typography component="div" variant="h4" textAlign="center">
        ¡Puedes suministrarte!
      </Typography>
      <Grid container>
        <Grid item margin="0 auto">
          <img src={Confeti} alt="confeti" width="100px" />
        </Grid>
      </Grid>
      <Typography component="div" variant="h5" textAlign="center">
        Resumen del pedido:
      </Typography>
      <Grid container spacing={4} marginTop="5px" marginBottom="10px">
        {resumen.map((res, index) => (
          <Grid item key={index} xs={6}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: "0px 4px 10px -3px rgb(117 117 177);",
                ":hover": {
                  boxShadow: "5px 10px 18px #888888",
                },
              }}
            >
              <Typography variant="h6" component="div">
                {res.title}
              </Typography>
              <Typography variant="h5" component="div">
                {res.result}
              </Typography>
              <CardContent>
                <img src={res.img} alt="Image resume" width="100px" />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid container marginBottom="10px">
        <Grid item xs={12}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: "0px 4px 10px -3px rgb(117 117 177);",
              ":hover": {
                boxShadow: "5px 10px 18px #888888",
              },
            }}
          >
            <Typography variant="h6" component="div">
              Precio total a pagar
            </Typography>
            <Typography variant="h5" component="div">
              {Number(totalCost).toFixed(2)} €
            </Typography>
            <CardContent>
              <img src={ImageCapital} alt="Image capital" width="100px" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Button
        sx={{
          marginBottom: "20px",
          ":hover": {
            backgroundColor: "#198754",
            color: "white",
          },
        }}
        variant="outlined"
        color="success"
        startIcon={<ArrowBackIcon></ArrowBackIcon>}
        onClick={backToHome}
      >
        Volver a inicio
      </Button>
    </Box>
  );
};

export default Resume;
