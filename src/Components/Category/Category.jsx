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
import OneProd from "../OneProd/OneProd";

export default function Category() {
  const { products, getProducts, fetchByParams } = useContext(productContext);

  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") || "");

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
      search: search,
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
      {/* <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={() => navigate("/")}>Главная></Button>
        <Button onClick={() => navigate("/login")}>Профиль></Button>
      </Box> */}

      <Box>
        <Paper>
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
          {/* <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Категории</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="all"
              name="radio-buttons-group"
              onChange={(e) => fetchByParams("type", e.target.value)}
            >
              <FormControlLabel
                value="all"
                control={<Radio />}
                label="Другое"
              />
              <FormControlLabel
                value="phones"
                control={<Radio />}
                label="Телефоны"
              />
              <FormControlLabel
                value="headphones"
                control={<Radio />}
                label="Наушники"
              />
              <FormControlLabel
                value="laptops"
                control={<Radio />}
                label="Ноутбуки"
              />
            </RadioGroup>
          </FormControl> */}
        </Paper>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            marginRight: "30px",
          }}
        >
          {products
            ? currentData().map((item) => <OneProd key={item.id} item={item} />)
            : null}
        </Box>
      </Box>

      <Pagination count={count} page={page} onChange={(e, p) => setPage(p)} />
    </Container>
  );
}
