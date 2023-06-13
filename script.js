class cursorReplacement {
  constructor(domNode, speed, scale) {
    this.domNode = domNode;
    domNode.style.transition = `transform ${100}ms linear`;
    document.addEventListener("mousemove", (e) => {
      domNode.style.top = `${e.pageY}px`;
      domNode.style.left = `${e.pageX - 2}px`;
    });
    document.addEventListener("mousedown", (e) => {
      domNode.classList.add("scale-50");
    });
    document.addEventListener("mouseup", (e) => {
      domNode.classList.remove("scale-50");
    });
  }
}

class movingCircle {
  constructor(domNode, speed, scale) {
    domNode.style.transition = `transform ${speed}ms linear`;
    document.addEventListener("mousemove", (e) => {
      domNode.style.transform = `translate(${e.pageX - 10}px, ${e.pageY - 10}px) scale(${scale})`;
    });
    document.addEventListener("mousedown", (e) => {
      domNode.style.transition = `transform ${speed * 0.1}ms cubic-bezier(0,0,1,1)`;
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
let dotCursor = new cursorReplacement(document.querySelector(".main-cursorrr"), 0, 1);

let miniDescBtn = document.querySelector(".miniDesc");
let arrayOfMiniDesc = ["// Gymråtta", "// Musik Producent", "// Redstone Engineer", "// Webbutvecklare"];

miniDescBtn.addEventListener("mouseenter", () => {
  dotCursor.domNode.classList.add("animate-ping");
  console.log("bbb");
});
miniDescBtn.addEventListener("mouseleave", () => {
  dotCursor.domNode.classList.remove("animate-ping");
  console.log("aa");
});

let miniDescClickCounter = 0;
miniDescBtn.addEventListener("mousedown", () => {
  document.addEventListener(
    "mouseup",
    () => {
      miniDescBtn.textContent = arrayOfMiniDesc[miniDescClickCounter];
      miniDescClickCounter += 1;
      if (miniDescClickCounter === arrayOfMiniDesc.length) {
        miniDescClickCounter = 0;
      }
    },
    { once: true }
  );
});

//á

let á = document.querySelector(".aaa");
let áToggle = false;
á.addEventListener("click", () => {
  if (áToggle === false) {
    á.textContent = "á";
    áToggle = true;
  } else {
    á.textContent = "a";
    áToggle = false;
  }
});

á.addEventListener("mouseenter", () => {
  dotCursor.domNode.classList.add("animate-ping");
  console.log("bbb");
});
á.addEventListener("mouseleave", () => {
  dotCursor.domNode.classList.remove("animate-ping");
  console.log("aa");
});
