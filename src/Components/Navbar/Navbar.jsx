import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "./images/logo2.png";
import logo2 from "./images/logo.png.png";
import logo3 from "./images/Rectangle 1 (1).png";
import image from "./images/image 14 (1).png";
import { Container } from "@mui/system";

export default function Navbar() {
  return (
    <Container color="#E5E5E5" sx={{ flexGrow: 1 }}>
      <Box position="static">
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 1,
              color: "#C8C8C8",
            }}
          >
            copp.
          </Typography>
          <Button
            color="inherit"
            sx={{
              fontWeight: "700",
              display: "flex",
              flexDirection: "column",
              marginTop: "4px",
            }}
          >
            Главная
            <img src={logo3} width="30px" />
          </Button>
          <Button sx={{ marginRight: "400px" }} color="inherit">
            Поиск
          </Button>
          <Button color="inherit">
            <img src={logo2} />
          </Button>
          <Button color="inherit">
            <img src={logo} />
          </Button>
        </Toolbar>
      </Box>
      <Box
        sx={{
          height: "79.99999523162842px",
          width: "372.00000834464845px",
          left: "200px",
          top: "260px",
          marginLeft: "30px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{ marginTop: "150px", fontWeight: "700" }}
          >
            Покупай модную технику <img src={logo3} />
          </Typography>
          <Typography
            sx={{
              fontWeight: 600,
              height: "83.99999499320984px",
              width: "300px",
              left: "200px",
              top: "394px",
              marginTop: "40px",
            }}
          >
            Дешево, и без затруднений! Вы найдете большой выбор товаров, на
            которые всегда идут скидки!
          </Typography>
          <Button
            sx={{
              backgroundColor: "#1D242B",
              color: "white",
              width: "180px",
              height: "50px ",
              fontSize: "12px",
              fontWeight: 700,
              borderRadius: "30px",
              marginTop: "30px",
            }}
          >
            продолжить
          </Button>
        </Box>
        <Box
          sx={{
            width: "500",
            height: "340",
            marginLeft: "100px",
            marginTop: "140px",
          }}
        >
          <img src={image} />
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "500px" }}
      >
        <Typography variant="h5" color="#1D242B" sx={{ fontWeight: "700" }}>
          Популярные запросы
        </Typography>
      </Box>
    </Container>
  );
}
