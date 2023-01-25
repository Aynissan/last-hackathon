import React, { useContext } from "react";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./OneProd.css";
import { useNavigate } from "react-router-dom";
import { productContext } from "../Contexts/ProductContext";
import { cartContext } from "../Contexts/CartContextProvider";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// import { IconButton } from "@mui/material";

const OneProd = ({ item }) => {
  const navigate = useNavigate();

  const { addProductToCart, checkProductInCart } = useContext(cartContext);

  const { deleteProd } = useContext(productContext);
  return (
    <div className="main_div">
      <div className="card">
        <img
          className="card_img"
          src={item.images.map((item) => item)}
          alt=""
        />
        <div className="container">
          <h4>{item.title}</h4>
          <p>{item.p}</p>
          <p>{item.price}</p>
          <div className="lower_card_block">
            <Stack direction="row" alignItems="center" spacing={1}>
              <IconButton
                aria-label="delete"
                size="large"
                onClick={() => deleteProd(item.id)}
              >
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </Stack>
            <BorderColorIcon
              sx={{ marginTop: "5%" }}
              onClick={() => navigate(`/edit/${item.id}`)}
            />
            <IconButton size="small" onClick={() => addProductToCart(item)}>
              <ShoppingCartIcon
                color={checkProductInCart(item.id) ? "primary" : ""}
              />
            </IconButton>
            {/* <FavoriteBorderIcon
              sx={{ marginTop: "5%" }}
              onClick={() => navigate(`/prodDet/${item.id}`)}
            />
            <FavoriteIcon sx={{ display: "none" }} />
            <img
              className="crsl"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFpSURBVHgB7VbhWYMwEH11AjYwG+gG0g26QXECcYK6gd2gdQJ1ArqB7QSwgd1A8+AiRyWFD9J+/dH3fUdIcrmXuxwXgP6Irays5FZ+rHxL3yAwXoXAJwsEwkIZXaLy0Fi5t7JWcylGwihjiUfnBXVYI4zAUgytOvQy9PDuBsdxJ+1Hh97ngX4rJgd9hmGO6jwoRsb2Ij5EqEO4EV1u8M23gMZdWoeSHOrTmCiiL3kvZEdbVJnIOZ7FDn7Eoss1z6jCmQoRvZzKXDngPFqjmVHu4GMcRyJ6mRqjnXfUHkZMkJkQFrJIn80ew8G1j2LXiO0yfGSftyyg0hP6IUF76UqhvHaHaXAaGLGfd31nQUnPSYYr2ZXsssjGlKQ+cLW2INlWOjOcBrEj48PVrrIyIywM6hulrL2RGmhcdgGJ2P5dnpzIUBPxSt9hOB7QDN9U2sZO3GUXSrQD/354CP4GMFluMRxMOkZmowd/AQMNh+pUZXOfAAAAAElFTkSuQmCC"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneProd;
