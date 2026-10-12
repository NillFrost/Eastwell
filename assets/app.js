/* Eastwell site settings. Publish confirmed server connection details here. */
const SERVER = {
  javaAddress: "",
  javaVersion: "",
  bedrockAddress: "",
  bedrockPort: "",
  bedrockVersion: ""
};

const PLACEHOLDER = "Скоро";
const toast = document.querySelector(".toast");
let toastTimeout;

function notify(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.remove("show"), 2800);
}

function fillServerDetails() {
  document.querySelectorAll("[data-server]").forEach((element) => {
    const key = element.dataset.server;
    element.textContent = SERVER[key] || PLACEHOLDER;
  });

  document.querySelectorAll("[data-copy]").forEach((button) => {
    const value = SERVER[button.dataset.copy];
    button.disabled = !value;
    button.title = value ? "Скопировать в буфер обмена" : "Адрес пока не опубликован";
  });
}

async function copyValue(key) {
  const value = SERVER[key];
  if (!value) return;
  try {
    await navigator.clipboard.writeText(value);
    notify("Скопировано в буфер обмена");
  } catch {
    notify("Не удалось скопировать. Выдели адрес вручную.");
  }
}

function setupNavigation() {
  const button = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  if (!button || !nav) return;

  const close = () => {
    nav.classList.remove("open");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Открыть меню");
    button.textContent = "☰";
  };

  button.addEventListener("click", () => {
    const opening = !nav.classList.contains("open");
    nav.classList.toggle("open", opening);
    button.setAttribute("aria-expanded", String(opening));
    button.setAttribute("aria-label", opening ? "Закрыть меню" : "Открыть меню");
    button.textContent = opening ? "×" : "☰";
  });

  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", close));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") close();
  });

  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && !button.contains(event.target)) close();
  });
}

function setupScrollReveal() {
  const elements = [...document.querySelectorAll("[data-reveal]")];
  if (!elements.length) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver((entries, currentObserver) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add("visible");
      currentObserver.unobserve(entry.target);
    }
  }, { threshold: 0.08, rootMargin: "0px 0px -25px 0px" });

  document.documentElement.classList.add("motion-ready");
  elements.forEach((element) => observer.observe(element));
}

document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", () => copyValue(button.dataset.copy));
});
document.querySelectorAll("[data-soon]").forEach((button) => {
  button.addEventListener("click", () => notify("Магазин пока не открыт"));
});
document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

fillServerDetails();
setupNavigation();
setupScrollReveal();
