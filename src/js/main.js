var addToCartButtons = document.querySelectorAll(".product-addtocart");
console.log(addToCartButtons);

var message = document.querySelector(".confirmation");

function appearButton() {
  message.classList.add("is-active");
  setTimeout(() => {
    message.classList.remove("is-active");
  }, 2000);
}
addToCartButtons.forEach(function (addToCartButton) {
  console.log(addToCartButton.innerText);
  addToCartButton.addEventListener("click", appearButton);
});
