/* =========================
   Navbar Active Link
========================= */
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
  link.addEventListener("click", () => {

    // allow browser to scroll first
    setTimeout(() => {
      navLinks.forEach(item => item.classList.remove("active"));
      link.classList.add("active");
    }, 10);

  });
});


/* =========================
   Live Search (Menu Items)
========================= */
const searchInput = document.querySelector("input[type='search']");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const value = this.value.toLowerCase();
    const items = document.querySelectorAll(".menu-item");

    items.forEach(item => {
      item.style.display = item.textContent.toLowerCase().includes(value)
        ? "block"
        : "none";
    });
  });
}

/* =========================
   Dark / Light Theme Toggle
========================= */
const toggle = document.getElementById("themeToggle");

if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
  });
}

/* =========================
   Carousel Control
========================= */
const carousel = document.querySelector("#imageslider");

if (carousel) {
  new bootstrap.Carousel(carousel, {
    interval: 3500,
    ride: "carousel",
    pause: false
  });
}

/* =========================
   Fade-in on Scroll
========================= */
const faders = document.querySelectorAll(".fade-in");

if (faders.length > 0) {
  window.addEventListener("scroll", () => {
    faders.forEach(el => {
      const rect = el.getBoundingClientRect().top;
      if (rect < window.innerHeight - 100) {
        el.classList.add("show");
      }
    });
  });
}

/* =========================
   Cart Counter
========================= */
let cart = 0;

function addToCart() {
  cart++;
  const cartCount = document.getElementById("cartCount");
  if (cartCount) {
    cartCount.textContent = cart;
  }
}
