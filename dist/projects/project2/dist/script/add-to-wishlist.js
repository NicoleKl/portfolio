function toggleHeart(event) {
    event.currentTarget.classList.toggle('not-added-to-wishlist');
    event.currentTarget.classList.toggle('added-to-wishlist');
}

window.addEventListener("DOMContentLoaded", () => {
    const addToListBtns = document.getElementsByClassName("add-to-wishlist");
    console.log(addToListBtns);
    Array.from(addToListBtns).forEach((button) => {
      button.addEventListener("click", toggleHeart);
    });
});