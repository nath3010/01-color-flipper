const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const radom_number = getRandomNumber();
  document.body.style.backgroundColor = colors[radom_number];
  color.textContent = colors[radom_number];
});

let getRandomNumber = () => Math.floor(Math.random() * colors.length);
