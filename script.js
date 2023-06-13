class movingCircle {
  constructor(domNode, speed, scale) {
    domNode.style.transition = `transform ${speed}ms linear`;
    document.addEventListener("mousemove", (e) => {
      domNode.style.transform = `translate(${e.pageX - 20}px, ${
        e.pageY - 20
      }px) scale(${scale})`;
    });
    document.addEventListener("mousedown", (e) => {
      domNode.style.transition = `transform ${speed * 10}ms cubic-bezier(0,0,1,1)`;
    });
    document.addEventListener("mouseup", (e) => {
      domNode.style.transition = `transform ${speed}ms cubic-bezier(0,0,1,1)`;
    });
  }
}

new movingCircle(document.querySelector(".cursor01"), 100, 1);
new movingCircle(document.querySelector(".cursor02"), 200, 0.8);
new movingCircle(document.querySelector(".cursor03"), 300, 0.6);
new movingCircle(document.querySelector(".cursor04"), 400, 0.4);
new movingCircle(document.querySelector(".cursor05"), 500, 0.2);
new movingCircle(document.querySelector(".cursor06"), 600, 0.08);
new movingCircle(document.querySelector(".cursor07"), 700, 0.06);

let miniDescBtn = document.querySelector(".miniDesc");
let arrayOfMiniDesc = [
  "// Gymråtta",
  "// Musik Producent",
  "// Redstone Engineer",
  "// Webbutvecklare",
];

let miniDescClickCounter = 0;
miniDescBtn.addEventListener("mousedown", () => {
  document.addEventListener(
    "mouseup",
    () => {
      miniDescBtn.textContent = arrayOfMiniDesc[miniDescClickCounter];
      miniDescClickCounter += 1;
      if (miniDescClickCounter === arrayOfMiniDesc.length) {
        miniDescClickCounter = 0;
        console.log("bruh");
      }
    },
    { once: true }
  );
});
