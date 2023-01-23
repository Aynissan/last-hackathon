import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import pic1 from "../Auth/assets/Ellipse 8.svg";
// import { pic2 } from "../Auth/assets/Ellipse 9.svg";
import pic3 from "../Auth/assets/Saly-38.svg";
import "./AddProd.css";
import MenuItem from "@mui/material/MenuItem";

const currencies = [
  {
    value: "1",
    label: "Телефоны",
  },
  {
    value: "2",
    label: "Наушники",
  },
  {
    value: "3",
    label: "Ноутбуки",
  },
  {
    value: "4",
    label: "Другое",
  },
];

const AddProd = () => {
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
              <TextField id="outlined-basic" label="Title" variant="outlined" />
              <TextField
                id="outlined-basic"
                label="Price"
                variant="outlined"
                type="number"
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
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </Container>
        </React.Fragment>
      </div>
    </div>
  );
};
export default AddProd;
