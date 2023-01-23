import React from "react";
// import * as React from "react";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./OneProd.css";

const OneProd = () => {
  return (
    <div>
      <div className="card">
        <img
          className="card_img"
          src="https://i.pinimg.com/736x/8e/26/26/8e26264ebbcc6e587a8cea69cae8bd60.jpg"
          alt=""
        />
        <div className="container">
          <h4>Iphone</h4>
          <p>2054gb</p>
          <p>1234567890$</p>
          <div className="lower_card_block">
            <Stack direction="row" alignItems="center" spacing={1}>
              <IconButton aria-label="delete" size="large">
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </Stack>
            <BorderColorIcon sx={{ marginTop: "5%" }} />
            <FavoriteBorderIcon sx={{ marginTop: "5%" }} />
            <FavoriteIcon sx={{ display: "none" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneProd;
