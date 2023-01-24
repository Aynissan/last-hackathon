import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "./images/logo2.png";
import logo2 from "./images/logo.png.png";
import logo3 from "./images/Rectangle 1 (1).png";
import { Link as RouterLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <Box position="static" className="test">
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
        <RouterLink to="/">
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
        </RouterLink>
        <Button
          onClick={() => navigate("/categ")}
          sx={{ marginRight: "400px" }}
          color="inherit"
        >
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
    </Box>
  );
}
