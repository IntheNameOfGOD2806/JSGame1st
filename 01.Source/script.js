const canvas = document.getElementById("canvas1");
import _ from "lodash";
const ctx = canvas.getContext("2d");
console.log(ctx);
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const playerImage = new Image();
playerImage.src = "shadow_dog.png";
// let x = 0;
// let y = 0;
// let speed = 1;
const animate = () => {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.fillRect(100, 50, 100, 300);
  // x += speed;
  // if (x > CANVAS_WIDTH - 100 || x < 0) {
  //   speed *= -1;
  // }
  ctx.drawImage(playerImage, 0, 0);
  requestAnimationFrame(animate);
};
animate();
