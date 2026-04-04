// particles-config.js
particlesJS("particles-js", {
  particles: {
    number: { value: 535, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 1, random: true, anim: { enable: true, speed: 1, opacity_min: 0, sync: false } },
    size: { value: 1, random: true },
    line_linked: { enable: false },
    move: { enable: true, speed: 1, random: true, out_mode: "out" }
  },
  interactivity: {
    detect_on: "canvas",
    events: { onhover: { enable: false }, onclick: { enable: false }, resize: true }
  },
  retina_detect: true
});
