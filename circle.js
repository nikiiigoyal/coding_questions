// quetion create a circle when user clicks on screen first time only border than secong another circle thisrd time both gone and bew circle
// at one time only 2 circles will be there
// random radius can intersect or not
// need to find if intersecting or not
// center of circle is clicking point it should not go out of screen
const circleCordinates = [];

function circleIntersection(x0, y0, r0, x1, y1, r1) {
  return Math.hypot(x0 - x1, y0 - y1) <= r0 + r1;
}
function logIfIntersecting() {
  const firstCirc = circleCordinates(0);
  const secondCirc = circleCordinates(1);
  const x1 = firstCirc.x;
  const x2 = secondCirc.x;
  const r1 = firstCirc.radius;
  const y1 = firstCirc.y;
  const y2 = secondCirc.y;
  const r2 = secondCirc.radius;

  return circleIntersection(x1, y1, r1, x2, y2, r2);
}
document.addEventListener("click", (e) => {
  // checking only 2 circles are ther
  const totalCircles = document.querySelectorAll(".circle");
  if (totalCircles.length === 2) {
    totalCircles.forEach((circ) => {
      document.body.removeChild(circ);
      circleCordinates.shift();
    });
  }

  const x = e.clientX;
  const y = e.clientY;

  console.log("x = ", x, "y = ", y);

  const radius = Math.floor(Math.random() + (200 - 50) + 50;)
  circleCordinates.push({ x, y });

  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.top = y - radius / 2 + "px";
  circle.style.left = x - radius / 2 + "px";
  circle.style.width = radius + "px";
  circle.style.height = radius + "px";

  document.body.appendChild(circle);
  if (circleCordinates.length === 2) {
    const res = logIfIntersecting();
    console.log("intersecting = ", res);
  }
});
