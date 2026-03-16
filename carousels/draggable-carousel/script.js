
      const track = document.getElementById("image-track");
      //   event mouse down
      window.onmousedown = (e) => {
        track.dataset.mouseDownAt = e.clientX;
      };
      //   event mouse up
      window.onmouseup = (e) => {
        track.dataset.mouseDownAt = "0";
        track.dataset.prevPercentage = track.dataset.percentage;
      };
      //   event mouse move
      window.onmousemove = (e) => {
        // if mouse up
        if (track.dataset.mouseDownAt == "0") return;

        const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
        const maxDelta = window.innerWidth / 2;

        const percentage = (mouseDelta / maxDelta) * -20;
        const nextPreUniconstrained =
          parseFloat(track.dataset.prevPercentage) + percentage;

        // calculate how far the carousel can actually scroll
        const trackWidth = track.scrollWidth;
        const pageWidth = document.body.clientWidth + -50;
        const maxPercentage = -((trackWidth - pageWidth) / trackWidth) * 100; // if the carousel is wider than the container, calculate the maximum scroll distance as a percentage

        // prevent scrolling beyond the content, between 0% (start) and maxPercentage (end)
        const nextPercentage = Math.max(
          Math.min(nextPreUniconstrained, 0),
          maxPercentage,
        );
        track.dataset.percentage = nextPercentage;

        track.animate(
          { transform: `translate(${nextPercentage}%, -50%)` },
          {
            duration: 1200,
            fill: "forwards",
          },
        );
      };

      window.addEventListener("resize", () => {
        // recalculate bounds and adjust position (else on resize the difference will show until i try to drag)
        const trackWidth = track.scrollWidth;
        const pageWidth = document.body.clientWidth + -50;
        const maxPercentage = -((trackWidth - pageWidth) / trackWidth) * 100;

        // if the current percentage is beyond new bounds, adjust it
        let currentPercentage = parseFloat(track.dataset.percentage) || 0;
        if (currentPercentage < maxPercentage) {
          track.dataset.percentage = maxPercentage;
          track.dataset.prevPercentage = maxPercentage;

          track.animate(
            { transform: `translate(${maxPercentage}%, -50%)` },
            { duration: 300, fill: "forwards" },
          );
        }
      });