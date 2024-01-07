document.querySelector(".bttn").addEventListener("click", () => {
    document.querySelector(".bars-menu").classList.toggle("active");
  });
  

  document.querySelectorAll(".bars-menu").forEach((item) => {
    item.addEventListener("click", () => {
      document.querySelector(".bars-menu").classList.toggle("active");
    });
  });

