document.addEventListener("DOMContentLoaded", () => {
  const btnMobile = document.querySelector(".mobile-button");
  const nav = document.querySelector(".menu-holder");
  const topbar = document.getElementById("header");
  btnMobile.addEventListener("click", (e) => {
    nav.classList.toggle("visible-mobile");
  });
  document.addEventListener("scroll", () => {
    if (pageYOffset >= 100) {
      topbar.classList.add("active");
      topbar.style.padding = "20px 0 ";
    } else {
      topbar.classList.remove("active");
    }
  });
});
