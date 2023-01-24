import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import imgagess from "./imgs/pngwing 8.png";
import img from "./imgs/pngwing 8.png";
import image from "./imgs/pngwing 9 (1).png";
import image1 from "./imgs/pngwing 5.png";
import image2 from "./imgs/pngwing 7.png";
import image3 from "./imgs/pngwing 6.png";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import { Button, Input } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function MediaControlCard() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Container>
      <Box sx={{ marginTop: "80px", marginBottom: "100px" }}>
        <Button onClick={() => navigate("/")}>Главная></Button>
        <Button onClick={() => navigate("/login")}>Профиль></Button>
        <Input sx={{ marginLeft: "50px" }} placeholder="Поиск" />
      </Box>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "sapce-around" }}
      >
        <Card>
          <Box>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Телефоны >
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                sx={{ color: "#B5B5B5" }}
              >
                Сидка 20% на <br></br>весь ассортимент <br></br> товаров!
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={imgagess}
            alt="Live from space album cover"
          />
        </Card>
        <Card sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", flexDirection: "spa" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Компьютеры >
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                sx={{ color: "#B5B5B5" }}
              >
                Большой выбор! <br></br> (iMac, Sony и мн. <br></br> другое)
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={img}
            alt="Live from space album cover"
          />
        </Card>
        <Card sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", flexDirection: "spa" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Наушники >
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                sx={{ color: "#B5B5B5" }}
              >
                Сидка 30% на <br></br> продукцию <br></br> Apple!
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={image}
            alt="Live from space album cover"
          />
        </Card>
        <Card sx={{ display: "flex", jastifyContent: "space-evently" }}>
          <Box sx={{ display: "flex", flexDirection: "spa" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Колонки >
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                sx={{ color: "#B5B5B5" }}
              >
                Беспроводные,<br></br>водонепроница- <br></br> емые
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={image2}
            alt="Live from space album cover"
          />
        </Card>
        <Card sx={{ display: "flex", jastifyContent: "space-evently" }}>
          <Box sx={{ display: "flex", flexDirection: "spa" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Ноутбуки >
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                sx={{ color: "#B5B5B5" }}
              >
                Большой выбор! <br></br>( ASUS, Macbook )
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={image1}
            alt="Live from space album cover"
          />
        </Card>
        <Card sx={{ display: "flex", jastifyContent: "space-evently" }}>
          <Box sx={{ display: "flex", flexDirection: "spa" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Клавиатуры >
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                sx={{ color: "#B5B5B5" }}
              >
                + мышки <br></br> (беспроводные)
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 200 }}
            image={image3}
            alt="Live from space album cover"
          />
        </Card>
      </Grid>
    </Container>
  );
}
