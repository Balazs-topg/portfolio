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

//^nav

let navBtnHem = document.querySelector(".navBtnHem");
let navBtnOmMig = document.querySelector(".navBtnOmMig");
let navBtnProjekt = document.querySelector(".navBtnProjekt");
let navBtnKontaktaMig = document.querySelector(".navBtnKontaktaMig");

let hem = document.querySelector("h1");
let omMig = document.querySelector(".omMig");
let projekt = document.querySelector(".projekt");
let kontaktaMig = document.querySelector(".kontaktaMig");

navBtnHem.addEventListener("click", () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});
navBtnOmMig.addEventListener("click", () => {
  omMig.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});
navBtnProjekt.addEventListener("click", () => {
  projekt.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});
navBtnKontaktaMig.addEventListener("click", () => {
  kontaktaMig.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});

//^ burgir menue

let burgirNavBtnHem = document.querySelector(".burgirNavBtnHem");
let burgirNavBtnOmMig = document.querySelector(".burgirNavBtnOmMig");
let burgirNavBtnProjekt = document.querySelector(".burgirNavBtnProjekt");
let burgirNavBtnKontakt = document.querySelector(".burgirNavBtnKontakt");

burgirNavBtnHem.addEventListener("click", () => {
  closeBurgirMenue();
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});
burgirNavBtnOmMig.addEventListener("click", () => {
  closeBurgirMenue();
  omMig.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});
burgirNavBtnProjekt.addEventListener("click", () => {
  closeBurgirMenue();
  projekt.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});
burgirNavBtnKontakt.addEventListener("click", () => {
  closeBurgirMenue();
  kontaktaMig.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});

let body = document.querySelector("body");
let completeBurgir = document.querySelector(".completeBurgir");
let burgirBg = document.querySelector(".burgirBg");
let burgirNav = document.querySelector(".burgirNav");
let burgirMenueCloseBtn = document.querySelector("[aria-label='stäng']");
let burgirMenueOpenBtn = document.querySelector(".burgirMenueBtn");

burgirMenueCloseBtn.addEventListener("click", () => {
  closeBurgirMenue();
});

burgirMenueOpenBtn.addEventListener("click", () => {
  openBurgirMenue();
});

burgirNavBtnHem.addEventListener("click", () => {});

function closeBurgirMenue() {
  burgirNav.classList.add("animate-close-burgir");
  burgirBg.classList.add("animate-fade-out");
  body.classList.remove("overflow-hidden");
  setTimeout(() => {
    burgirNav.classList.remove("animate-close-burgir");
    burgirBg.classList.remove("animate-fade-out");
    completeBurgir.classList.add("hidden");
  }, 200);
}

function openBurgirMenue() {
  completeBurgir.classList.remove("hidden");
  burgirNav.classList.add("animate-open-burgir");
  burgirBg.classList.add("animate-fade-in");
  body.classList.add("overflow-hidden");
  setTimeout(() => {
    burgirNav.classList.remove("animate-open-burgir");
    burgirBg.classList.remove("animate-fade-in");
  }, 300);
}

//~~~

const navLinks = [navBtnOmMig, navBtnProjekt, burgirNavBtnKontakt];

function handleNavLinks() {
  const scrollPosition = window.scrollY;

  // Iterate over each section and check if it is in the viewport
  document.querySelectorAll("h4").forEach((section) => {
    const sectionId = section.getAttribute("id");
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      // Add the 'active' class to the corresponding navigation link
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}
handleNavLinks()