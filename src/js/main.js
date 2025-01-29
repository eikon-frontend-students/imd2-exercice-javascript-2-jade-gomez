var addToCartButtons = document.querySelectorAll(".product-addtocart");
console.log(addToCartButtons);

var message = document.querySelector(".confirmation");

addToCartButtons.forEach(function (addToCartButton) {
  console.log(addToCartButton.innerText);
  addToCartButton.addEventListener("click", appearButton);
});

function appearButton() {
  message.classList.add("is-active");
}
