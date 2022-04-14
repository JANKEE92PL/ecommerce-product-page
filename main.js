const get = (element) => {
  return document.getElementById(element);
};
let amount = get("amount");
let minus = get("minus");
let plus = get("plus");
let addBtn = get("addBtn");
let cart = {};
let item = "";
let badge = get("badge");

plus.addEventListener("click", (e) => {
  amount.stepUp(1);
});
minus.addEventListener("click", (e) => {
  amount.stepDown(1);
});

addBtn.addEventListener("click", (e) => {
  amountInt = getAmount(amount);
  addToCart(getItem(), amountInt);
});

const addToCart = (item, amount) => {
  if (amount > 0) {
    cart = { item, amount };
    badge.innerText = cart.amount;
  } else {
    badge.innerText = 0;
    alert("Please add some amount (use the plus Icon to add some Value)");
  }
};

const getItem = () => {
  item = document.getElementsByClassName("card-title")[0].firstChild.nodeValue;
  return item;
};

const getAmount = (target) => {
  amountInt = target.value;
  return amountInt;
};
