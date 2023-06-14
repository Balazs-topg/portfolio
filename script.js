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
    this.domNode = domNode;
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

let littleCircles = [];
littleCircles.push(new movingCircle(document.querySelector(".cursor01"), 100, 1));
littleCircles.push(new movingCircle(document.querySelector(".cursor01"), 100, 1));
littleCircles.push(new movingCircle(document.querySelector(".cursor02"), 200, 0.8));
littleCircles.push(new movingCircle(document.querySelector(".cursor03"), 300, 0.6));
littleCircles.push(new movingCircle(document.querySelector(".cursor04"), 400, 0.4));
littleCircles.push(new movingCircle(document.querySelector(".cursor05"), 500, 0.2));
littleCircles.push(new movingCircle(document.querySelector(".cursor06"), 600, 0.08));
littleCircles.push(new movingCircle(document.querySelector(".cursor07"), 700, 0.06));
let dotCursor = new cursorReplacement(document.querySelector(".main-cursorrr"), 0, 1);

//move circles back when resizing (inorder to avoid wierd overflow behaviour)
addEventListener("resize", (event) => {
  littleCircles.forEach((element) => {
    element.domNode.style.transform = "translate(0px, 0px)";
  });
});

let miniDescBtn = document.querySelector(".miniDesc");
let arrayOfMiniDesc = ["// Gymråtta", "// Musik Producent", "// Redstone Engineer", "// Webbutvecklare"];

miniDescBtn.addEventListener("mouseenter", () => {
  dotCursor.domNode.classList.add("animate-ping");
});
miniDescBtn.addEventListener("mouseleave", () => {
  dotCursor.domNode.classList.remove("animate-ping");
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

//menue

let body = document.querySelector("body");
let completeBurgir = document.querySelector(".completeBurgir");
let burgirBg = document.querySelector(".burgirBg");
let burgirNav = document.querySelector(".burgirNav");
let burgirMenueCloseBtn = document.querySelector("[aria-label='stäng']");
let burgirMenueOpenBtn = document.querySelector(".burgirMenueBtn");

//close
burgirMenueCloseBtn.addEventListener("click", () => {
  burgirNav.classList.add("animate-close-burgir");
  burgirBg.classList.add("animate-fade-out");
  setTimeout(() => {
    burgirNav.classList.remove("animate-close-burgir");
    burgirBg.classList.remove("animate-fade-out");
    completeBurgir.classList.add("hidden");
  }, 200);
});

//open
burgirMenueOpenBtn.addEventListener("click", () => {
  completeBurgir.classList.remove("hidden");
  burgirNav.classList.add("animate-open-burgir");
  burgirBg.classList.add("animate-fade-in");
  setTimeout(() => {
    burgirNav.classList.remove("animate-open-burgir");
    burgirBg.classList.remove("animate-fade-in");
  }, 300);
});
