const dino = document.querySelector("#dino");
const cactus = document.querySelector("#cactus");
var score = 0;

// Start the Game
function startgame() {
  if (cactus.classList != "cactus-animation") {
    cactus.classList.add("cactus-animation");
  }
}

// Stop the Game
function stopgame() {
  cactus.classList.remove("cactus-animation");
}

// Make the Trex jump
function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
    // Calculate Dino Y Position
    let dinoTop = parseInt(
      window.getComputedStyle(dino).getPropertyValue("top")
    );
    // Calculate Cactus X Position
    let cactusLeft = parseInt(
      window.getComputedStyle(cactus).getPropertyValue("left")
    );
    // Approximate estimate of a successful jump
    if (cactusLeft < 89 && cactusLeft > 0 && dinoTop == 150) {
      score++;
    }
    setTimeout(function () {
      dino.classList.remove("jump");
    }, 300);
  }
}

// Detect Collision
let isAlive = setInterval(function () {
  // Calculate Dino Y Position
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  // Calculate Cactus X Position
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    // Give the alert
    alert("Game Over! You scored " + score + ".");
    // Re-initialize the score
    score = 0;
    // Stop the game
    stopgame();
  }
}, 10);

// Add Keyboard button press functionality
document.addEventListener("keydown", function (event) {
  jump();
});
