import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "./images/logo2.png";
import logo2 from "./images/logo.png.png";
import logo3 from "./images/Rectangle 1 (1).png";
import { Link as RouterLink, useNavigate } from "react-router-dom";

// import { Link as RouterLink } from "react-router-dom";
import { authContext } from "../Contexts/AuthContext";

export default function Navbar() {
  const { user, logout } = React.useContext(authContext);
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
              color: "secondary",
            }}
          >
            Главная
            <img src={logo3} width="30px" />
          </Button>
        </RouterLink>
        <Button
          onClick={() => navigate("/categ")}
          sx={{ marginRight: "400px" }}
          color="secondary"
          fontWeight="800"
        >
          Поиск
        </Button>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))} */}
          {user ? (
            <>
              <Button
                onClick={() => navigate("/products")}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Products
              </Button>
              <Button
                onClick={() => navigate("/adminpage")}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Admin Page
              </Button>
              {user}
              <Button
                onClick={() => logout()}
                sx={{ my: 2, color: "secondary", display: "block" }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                onClick={() => navigate("/login")}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Login
              </Button>
              <Button
                onClick={() => navigate("/register")}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Register
              </Button>
            </>
          )}
        </Box>
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
