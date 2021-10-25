const html = document.documentElement;
const canvas = document.getElementById("scroll-background");
const context = canvas.getContext("2d");

// canvas.width = 1158;
// canvas.height = 770;

const currentFrame = (index) =>
  `../img/scrollBackground/ezgif-frame-${index
    .toString()
    .padStart(3, "0")}.jpg`;

const preloadImages = () => {
  for (let i = 1; i < 151; i++) {
    const image = new Image();
    image.src = currentFrame(i);
  }
};

const image = new Image();
image.src = currentFrame(1);

image.onload = function () {
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
};

window.addEventListener("scroll", () => {
  const scrollTop = html.scrollTop;
  const maxScroll = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScroll;
  const frameIndex = Math.min(147, Math.floor(scrollFraction * 151));
  requestAnimationFrame(() => updateImage(frameIndex + 1));
});

const updateImage = (index) => {
  image.src = currentFrame(index);
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
};

preloadImages();

function newPage(intPage) {
  document.getElementById("header").style.animation = "moveNavbarBack 5s";

  setTimeout(function () {
    document.getElementById("header").style.right = "0";
    document.getElementById("header").style.transform = "translate(0%)";
    
  }, 5000);

  if (intPage == 1) {
    setTimeout(function () {
      location.href = "../index.html";
    }, 5000);
  }

  if (intPage == 2) {
    setTimeout(function () {
      location.href = "kontakt.html";
    }, 5000);
  }

  if (intPage == 3) {
    setTimeout(function () {
      location.href = "donate.html";
    }, 5000);
  }
}