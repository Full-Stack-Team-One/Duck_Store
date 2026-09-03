
// ==============================
// HEADER COMPONENT
// ==============================


const headerContainer = document.getElementById("header");

if (headerContainer) {
fetch("../components/header.html")
.then(response => {
if (!response.ok) {
throw new Error(`Header request failed: ${response.status}`);
}
  return response.text();
})
.then(data => {
  headerContainer.innerHTML = data;

  // Mobile menu
  const menuButton = document.getElementById("menuButton");
  const mainNav = document.getElementById("mainNav");

  if (menuButton && mainNav) {
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.classList.toggle("is-open");

      mainNav.classList.toggle("is-open", isOpen);

      menuButton.setAttribute("aria-expanded", isOpen);
      menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu"
      );
    });
  }
})
.catch(error => {
  console.error("Unable to load the header component.", error);
});

}


// ==============================
// FOOTER COMPONENT
// ==============================

const footerContainer = document.getElementById("footer");

if (footerContainer) {
  fetch("../components/footer.html")
    .then(response => {
      if (!response.ok) {
        throw new Error(`Footer request failed: ${response.status}`);
      }

      return response.text();
    })
    .then(data => {
      footerContainer.innerHTML = data;
    })
    .catch(error => {
      console.error("Unable to load the footer component.", error);
    });
}
