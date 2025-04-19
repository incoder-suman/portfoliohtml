const menuBtn = document.querySelector(".menu-btn");
  const closeBtn = document.querySelector(".close-btn");
  const navMenu = document.querySelector(".brand-2");

  menuBtn.addEventListener("click", () => {
    navMenu.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });