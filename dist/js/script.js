// Scrolling Navbar
const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const positionWindow = window.scrollY > 0;
  navBar.classList.toggle("active", positionWindow);
});

// Menu
const menuBar = document.querySelector(".fa-bars");
const showNavBar = document.querySelector(".col-navigation");

menuBar.addEventListener("click", () => {
  showNavBar.classList.toggle("active");
});
