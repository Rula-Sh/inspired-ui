const teamMembers = [
  { name: "Michel Steward", role: "Creative Director" },
  { name: "Emma Rodriguez", role: "Lead Developer" },
  { name: "Sarah Smith", role: "Marketing Manager" },
  { name: "James Wilson", role: "Product Manager" },
  { name: "Julia Kim", role: "UX Designer" },
  { name: "David Gimmel", role: "Founder" },
];

const cards = document.querySelectorAll(".card");
const dots = document.querySelectorAll(".dot");
const memberName = document.querySelector(".member-name");
const memberRole = document.querySelector(".member-role");
const leftArrow = document.querySelector(".nav-arrow.left");
const rightArrow = document.querySelector(".nav-arrow.right");

let currentIndex = -2; // -2 so that it stays on the first card
let isAnimating = false;

function updateCarousel(newIndex) {
  if (isAnimating) return;
  isAnimating = true;

  currentIndex = (newIndex + cards.length) % cards.length;

  // position cards based on offset
  cards.forEach((card, i) => {
    const offset = (i - currentIndex + cards.length) % cards.length;
    card.className = "card"; // clear all prev classes and set .card

    if (offset === 0) card.classList.add("center");
    else if (offset === 1) card.classList.add("right-1");
    else if (offset === 2) card.classList.add("right-2");
    else if (offset === cards.length - 1) card.classList.add("left-1");
    else if (offset === cards.length - 2) card.classList.add("left-2");
    else card.classList.add("hidden");
  });

  dots.forEach((dot, i) =>
    dot.classList.toggle("active", (i + 5) % cards.length === currentIndex),
  );

  memberName.style.opacity = memberRole.style.opacity = "0"; // hide member name between transitions
  setTimeout(() => {
    memberName.textContent = teamMembers[currentIndex].name;
    memberRole.textContent = teamMembers[currentIndex].role;
    memberName.style.opacity = memberRole.style.opacity = "1";
  }, 300);

  setTimeout(() => (isAnimating = false), 800);
}

// arrows navigation
[leftArrow, rightArrow].forEach((arrow, index) =>
  arrow.addEventListener("click", () =>
    updateCarousel(currentIndex + (index ? 1 : -1)),
  ),
);

// dots navigation
dots.forEach((dot, i) =>
  dot.addEventListener("click", () => updateCarousel((i + 5) % cards.length)),
);

// cards navigation (clicking on the card)
cards.forEach((card, i) =>
  card.addEventListener("click", () => updateCarousel(i)),
);

// keyboard navigation (clicking on the card)
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") updateCarousel(currentIndex - 1);
  if (e.key === "ArrowRight") updateCarousel(currentIndex + 1);
});

let swipeX = 0;
// mouse navigation (swiping)
let isMouseDown = false;
document.addEventListener("mousedown", (e) => {
  isMouseDown = true;
  swipeX = e.screenX;
});
document.addEventListener("mouseup", (e) => {
  isMouseDown = false;
});
document.addEventListener("mousemove", (e) => {
  if (!isMouseDown) return;

  const diff = swipeX - e.screenX;
  if (Math.abs(diff) > 50) {
    updateCarousel(currentIndex + (diff > 0 ? 1 : -1));
    isMouseDown = false;
  }
});

// touch navigation (swiping)
document.addEventListener(
  "touchstart",
  (e) => (swipeX = e.changedTouches[0].screenX),
);
document.addEventListener("touchend", (e) => {
  const diff = swipeX - e.changedTouches[0].screenX;
  if (Math.abs(diff) > 50) updateCarousel(currentIndex + (diff > 0 ? 1 : -1));
});
