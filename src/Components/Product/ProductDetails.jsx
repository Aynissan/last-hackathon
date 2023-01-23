import React from "react";

import "./Product.css";
import phone from "./img/pngwing 9.svg";
import elips from "./img/Ellipse 1.svg";
import phone1 from "./img/pngwing 10.svg";
import phone2 from "./img/image 12.svg";
import phone3 from "./img/1-500x500.jpg";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Comment from "./Comment";
// import Box from "@mui/joy/Box";
// import Button from "@mui/joy/Button";
// import FormControl from "@mui/joy/FormControl";
// import FormLabel from "@mui/joy/FormLabel";
// import Textarea from "@mui/joy/Textarea";
// import IconButton from "@mui/joy/IconButton";
// import Menu from "@mui/joy/Menu";
// import MenuItem from "@mui/joy/MenuItem";
// import ListItemDecorator from "@mui/joy/ListItemDecorator";
// import FormatBold from "@mui/icons-material/FormatBold";
// import FormatItalic from "@mui/icons-material/FormatItalic";
// import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
// import Check from "@mui/icons-material/Check";
// import { useEffect } from "react";

const ProductDetails = () => {
  // const { oneProd, getOneProd } = useContext(prodContext);

  // useEffect(() => {
  //   getOneProd();
  // }, []);

  return (
    <div>
      <div className="upper_block">
        <img className="main_phone" src={phone} alt="" />
        <img className="elips" src={elips} alt="" />
      </div>
      <div className="mid_block">
        <div className="name_block">
          <h3>ls</h3>
        </div>
        <div className="img_block">
          <div className="left_block">
            <img className="left_img" src={phone1} alt="" />
          </div>
          <div className="middle_block">
            <img className="middle_img" src={phone2} alt="" />
          </div>
          <div className="last_block">
            <img className="last_img" src={phone3} alt="" />
          </div>
        </div>
      </div>
      <div className="lower_block">
        <div className="charact">
          <h3>Характеристика</h3>
        </div>
        <div className="charact_block">
          <div className="charact_left_block">
            <div className="lft_bl">
              <p>Толщина</p>
              <p>Толщина</p>
              <p>Толщина</p>
              <p>Толщина</p>
            </div>
            <div className="spec_left">
              {/* <p>{item.length}</p> */}
              <p>100px</p>
              <p>100px</p>
              <p>100px</p>
            </div>
          </div>
          <div className="charact_right_block">
            <div className="rght_bl">
              <p>Толщина</p>
              <p>Толщина</p>
              <p>Толщина</p>
              <p>Толщина</p>
            </div>
            <div className="spec_right">
              <p>ad;</p>
              <p>100px</p>
              <p>100px</p>
              <p>100px</p>
            </div>
          </div>
        </div>
        <Stack spacing={1}>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          {/* <Rating
            name="half-rating-read"
            defaultValue={2.5}
            precision={0.5}
            readOnly
          /> */}
        </Stack>
      </div>
      {<Comment />}
    </div>
  );
};

export default ProductDetails;
