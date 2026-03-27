document.addEventListener("DOMContentLoaded", function () {
  const navHTML = `
    <nav class="navbar">
      <span class="title" id="home-title">
        <a href="/#">Home</a>
      </span>
      <div class="container" id="carousels-container">
        <span class="title" id="carousels-title">Carousels</span>
        <ul id="carousels-list">
          <a href="/carousels/3d-carousel/">
            <li>3D Carousel</li>
          </a>
          <a href="/carousels/draggable-carousel/">
              <li>Draggable Carousel</li>
          </a>
          <a href="/carousels/infinite-auto-scroll-carousel/">
              <li>Infinite Auto Scroll Carousel</li>
          </a>
          <a href="/carousels/scroll-carousel/">
            <li>Scroll Carousel</li>
          </a>
          <a href="/carousels/slide-carousel/">
            <li>Slide Carousel</li>
          </a>
        </ul>
      </div>
      <div class="container" id="animations-container">
        <span class="title">Animations</span>
        <ul id="animations-list">
          <a href="/animations/border-hover/">
            <li>Border Hover</li>
          </a>
          <a href="/animations/card-hover/">
            <li>Card Hover</li>
          </a>
          <a href="/animations/rotating-border/">
            <li>Rotating Border</li>
          </a>
        </ul>
      </div>
    </nav>
    `;

  // insert nav at the beginning of the body
  document.body.insertAdjacentHTML("afterbegin", navHTML);
  const containers = document.getElementsByClassName("container");

  for (container of containers) {
    const title = container.childNodes[1];
    const list = container.childNodes[3];
    container.addEventListener("mouseover", () => {
      list.style.display = "block";
      title.style.backgroundColor = "#0000008a";
    });
    container.addEventListener("mouseout", () => {
      list.style.display = "none";
      title.style.backgroundColor = "transparent";
    });
  }
});
