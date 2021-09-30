var plus = document.querySelectorAll(".plus-btn");
var moins = document.querySelectorAll(".minus-btn");
var trashs = document.querySelectorAll(".fa-trash");
var hearts = document.querySelectorAll(".fa-heart");

for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    plus[i].nextElementSibling.innerHTML++;

    total();
  });
}
for (let i = 0; i < moins.length; i++) {
  moins[i].addEventListener("click", function () {
    if (moins[i].previousElementSibling.innerHTML > 0)
      moins[i].previousElementSibling.innerHTML--;
    total();
  });
}

for (let trash of trashs) {
  trash.addEventListener("click", function () {
    trash.parentElement.parentElement.parentElement.remove();
    total();
  });
}

for (let heart of hearts) {
  heart.addEventListener("click", function () {
    heart.classList.toggle("hear");
  });
}

function total() {
  var quantity = document.getElementsByClassName("qute");
  var unitPrice = document.getElementsByClassName("unit-price");
  var totalPrice = document.querySelector(".total-price");
  let somme = 0;
  for (let i = 0; i < quantity.length; i++) {
    somme += quantity[i].innerHTML * unitPrice[i].innerHTML;
  }
  totalPrice.innerHTML = somme;
}