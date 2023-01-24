import React, { useContext, useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import pic1 from "../Auth/assets/Ellipse 8.svg";
// import { pic2 } from "../Auth/assets/Ellipse 9.svg";
import pic3 from "../Auth/assets/Saly-38.svg";
import "./AddProd.css";
import MenuItem from "@mui/material/MenuItem";
import { authContext } from "../Contexts/AuthContext";
import { productContext } from "../Contexts/ProductContext";

const currencies = [
  {
    value: "Phones",
    label: "Телефоны",
  },
  {
    value: "Headphones",
    label: "Наушники",
  },
  {
    value: "Laptops",
    label: "Ноутбуки",
  },
  {
    value: "Others",
    label: "Другое",
  },
];

const AddProd = () => {
  const { user } = useContext(authContext);
  const { addProducts, error, categories } = useContext(productContext);

  // useEffect(() => {
  //   getCategories();
  // }, []);

  const [product, setProduct] = useState({
    title: "",
    price: "",
    category: "",
    image: "",
  });

  const handleInp = (e) => {
    if (e.target.name === "image") {
      setProduct({
        ...product,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setProduct({
        ...product,
        [e.target.name]: e.target.value,
      });
    }
  };

  function handleSave() {
    let newProduct = new FormData();
    newProduct.append("title", product.title);
    newProduct.append("price", product.price);
    newProduct.append("category", product.category);
    newProduct.append("image", product.image);
    addProducts(newProduct);
  }

  return (
    <div backgroung-image={pic1} className="content">
      <div backgroung-image={pic3} className="content">
        <img src={pic1} className="img1" alt="" />
        <img src={pic3} className="img2" alt="" />
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="xl" sx={{ marginTop: "20px" }}>
            <Typography
              variant="h4"
              component="div"
              sx={{
                flexGrow: 1,
                color: "#1D242B",
                fontWeight: "700",
                marginLeft: "10px",
                marginBottom: "10px",
              }}
            >
              Admin Page
            </Typography>

            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                name="title"
                value={product.title}
                onChange={handleInp}
              />
              <TextField
                id="outlined-basic"
                label="Price"
                variant="outlined"
                type="number"
                name="price"
                value={product.price}
                onChange={handleInp}
              />
            </Box>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Images"
                variant="outlined"
                type="file"
              />
              <TextField
                id="outlined-select-currency"
                select
                label="Category"
                helperText="Please select your category"
                onChange={handleInp}
                value={product.category}
                name="category"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <Button
              sx={{
                m: 1,
              }}
              variant="outlined"
              fullWidth
              size="large"
              onClick={handleSave}
            >
              ADD PRODUCT
            </Button>
          </Container>
        </React.Fragment>
      </div>
    </div>
  );
};
export default AddProd;
