import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Quantity = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [counter, setCounter] = useState("");

  useEffect(() => {
    localStorage.setItem("quantity", counter);
  }, [counter]);

  const sumCounter = (number) => {
    setCounter(counter + number);
  };

  const deleteCounter = () => {
    setCounter("");
  };

  const goToResume = () => {
    if (counter <= 0) {
      setOpen(true);
      return;
    }
    navigate("/resume");
  };

  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        marginTop: "10px",
        marginBottom: "10px",
      }}
    >
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Error
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Para seguir adelante, introduzca el numero de litros suministrados
            por favor.
          </Typography>
        </Box>
      </Modal>
      ;
      <Typography component="div" variant="h4">
        Pulse importe
      </Typography>
      <Typography component="div" variant="h4">
        {counter > 0 ? <>{counter}L</> : null}
      </Typography>
      <Grid container spacing={2} marginTop="10px">
        {numbers.map((number, i) => (
          <Grid item key={i} xs={4} textAlign="center">
            <Card
              onClick={() => sumCounter(number)}
              sx={{
                cursor: "pointer",
                borderRadius: "10px",
                boxShadow: "0px 4px 10px -3px rgb(117 117 177);",
                background: "#aeb8c3",
                ":hover": {
                  boxShadow: "5px 10px 18px #888888",
                },
              }}
            >
              <CardContent>
                <Typography component="div" variant="h5">
                  {number}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={2} marginTop="10px">
        <Grid item xs={4}>
          <Card
            onClick={() => sumCounter(0)}
            sx={{
              cursor: "pointer",
              borderRadius: "10px",
              boxShadow: "0px 4px 10px -3px rgb(117 117 177);",
              background: "#aeb8c3",
              ":hover": {
                boxShadow: "5px 10px 18px #888888",
              },
            }}
          >
            <CardContent>
              <Typography component="div" variant="h5" textAlign="center">
                0
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={8}>
          <Card
            onClick={deleteCounter}
            sx={{
              cursor: "pointer",
              borderRadius: "10px",
              boxShadow: "0px 4px 10px -3px rgb(117 117 177);",
              background: "#ec5353",
              color: "white",
              "&:hover": {
                boxShadow: "5px 10px 18px #888888",
              },
            }}
          >
            <CardContent>
              <Typography component="div" variant="h5" textAlign="center">
                Borrar
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid
        container
        marginTop="15px"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Button
          onClick={() => navigate("/method-payment")}
          sx={{
            ":hover": {
              backgroundColor: "#198754",
              color: "white",
            },
          }}
          variant="outlined"
          color="success"
          startIcon={<ArrowBackIcon></ArrowBackIcon>}
        >
          Go back
        </Button>

        <Button
          onClick={goToResume}
          sx={{
            ":hover": {
              backgroundColor: "#198754",
              color: "white",
            },
          }}
          variant="outlined"
          color="success"
          endIcon={<ArrowForwardIcon></ArrowForwardIcon>}
        >
          Siguiente
        </Button>
      </Grid>
    </Box>
  );
};

export default Quantity;
