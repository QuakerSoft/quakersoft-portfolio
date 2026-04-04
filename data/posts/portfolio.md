Instead of using templates, I wanted to learn real web fundamentals—something simple yet effective to demonstrate the basics.

## What I Wanted to Learn

- How routing works  
- JSON-driven UI  
- DOM manipulation  
- Client-side rendering  

## What I Did

Nothing fancy here—just plain HTML, CSS, and vanilla JavaScript.

The only "fancy" feature is the animated background. Rather than reinvent the wheel, I used a third-party JavaScript library: [particles.js](https://vincentgarreau.com/particles.js/#default).

You can customize your animation, and it generates the code for you.

As I get more comfortable with JavaScript, I plan to revisit this project and rebuild it using a frontend framework like React—adding smoother transitions and more advanced UI.

## How It Works

The site uses:
- HTML/CSS for structure and styling  
- JavaScript for fetching and rendering  
- JSON for dynamic content  
- Markdown files for blog posts  

## Example Code

```javascript
particlesJS("particles-js", {
  particles: {
    number: { value: 535, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: {
      value: 1,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0, sync: false }
    },
    size: { value: 1, random: true },
    line_linked: { enable: false },
    move: { enable: true, speed: 1, random: true, out_mode: "out" }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false },
      onclick: { enable: false },
      resize: true
    }
  },
  retina_detect: true
});