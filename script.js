const facts = [
  "Frogs can jump up to 20 times their body length.",
  "Frogs absorb water through their skin.",
  "Frogs breathe through both lungs and skin.",
  "There are over 6,000 species of frogs.",
  "Frogs don’t drink water; they absorb it."
];

function showFact() {
  const random = Math.floor(Math.random() * facts.length);
  document.getElementById("fact").innerText = facts[random];
}

function playSound() {
  const audio = new Audio("frog.mp3");
  audio.play();
}
