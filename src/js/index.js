import "../scss/home.scss";
import gsap from "gsap";

const overlayAnimation = (node1, node2) => {
  const tl = gsap.timeline();
  tl.from(node1, {
    duration: 1,
    opacity: 0,
    scale: 2,
    ease: "expo.out",
    delay: 1,
  }).to(node2, {
    duration: 1.5,
    ease: "expo.in",
    top: "100%",
    delay: 1,
    display: "none",
    onComplete: () => {
      document.body.classList.remove("noscroll");
    },
  });
};

(function () {
  const overlay = document.querySelector("[data-overlay]");
  const overlayLogo = document.querySelector("[data-overlay-logo]");

  overlayAnimation(overlayLogo, overlay);
})();
