const get = (element) => {
  return document.getElementById(element);
};
let amount = get("amount");
let minus = get("minus");
let plus = get("plus");

plus.addEventListener("click", (e) => {
  amount.stepUp(1);
});
minus.addEventListener("click", (e) => {
  amount.stepDown(1);
});
