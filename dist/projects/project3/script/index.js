let currentOpen;

function accordion(event) {
  const activeClass = "card-open";
  currentOpen = event.currentTarget.getElementsByClassName(activeClass)[0];
  const card = event.target.closest(".accordion-card");
  if (currentOpen === card) {
    currentOpen.classList.remove(activeClass);
    currentOpen = null;
  } else {
    currentOpen && currentOpen.classList.remove(activeClass);

    card.classList.add(activeClass);
    currentOpen = card;
  }

  window.addEventListener("click", function () {
    if (!event.target.closest(".accordion") && currentOpen) {
      currentOpen.classList.remove(activeClass);
    }
  });
}

window.addEventListener("DOMContentLoaded", () => {
    const accordions = document.getElementsByClassName("accordion");
    Array.from(accordions).forEach((element) => {
    element.addEventListener("click", accordion);
})})
