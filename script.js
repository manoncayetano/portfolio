
const cards = document.querySelectorAll(".media-card");

cards.forEach(card => {
  const video = card.querySelector(".media-video");

  card.addEventListener("mouseenter", () => {
    video.play();
  });

  card.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});