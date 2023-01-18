import React from "react";
import "./Product.css";
import phone from "./img/pngwing 9.svg";
import elips from "./img/Ellipse 1.svg";
import phone1 from "./img/pngwing 10.svg";
import phone2 from "./img/image 12.svg";
import phone3 from "./img/1-500x500.jpg";

const Product = () => {
  return (
    <div>
      <div className="upper_block">
        <img className="main_phone" src={phone} alt="" />
        <img className="elips" src={elips} alt="" />
      </div>
      <div className="mid_block">
        <div className="name_block">
          <h3>Iphone8</h3>
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
        <div>
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
              <p>100px</p>
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
      </div>
    </div>
  );
};

export default Product;
