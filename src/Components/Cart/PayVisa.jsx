import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import pic1 from "../Auth/assets/Ellipse 8.svg";
// import { pic2 } from "../Auth/assets/Ellipse 9.svg";
import pic3 from "../Auth/assets/Saly-38.svg";
import "./PayVisa.css";
import TextField from "@mui/material/TextField";

export default class PaymentForm extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div backgroung-image={pic1} className="content">
        <div backgroung-image={pic3} className="content">
          <img src={pic1} className="img1" alt="" />
          <img src={pic3} className="img2" alt="" />

          <div id="PaymentForm">
            <Cards
              cvc={this.state.cvc}
              expiry={this.state.expiry}
              focused={this.state.focus}
              name={this.state.name}
              number={this.state.number}
            />
            <form id="formId">
              <TextField
                id="outlined-basic"
                label="Card Number"
                variant="outlined"
                type="tel"
                name="number"
                placeholder="Card Number"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />

              <TextField
                id="outlined-basic"
                label="Cardholder"
                variant="outlined"
                type="name"
                name="name"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <TextField
                id="outlined-basic"
                label="Valid/thru"
                variant="outlined"
                type="number"
                name="expiry"
                placeholder="valid/thru"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <TextField
                id="outlined-basic"
                label="CVC"
                variant="outlined"
                type="number"
                name="cvc"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
