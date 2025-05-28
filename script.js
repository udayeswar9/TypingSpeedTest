const sentences = [
  "Typing is a useful skill for developers.",
  "Practice makes perfect when learning to type.",
  "JavaScript can be fun and powerful."
];

let startTime;
let selected;

function startTest() {
  selected = sentences[Math.floor(Math.random() * sentences.length)];
  document.getElementById("sentence").innerText = selected;
  document.getElementById("input").value = "";
  document.getElementById("result").innerText = "";
  startTime = new Date().getTime();
}

function checkTyping() {
  const typed = document.getElementById("input").value;
  if (typed === selected) {
    const endTime = new Date().getTime();
    const seconds = (endTime - startTime) / 1000;
    const speed = Math.round((selected.length / 5) / (seconds / 60));
    document.getElementById("result").innerText = `🎉 Done! Speed: ${speed} WPM`;
  }
}

startTest();