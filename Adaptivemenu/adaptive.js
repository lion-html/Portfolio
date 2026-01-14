const burger = document.getElementById("burger");
const drawer = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");
const header = document.getElementById("header");

function openMenu() {
  drawer.classList.add("is-open");
  overlay.classList.add("is-open");
  burger.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  drawer.classList.remove("is-open");
  overlay.classList.remove("is-open");
  burger.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

burger.addEventListener("click", () => {
  const isOpen = drawer.classList.contains("is-open");
  isOpen ? closeMenu() : openMenu();
});

closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

// Close on ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

// Close on click menu item + set active
drawer.addEventListener("click", (e) => {
  const link = e.target.closest("a.nav__link");
  if (!link) return;

  setActiveLink(link.getAttribute("href"));
  closeMenu();
});

// Set active link in both navs
function setActiveLink(hash) {
  document.querySelectorAll(".nav__link").forEach(a => a.classList.remove("is-active"));
  document.querySelectorAll(`a.nav__link[href="${hash}"]`).forEach(a => a.classList.add("is-active"));
}

// Header shadow on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) header.classList.add("is-scrolled");
  else header.classList.remove("is-scrolled");
});
