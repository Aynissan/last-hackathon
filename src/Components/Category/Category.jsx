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
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  InputAdornment,
  Pagination,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useContext } from "react";
import { productContext } from "../Contexts/ProductContext";
import { useState } from "react";
import { useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function Category() {
  const { products, getProducts, fetchByParams } = useContext(productContext);

  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("q" || ""));

  const [page, setPage] = useState(1);

  const count = Math.ceil(products.length / 3);

  const theme = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getProducts();
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  function currentData() {
    const begin = page - 1;
    const end = begin + 3;
    return products.slice(begin, end);
  }

  return (
    <Container>
      <Box sx={{ marginTop: "80px", marginBottom: "100px" }}>
        <Button onClick={() => navigate("/")}>Главная></Button>
        <Button onClick={() => navigate("/login")}>Профиль></Button>
        <Paper elevation={5} sx={{ p: 2 }}>
          <TextField
            id="input-with-icon-textfield"
            label="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="all"
              name="radio-buttons-group"
              onChange={(e) => fetchByParams("type", e.target.value)}
            >
              <FormControlLabel value="all" control={<Radio />} label="all" />
              <FormControlLabel
                value="phone"
                control={<Radio />}
                label="phone"
              />
              <FormControlLabel
                value="laptop"
                control={<Radio />}
                label="laptop"
              />
              <FormControlLabel
                value="watch"
                control={<Radio />}
                label="watch"
              />
            </RadioGroup>
          </FormControl>
        </Paper>
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
      <Pagination count={count} page={page} onChange={(e, p) => setPage(p)} />
    </Container>
  );
}
