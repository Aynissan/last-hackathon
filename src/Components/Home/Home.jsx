import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import logo from "./images/logo2.png";
// import logo2 from "./images/logo.png.png";
import logo3 from "../Navbar/images/Rectangle 1 (1).png";
import back1 from "../Navbar/images/Ellipse 8 (1).png";
import back2 from "../Navbar/images/Ellipse 9.png";
import { Container } from "@mui/system";
import "./Home.css";
import image1 from "../Navbar/images/image 5.jpg";
import image2 from "../Navbar/images/image 10.png";
import image3 from "../Navbar/images/image 7.jpg";
import { Link as RouterLink } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Carousel from "../Navbar/Carousel";

export default function Home() {
  return (
    <Container color="#E5E5E5" sx={{ flexGrow: 1 }}>
      {/* <Box position="static" className="test">
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

          <RouterLink to="/login">
            <Button color="inherit">
              <img src={logo} />
            </Button>
          </RouterLink>
        </Toolbar>
      </Box> */}
      <Box
        sx={{
          height: "79px",
          width: "372px",
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
              height: "83px",
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
        <Box className="back">
          <img src={back1} />
        </Box>
        <Box className="back1">
          <img src={back2} />
        </Box>
        <Box
          sx={{
            width: "500",
            height: "340",
            marginLeft: "100px",
            marginTop: "140px",
          }}
        >
          {<Carousel />}
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "650px" }}
      >
        <Typography variant="h5" color="#1D242B" sx={{ fontWeight: "700" }}>
          Популярные запросы
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: "150px",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <Card sx={{ maxWidth: 120 }}>
          <CardActionArea>
            <CardMedia component="img" image={image1} alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                iPhone 8
              </Typography>
              <Typography variant="body2" color="text.secondary">
                19.990₽
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 200, height: 800 }}>
          <CardActionArea>
            <CardMedia component="img" image={image3} alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                iPad
              </Typography>
              <Typography variant="body2" color="text.secondary">
                29.990₽
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia component="img" image={image2} alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Телевизор
              </Typography>
              <Typography variant="body2" color="text.secondary">
                17.990₽
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Container>
  );
}
