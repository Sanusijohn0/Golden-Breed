const navbarToggler = document.getElementById("navbar-toggler");
const sideBar = document.getElementById("sidebar");

navbarToggler.addEventListener("click", () => {
  sideBar.classList.toggle("none");
});
