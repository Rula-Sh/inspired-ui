document.addEventListener("DOMContentLoaded", function () {
  const navHTML = `
    <nav class="navbar">
      <span class="title" id="home-title">
        <a href="/#">Home</a>
      </span>
      <div class="container" id="carousels-container">
        <span class="title" id="carousels-title">Carousels</span>
        <ul id="carousels-list">
          
        </ul>
      </div>
      <div class="container" id="animations-container">
        <span class="title">Animations</span>
        <ul id="animations-list">
          
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
