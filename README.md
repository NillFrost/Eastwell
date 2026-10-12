# Eastwell · website

A custom static landing page for the Eastwell Minecraft project, built with plain HTML, CSS and JavaScript. No build step or dependencies required at deployment time.

## Pages
- `index.html` — homepage with an original animated city illustration, information about the server, and separate Java/Bedrock connection blocks.
- `donate.html` — six visual support-package cards; payment is intentionally not implemented.

## Assets and motion
- `assets/style.css` — handcrafted dark-navy responsive design, editorial typography, scrolling ticker, hover effects, transitions, and mobile layout.
- `assets/city.svg` — original scalable night-time city drawing with CSS-animated car and lights.
- `assets/app.js` — copy controls, notifications, mobile menu, and IntersectionObserver scroll reveals.
- `assets/favicon.svg` — Eastwell monogram.

Motion respects the visitor's `prefers-reduced-motion` setting. Scroll animation only hides content when JavaScript and IntersectionObserver are available.

## Set connection information
Edit the `SERVER` object at the top of `assets/app.js`:
```js
const SERVER = {
  javaAddress: "",    // publicly reachable Java IP or hostname
  javaVersion: "",    // supported Java version
  bedrockAddress: "", // publicly reachable Bedrock IP or hostname
  bedrockPort: "",    // public Bedrock port
  bedrockVersion: ""  // supported Bedrock version
};
```
Empty values show "Скоро" and disable copying. The project contains no confirmed public endpoint at this time.

## Hosting
GitHub Pages: **Settings → Pages → Build and deployment → Deploy from a branch → main / (root)**.
Public URL should be `https://nillfrost.github.io/Eastwell/` once Pages deployment has completed. Relative links also work under a subdirectory.

## Scope
Changes are confined to the `Eastwell` repository. The `MinecraftRP` server repository is not modified.

Donations are **visual placeholders only**: there is no checkout, payment processing or item fulfillment.
