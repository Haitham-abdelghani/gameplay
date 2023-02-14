document.querySelector(".score").textContent = 20;
let score = 20;
let hightScore = 0;
let guessNumber = Math.trunc(Math.random() * 20);
// document.querySelector(".number").textContent = guessNumber;

document.querySelector(".check").addEventListener("click", function () {
  console.log(document.querySelector(".guess").value);

  if (!document.querySelector(".guess").value) {
    document.querySelector(".message").textContent =
      "Enter your number gusses 😊";

    //congratulation code
  } else if (document.querySelector(".guess").value == guessNumber) {
    document.querySelector(".message").textContent = "congratulation 🎉🎉";
    guessNumber = Math.trunc(Math.random() * 20);
    document.querySelector(".number").textContent = guessNumber;

    score -= 1;

    hightScore += 1;
    document.querySelector(".highscore").textContent = hightScore;

    //styling congratulation
    document.body.style.backgroundColor = "green";

    // gusses code (hight and low )
  } else if (document.querySelector(".guess").value !== guessNumber) {
    document.querySelector(".guess").value > guessNumber
      ? (document.querySelector(".message").textContent = "Too High 😂")
      : (document.querySelector(".message").textContent = "Too Low 😒");
    // score code

    if (score > 0) {
      score -= 1;
      document.querySelector(".score").textContent = score;
    } else if (score == 0) {
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").textContent = "you lose 🤦‍♂️🤦‍♂️🤷‍♂️🤷‍♂️🤷‍♂️";
    }
  }
});

// button agine

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.body.style.backgroundColor = "#222";
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  guessNumber = Math.trunc(Math.random() * 20);
  document.querySelector(".number").textContent = "?";
});
// (document.querySelector(".guess").value > guessNumber) {
//   document.querySelector(".message").textContent = "Too High 😂";
//   score -= 1;
//   document.querySelector(".score").textContent = score;
// } else if (document.querySelector(".guess").value < guessNumber) {
//   document.querySelector(".message").textContent = "Too Low 😒";
//   score -= 1;
//   document.querySelector(".score").textContent = score;
// }
