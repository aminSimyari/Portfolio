document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
  const skillBars = document.querySelectorAll(".skill-progress");

  if (skillBars.length > 0) {
    skillBars.forEach((bar) => {
      const value = bar.getAttribute("data-skill");
      bar.style.width = value;
    });
  }
});
