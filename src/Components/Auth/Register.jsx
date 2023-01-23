import React, { useContext } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link as RouterLink } from "react-router-dom";
import pic1 from "./assets/Ellipse 8.jpg";
import pic3 from "./assets/Saly-38.svg";
import "./Register.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { authContext } from "../Contexts/AuthContext";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https:/MAKERS/KG">
        Phyton and JavaScript
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Register() {
  const { register } = useContext(authContext);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [codeword, setCodeWord] = React.useState("");
  const [phone_number, setphone_number] = React.useState("");

  function handleSubmit() {
    if (
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim() ||
      !codeword.trim() ||
      !phone_number.trim()
    ) {
      alert("Заполните поля!");
      return;
    }

    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confirmPassword", confirmPassword);
    formData.append("codeword", codeword);
    formData.append("phone_number", phone_number);
    register(formData);
  }

  return (
    <ThemeProvider theme={theme}>
      <div backgroung-image={pic1} className="content">
        <div backgroung-image={pic3} className="content">
          <img src={pic1} className="img1" alt="" />
          <img src={pic3} className="img2" alt="" />
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            ></Box>
            <RouterLink to="/adminpage">
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
            </RouterLink>
            <Typography
              component="h1"
              variant="h5"
              color="secondary"
              fontWeight={700}
            >
              WELCOME TO COPP
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                // autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                color="secondary"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                // autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirm_password"
                autoComplete="current-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="codeword"
                label="Code Word"
                id="codeword"
                // autoComplete="current-password"
                value={codeword}
                onChange={(e) => setCodeWord(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="phone_number"
                label="Phone Number"
                id="phone_number"
                // autoComplete="current-password"
                value={phone_number}
                onChange={(e) => setphone_number(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="secondary" />}
                label="SUBSCRIBE TO FREE"
              />
              <Button
                color="secondary"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
              >
                Log In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <RouterLink to="/login">
                    <Typography>{"Have an account? Sign In"}</Typography>
                  </RouterLink>
                </Grid>
              </Grid>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Container>
        </div>
      </div>
    </ThemeProvider>
  );
}
