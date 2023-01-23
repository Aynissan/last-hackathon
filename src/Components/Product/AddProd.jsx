import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import pic1 from "../Auth/assets/Ellipse 8.svg";
// import { pic2 } from "../Auth/assets/Ellipse 9.svg";
import pic3 from "../Auth/assets/Saly-38.svg";

const AddProd = () => {
  return (
    <div backgroung-image={pic1} className="content">
      <div backgroung-image={pic3} className="content">
        <img src={pic1} className="img1" alt="" />
        <img src={pic3} className="img2" alt="" />
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="xl" m="10px">
            <Typography
              variant="h4"
              component="div"
              sx={{
                flexGrow: 1,
                color: "#1D242B",
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
                label="Outlined"
                variant="outlined"
              />

              <TextField
                id="standard-basic"
                label="Standard"
                variant="standard"
              />
            </Box>
          </Container>
        </React.Fragment>
      </div>
    </div>
  );
};
export default AddProd;
