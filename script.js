
const canvas = document.getElementById("canvasanimation");
const context = canvas.getContext("2d");


canvas.width = 960;
canvas.height = 540;

const frameCount = 110;
const currentFrame = index => (
    `https://www.juulvrasdonk.nl/light-assets/${(index + 1).toString().padStart(4, '0')}.png`
)

const images = []
const poster = {
  frame: 0
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}

gsap.to(poster, {
  frame: frameCount - 1,
  snap: "frame",
  scrollTrigger: {
    scrub: 0.5
  },
  onUpdate: render // use animation onUpdate instead of scrollTrigger's onUpdate
});

images[0].onload = render;

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[poster.frame], 0, 0); 
}
