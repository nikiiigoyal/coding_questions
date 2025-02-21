const circleCordinates = [];

function circleIntersection(x0, y0, r0, x1, y1, r1) {
  return Math.hypot(x0 - x1, y0 - y1) <= r0 + r1;
}

function logIfIntersecting() {
  // Fixed array access syntax
  const firstCirc = circleCordinates[0];
  const secondCirc = circleCordinates[1];
  const x1 = firstCirc.x;
  const x2 = secondCirc.x;
  const r1 = firstCirc.radius; // Note: radius wasn't being stored in the coordinates array
  const y1 = firstCirc.y;
  const y2 = secondCirc.y;
  const r2 = secondCirc.radius; // Note: radius wasn't being stored in the coordinates array

  return circleIntersection(x1, y1, r1, x2, y2, r2);
}

document.addEventListener("click", (e) => {
  // checking only 2 circles are there
  const totalCircles = document.querySelectorAll(".circle");
  if (totalCircles.length === 2) {
    totalCircles.forEach((circ) => {
      document.body.removeChild(circ);
    });
    circleCordinates.length = 0; // Clear the array
  }

  const x = e.clientX;
  const y = e.clientY;

  console.log("x = ", x, "y = ", y);

  // Fixed random radius calculation
  const radius = Math.floor(Math.random() * (200 - 50) + 50);

  // Store radius along with coordinates
  circleCordinates.push({ x, y, radius });

  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.top = `${y - radius}px`; // Fixed positioning
  circle.style.left = `${x - radius}px`; // Fixed positioning
  circle.style.width = `${radius * 2}px`;
  circle.style.height = `${radius * 2}px`;

  document.body.appendChild(circle);

  if (circleCordinates.length === 2) {
    const res = logIfIntersecting();
    console.log("intersecting = ", res);
  }
});
