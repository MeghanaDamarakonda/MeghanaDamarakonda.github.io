document.addEventListener("DOMContentLoaded", function () {
  let currentPage = window.location.pathname.split("/").pop();
  let pageMap = {
    "index.html": "projects-link",
    "certifications.html": "certifications-link",
    "About.html": "about-link",
    "contact.html": "contact-link",
  };

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.style.color = "";
    link.style.fontWeight = "normal";
    link.style.textDecoration = "none";
  });

  if (pageMap[currentPage]) {
    let activeLink = document.getElementById(pageMap[currentPage]);
    activeLink.style.color = "#00bcd4";
    activeLink.style.fontWeight = "bold";
    activeLink.style.textDecoration = "underline";
  }
});
