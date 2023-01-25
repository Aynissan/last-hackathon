export let API_AUTH_REGISTER = "http://34.141.26.183/api/v1/account/register/";
export let API_AUTH_LOGIN = "http://34.141.26.183/api/v1/account/login/";
export const API_PRODUCTS = "http://34.141.26.183/api/v1/product/";
export let API_AUTH_REFRESH = "http://34.141.26.183/api/v1/account/refresh/";

export function getCountProductInCart() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return cart ? cart.products.length : 0;
}
export function calcSubPrice(product) {
  return +product.count * product.item.price;
}

export function calcTotalPrice(products) {
  return products.reduce((acc, cur) => {
    return (acc += cur.subPrice);
  }, 0);
}
