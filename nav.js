document.addEventListener("DOMContentLoaded", function () {
  const navHTML = `
    <nav class="navbar">
      <span class="title">
        <a href="/#">Home</a>
      </span>
      <span class="title">
        <a href="#featured">Featured</a>
      </span>
      <div class="container" id="carousels-container">
        <span class="title">
          <a href="#carousels">Carousels</a>
        </span>
        <ul>
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
        <span class="title">
          <a href="#animations">Animations</a>
        </span>
        <ul>
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
      title.childNodes[1].style.backgroundColor = "#0000008a";
      title.childNodes[1].style.color = "white";
    });
    container.addEventListener("mouseout", () => {
      list.style.display = "none";
      title.childNodes[1].style.backgroundColor = "transparent";
      title.childNodes[1].style.color = "#1e3c72";
    });
  }
});
