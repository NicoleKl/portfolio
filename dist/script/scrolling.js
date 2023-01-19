window.addEventListener("scroll", function () {
  const distance = window.scrollY;
  document.querySelector("header").style.transform = `translateY(${
    distance * 1
  }px)`;
  document.querySelector(".container").style.transform = `translateY(${
    distance * 0.3
  }px)`;
  setTimeout(() => {
    document
      .querySelector("section .projectsSection")
      .classList.add("animate-me");
  }, 400);
});
