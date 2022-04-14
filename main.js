const get = (element) => {
  return document.getElementById(element);
};
let amount = get("amount");
let minus = get("minus");
let plus = get("plus");
let addBtn = get("addBtn");
let cart = [];
let item = "";

plus.addEventListener("click", (e) => {
  amount.stepUp(1);
});
minus.addEventListener("click", (e) => {
  amount.stepDown(1);
});

addBtn.addEventListener("click", (e) => {
  amountInt = getAmount(amount);
  addToCart(getItem());
  console.table(cart);
});

const addToCart = (item) => {
  cart.push(item);
};

const getItem = () => {
  item = document.getElementsByClassName("card-title")[0].firstChild.nodeValue;
  return item;
};

const getAmount = (target) => {
  amountInt = target.value;
  return amountInt;
};
