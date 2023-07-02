const smallCups = document.querySelectorAll(".cup-small");
const liters = document.querySelector(".remaining span");
const remained = document.querySelector(".remaining small");
const precentage = document.querySelector(".precentage");
const overlay = document.querySelector(".overlay");
const text = document.querySelector(".text");

for (let i = 0; i < localStorage.getItem("index"); i++) {
  smallCups[i].classList.add("full");
}
const quotes = [
  "Select how many glasses have you drank.",
  "Hydration is the key to a healthier you.",
  "You're on a roll! Keep the hydration going and take the next step towards a healthier lifestyle.",
  "Keep going, one sip at a time!",
  "You're doing amazing! Stay hydrated and keep up the good work!",
  "Don't give up now! Stay committed to your hydration goals.",
  "Every drop counts. You're getting closer to a healthier you!",
  "Hydration is a journey. Keep pushing forward and you'll feel the difference!",
  "Congratulations! You've reached the finish line of 8 cups of water. Your body thanks you for staying hydrated and taking care of your health!",
];

updateBigCup();

smallCups.forEach((cup, index) =>
  cup.addEventListener("click", () => highlightCup(index))
);

function highlightCup(index) {
  if (
    index == smallCups.length - 1 &&
    smallCups[index].classList.contains("full")
  ) {
    index--;
  } else if (
    smallCups[index].classList.contains("full") &&
    !smallCups[index].nextElementSibling.classList.contains("full")
  ) {
    index--;
  }

  smallCups.forEach((c, inx) => {
    if (inx <= index) {
      c.classList.add("full");
    } else {
      c.classList.remove("full");
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const filledCup = document.querySelectorAll(".full").length;
  let drinkedWater = filledCup * 0.25;
  const totalRemaining = 2 - drinkedWater;
  const precent = (filledCup / 8) * 100;

  liters.innerHTML = `${totalRemaining}L`;
  precentage.innerHTML = `${precent}%`;
  precentage.style.height = `${precent}%`;
  text.innerHTML = quotes[filledCup];

  // if (precent == 100) {
  //   liters.innerHTML = "";
  //   remained.innerHTML = "";
  // } else {
  //   remained.innerHTML = "Remained";
  // }

  precent == 100
    ? ((liters.innerHTML = ""), (remained.innerHTML = ""), celebrating())
    : (remained.innerHTML = "Remained");

  precent == 0 ? (precentage.innerHTML = "") : null;

  localStorage.setItem("index", document.querySelectorAll(".full").length);
}

function celebrating() {
  overlay.classList.add("show");
  const audio = new Audio("clap.mp3");
  audio.play();
  setTimeout(() => {
    overlay.classList.remove("show");
  }, 5000);
}
